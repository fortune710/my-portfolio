import { ProjectCardNew } from "@/components/project-card"
import { getProjects } from "@/services/projects"


export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <main className="text-white">
            <div className="px-3 md:px-10 lg:px-16 gap-5 pt-8 md:pt-16 text-left space-y-2">
                <h1 className="font-bold font-inter text-4xl lg:text-5xl">My Projects</h1>
                <p className="font-medium font-jarkata text-lg lg:text-2xl">Check out the cool stuff I&apos;ve built!</p>
            </div>

            <div className="animate-fade-in-bottom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-10 lg:px-16 gap-5 pt-3 md:pt-4 gap-y-5 md:gap-y-7">
                {
                    projects.map((project) => <ProjectCardNew project={project}/>)
                }
            </div>
        </main>
    )
}