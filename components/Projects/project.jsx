import { IoLink, IoFolder, IoLogoGithub } from "react-icons/io5";
import { MdFolder } from "react-icons/md";
import styles from './project.module.scss';

import { motion } from "framer-motion";
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
        <motion.div 
            onClick={() => router.push(`/projects/${id}`)}
            ref={ref}
            style={fadeInAnimation}
            className={styles.projectCard}
        >
            <div className={styles.projectIcons}>
                <div>
                    <a href={link}>
                        <IoLink/>
                    </a>
                    <a href={githubLink}>
                        <IoLogoGithub/>
                    </a>
                </div>
                <MdFolder/>
            </div>
            <article className={styles.projectInfo}>
                <h3>{title}</h3>
                <p>{description}</p>
            </article>
            <div className={styles.projectTech}>
            {
                tags?.map(tag => (
                    <span className={styles.projectTag} style={{ background: tag.color }}>
                        {tag.name}
                    </span>
                ))
            }
            </div>
        </motion.div>
    )
}