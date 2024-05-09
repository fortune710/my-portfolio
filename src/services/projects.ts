import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/utils/firebase";
import { cache } from "react";


const projectCollections = collection(firestore, "projects")

interface Project {
    id: string;
    title: string;
    description: string;
    github: string;
    logo: string;
    link: string;
    image: string,
    skills: string[];
    type: string;
    year: string;
    featured?: boolean;
}

export const getProjects = cache(async () => {
    const projects = (await getDocs(projectCollections)).docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return projects as Project[];
})