import { getProjects } from "@/services/projects"
import Link from "next/link"
import Image from "next/image"


export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <main className="text-white">
            <div className="px-3 md:px-10 lg:px-16 gap-5 pt-8 md:pt-16 text-left space-y-2">
                <h1 className="font-bold font-inter text-4xl lg:text-5xl">My Projects</h1>
                <p className="font-medium font-jarkata text-lg lg:text-2xl">Check out the cool stuff I&apos;ve built!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-10 lg:px-16 gap-5 pt-3 md:pt-4">
                {
                projects.map((project) => (
                    <div className="w-full bg-dark border border-dark-muted rounded-[40px] px-8 py-10 space-y-3 text-white" key={project.title}>
                    <div className="flex justify-between items-start">
                        <Image
                        src={project.logo}
                        alt={project.title}
                        width={200}
                        height={200}
                        className="rounded-lg max-sm:w-[100px] max-sm:h-[100px]"
                        />

                        <Link target="_blank"  className="border border-white rounded-md py-4 px-5 text-white font-medium" href={project.link}>
                        Checkout Live App
                        </Link>
                    </div>

                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">{project.title}</h2>
                    <p>{project.year} - {project.type}</p>

                    <p className="lg:text-lg text-[#B3B3B3]">{project.description}</p>

                    <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="rounded-lg w-full"
                    />

                    </div>
                ))
                }

            </div>
        </main>
    )
}