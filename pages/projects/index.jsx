import Head from "next/head";
import { ProjectsContainer } from "../../components"

const ProjectsPage = () => {
    return(
        <main className="padding-top">
            <Head>
                <title>My Work</title>
            </Head>
            <ProjectsContainer/>
        </main>
    )
}

export default ProjectsPage;