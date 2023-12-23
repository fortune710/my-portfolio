import { IoLink, IoFolder, IoLogoGithub } from "react-icons/io5";
import { MdFolder } from "react-icons/md";
import './project.module.scss';
import { GoArrowRight } from "react-icons/go"

import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

export const Project = ({ link, githubLink, title, description, tags, id }) => {
    const { ref, inView } = useInView();
    const router = useRouter();

    const fadeInAnimation = {
        opacity: inView ? 1 : 0,
        translateY: inView ? 0 : "none",
        transition: "all 0.5s ease-in 0.5s",
    }

    
    return(
        <div 
            onClick={() => router.push(`/projects/${id}`)}
            ref={ref}
            className="w-full rounded-lg group"
        >
            <div className="p-3 rounded-md h-full group-hover:glass w-full">

                <article className="flex flex-col justify-evenly gap-2 md:gap-4">
                    <div className="group-hover:text-primary flex items-center gap-1">
                        <h3 className="font-semibold">{title}</h3>
                        <GoArrowRight/>
                    </div>
                    <p>{description}</p>
                    <div className="projectTech">
                    {
                        tags?.map(tag => (
                            <span key={tag.name} className="px-3 py-1 rounded-2xl bg-green-900/70 text-primary font-semibold">
                                {tag.name}
                            </span>
                        ))
                    }
                    </div>
                </article>
            </div>
        </div>
    )
}