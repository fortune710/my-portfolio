import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Projects } from "../../components/Projects/projects-data";
import styles from "./style.module.scss";
import Image from "next/image";
import { IoLinkOutline, IoLogoGithub } from "react-icons/io5";
import Head from "next/head";

const ProjectDetailPage = () => {
    const router = useRouter();
    const id = Number(router.query["id"]);
    const [project, setProject] = useState(undefined);

    useEffect(() => {
        const [project] = Projects.filter((project) => project.id === id) 
        setProject(project);
    }, [id])
    
    if(!project) return <h1>Loading...</h1>

    return(
        <main className={styles.projectDetail}>
            <Head>
                <title>{project?.title}</title>
            </Head>

            <div className={styles.imageHolder}>
                <Image 
                    src={project?.imageUrl}
                    width={350}
                    height={500}
                    alt={project?.title}
                />
            </div>
            <div className={styles.projectInfo}>
                <h1>{project?.title}</h1>
                <p>{project?.description}</p>

                <h3>Tools used for this project</h3>
                <ul>
                {
                    project?.tools?.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))
                }
                </ul>

                <div>
                    <a 
                        target="_blank" 
                        tabIndex="0" 
                        href={project?.githubLink}
                        rel="noreferrer"
                    >
                        <IoLogoGithub/>
                        Check it out on Github
                    </a>

                    <a 
                        target="_blank" 
                        tabIndex="0" 
                        href={project?.link}
                        rel="noreferrer"
                    >
                        <IoLinkOutline/>
                        View the Project
                    </a>
                </div>


            </div>
        </main>
    )
}

export default ProjectDetailPage;