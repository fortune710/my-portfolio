import { Button } from "@/components/ui/button";
import { getProjects } from "@/services/projects"
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CreateProjectDialog from "./create-project";


export default async function AdminLayout({ children }: {
    children: React.ReactNode,
}) {

    const projects = await getProjects();

    return (
        <main className="grid grid-cols-[_1fr_2fr] bg-white min-h-screen">
            <div>
                <ul className="pt-5 px-3 space-y-2">
                    <li>
                        <CreateProjectDialog>
                            <Button className="w-full">
                                <Plus/>
                                Add New Project
                            </Button>
                        </CreateProjectDialog>
                    </li>
                    {
                    projects.map(project => (
                        <li key={project.title}>
                            <Link className="flex gap-3 items-center hover:brightness-75 rounded-md" href={`/admin/${project.id}`}>
                                <Image
                                    src={project.logo}
                                    alt={project.title}
                                    width={100}
                                    height={100}
                                    className="rounded-lg"
                                />
                                <div>
                                    <h2 className="font-bold text-2xl">
                                        {project.title}
                                    </h2>
                                    <p>
                                        {project.type}
                                        {
                                            !project.featured ? null :
                                            <span className="border border-zinc-800 ml-3 text-xs rounded-2xl px-2 py-0.5 text-zinc-800">
                                                Featured
                                            </span>
                                        }
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))
                    }
                </ul>

            </div>
        
            <div>
                { children }
            </div>

        </main>
    )
}