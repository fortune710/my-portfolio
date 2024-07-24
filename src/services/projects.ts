import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/utils/firebase";
import { cache } from "react";


const projectCollections = collection(firestore, "projects")

export interface Project {
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

export const getProjectDetails = async (id: string) => {
    const projects = await getProjects();
    const project = projects?.find((project) => project.id === id);
    return project;
}
