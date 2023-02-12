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
                <div className={styles.projects}>
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
