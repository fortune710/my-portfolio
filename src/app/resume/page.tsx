import { getResumeData } from "@/services/resume";
import ResumePage from "./form";

export default async function GenerateResume() {
    const resume = await getResumeData()

    return (
        <ResumePage experiences={resume.experience} projects={resume.projects} skills={resume.skills} />
    )
}