'use server'

import { firestore, storage } from "@/utils/firebase";
import { kv, createClient } from "@vercel/kv";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { revalidatePath } from "next/cache";

const projects = createClient({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
    enableTelemetry: true
})

function generateRandomSequence(): string {
    return Math.random().toString(36).substr(2, 10);
}




export default async function editProject(formData: FormData, projectId: string) {
    const projectsDoc = doc(firestore, "projects", projectId);


    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const github = formData.get("github")?.toString();
    const link = formData.get("link")?.toString();
    const skills = formData.get("skills")?.toString();
    const type = formData.get("type")?.toString();
    const year = formData.get("year")?.toString();

    const featured = formData.get("featured")?.toString()
    const in_development = formData.get("in_development")?.toString()
    
    const image = formData.get("image") as File;
    const logo = formData.get("logo") as File;
    
    try {
        let imageUrl: string | null = null;
        let logoUrl: string | null = null;
    
        const uploadTasks: Promise<void>[] = [];
    
        if (image && image.size > 0) {
            uploadTasks.push((async () => {
                const imageBuffer = await image.arrayBuffer();
                const imageRef = ref(storage, `project-images/${generateRandomSequence()}.png`);
                const imageResult = await uploadBytes(imageRef, imageBuffer);
                imageUrl = await getDownloadURL(imageResult.ref);
            })());
        }
    
        if (logo && logo.size > 0) {
            uploadTasks.push((async () => {
                const logoBuffer = await logo.arrayBuffer();
                const logoRef = ref(storage, `logo-images/${generateRandomSequence()}.png`);
                const logoResult = await uploadBytes(logoRef, logoBuffer);
                logoUrl = await getDownloadURL(logoResult.ref);
            })());
        }
    
        await Promise.all(uploadTasks);
        
        const updateData: any = {
            title,
            description,
            skills: skills?.split(','),
            github,
            link,
            year,
            type,
            featured: !!featured,
            in_development: !!in_development
        };
        
        if (imageUrl !== undefined && imageUrl !== null) {
            updateData.image = imageUrl;
        }
        
        if (logoUrl !== undefined && logoUrl !== null) {
            updateData.logo = logoUrl;
        }
        
        await updateDoc(projectsDoc, updateData);
        revalidatePath("/admin")
        revalidatePath("/")
        
        
         
    } catch {
        throw Error('An error occurred')
    }

}