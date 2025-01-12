'use server'

import { firestore, storage } from "@/utils/firebase";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { revalidatePath } from "next/cache";


function generateRandomSequence(): string {
    return Math.random().toString(36).substr(2, 10);
}

const projectsCollection = collection(firestore, "projects");



export default async function createProject(formData: FormData) {

    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const github = formData.get("github")?.toString();
    const link = formData.get("link")?.toString();
    const skills = formData.get("skills")?.toString();
    const type = formData.get("type")?.toString();
    const year = formData.get("year")?.toString();

    const featured = formData.get("featured")?.toString()
    
    const image = formData.get("image") as File;
    const logo = formData.get("logo") as File;


    
    try {

        const [imageBuffer, logoBuffer] = await Promise.all([
            await image.arrayBuffer(),
            await logo.arrayBuffer(),
        ])
        
        
        const imageRef = ref(storage, `project-images/${generateRandomSequence()}.png`)
        const logoRef = ref(storage, `logo-images/${generateRandomSequence()}.png`)
    
    
        const [imageResult, logoResult] = await Promise.all([
            await uploadBytes(imageRef, imageBuffer),
            await uploadBytes(logoRef, logoBuffer),
        ])
    
        const [imageUrl, logoUrl] = await Promise.all([
            await getDownloadURL(imageResult.ref),
            await getDownloadURL(logoResult.ref),
        ])
        
    
        
        await addDoc(projectsCollection, {
            title, 
            description, 
            skills: skills?.split(','),
            image: imageUrl, 
            github, 
            link,  
            logo: logoUrl,
            year,
            type,
            featured: !!featured
        })  
        revalidatePath("/admin")
        revalidatePath("/")
        
         
    } catch (err: any) {
        console.log(err)
        throw Error('An error occured')
    }

}