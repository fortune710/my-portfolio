import { Project } from "@/services/projects";
import Link from "next/link"
import Image from "next/image"
import { MoveUpRight } from "lucide-react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";


export const ProjectCard = ({ project }: { project: Project }) => (
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
)

export const ProjectCardNew = ({ project }: { project: Project }) => {

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="rounded-lg w-full"
                    />

                    <div className="flex justify-between items-center mt-5">
                        <div>
                            <h2 className="font-semibold text-2xl">{project.title}</h2>
                            <p>{project.year} - {project.type}</p>
                        </div>

                        <button>
                            <MoveUpRight/>
                        </button>
                    </div>
                </div>
            </AlertDialogTrigger>

            <AlertDialogContent className="bg-[#030303] border-zinc-700 text-white w-full md:w-1/2 lg:w-1/3">
                <AlertDialogHeader>
                    <AlertDialogTitle>{project.title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {project.year} - {project.type}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <section className="space-y-3 md:space-y-5 max-h-[480px] overflow-y-scroll custom-scroll">
                    <p>{project.description}</p>

                    <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg w-full"
                    />

                    <div>
                        <h3 className="font-semibold text-lg">Skills</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {
                                project.skills.map((skill) => (
                                    <span className="bg-primary text-[#030303] font-semibold py-1 px-2.5 rounded-[70px]" key={skill}>{skill}</span>
                                ))
                            }
                        </div>
                    </div>

                </section>

                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-[#030303]">Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}