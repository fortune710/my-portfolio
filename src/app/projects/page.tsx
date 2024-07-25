import { ProjectCardNew } from "@/components/project-card"
import { getProjects } from "@/services/projects"


export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <main className="text-white px-2">
            <section className="px-3 md:px-10 lg:px-16 gap-5 pt-8 md:pt-16 text-left space-y-2 md:w-3/4 mb-2">
                <h1 className="font-bold font-inter text-4xl lg:text-5xl">My Projects</h1>
                <p className="font-medium font-jarkata text-lg lg:text-2xl">
                    This page showcases a collection of my full-stack software engineering projects. 
                    Explore web and mobile applications I've built from the ground up, as well as innovative solutions 
                    powered by AI. Each project is a testament to my passion for crafting exceptional digital experiences. 
                </p>
            </section>

            <div className="animate-fade-in-bottom mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-10 lg:px-16 gap-5 pt-3 md:pt-4 gap-y-5 md:gap-y-7 pb-10">
                {
                    projects.map((project) => <ProjectCardNew key={project.id} project={project}/>)
                }
            </div>
        </main>
    )
}