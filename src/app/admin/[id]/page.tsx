import { getProjects } from "@/services/projects";
import { EditPageForm } from "./edit-form";



export default async function EditProjectPage({ params }: {
    params: { id: string }
 }) {
    const projects = await getProjects();
    const project = projects.find(p => p.id === params.id);
    
    return (
        <EditPageForm project={project!}/>
    )
}