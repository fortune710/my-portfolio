import { Projects } from "./projects-data"
import styles from './project.module.scss';
import { Project } from "./project";
import { SectionTitle } from "../Title/title";
import { useRouter } from "next/router";

export const ProjectsContainer = ({ limit }) => {
    const router = useRouter();

    return(
        <>
            <SectionTitle name="My Work"/>
            <section>
                <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-4 my-2 md:my-3">
                {
                    !limit ?
                    Projects.map(project => (
                        <Project key={project.id} {...project}/>
                    ))  
                    : Projects.slice(0, limit).map(project => (
                        <Project key={project.id} {...project}/>
                    ))          
                }
                </div>
                { limit ? 
                    <div className="w-full text-center">
                        <button 
                            onClick={() => router.push("/projects")}
                            className={`work-sans ${styles.seeAll}`}
                        >
                            See All
                        </button>
                    </div>
                    : null
                }
            </section>    
        </>
    )
}
