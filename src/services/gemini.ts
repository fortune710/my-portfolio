import { returnResumeInstructions } from "@/lib/resume";
import { ResumeData } from "@/lib/types";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });


export function generatePrompt(
    resume: ResumeData, 
    jobDescription?: string, 
    examples?: { resumes: string[]; bulletPoints: string[] },
    mandatoryInstructions?: string[]
) {
    return `
        You are a professional resume writer and tailoring expert tasked with generating an optimized, ATS-friendly resume. Use the provided input data, examples, and guidelines to create a compelling and professional document.

        ### Important Guidelines:
        1. **Mandatory Instructions**:
        - These are non-negotiable and must be strictly followed:
        ${mandatoryInstructions?.map((instruction, index) => `${index + 1}. ${instruction}`).join("\n") || "No mandatory instructions provided."}

        2. **Creative Metrics**:
        - Where specific metrics or impact data are missing, you may generate **realistic and plausible impact metrics** (e.g., percentages, dollar amounts, or other quantifiable results) to strengthen the resume. Ensure metrics sound credible and relevant to the responsibilities.

        3. *Tailor to the Job Description**:
        - Prioritize and reframe experiences, skills, and projects to align with the job description (if provided).
        - Incorporate keywords, transferable skills, and qualifications relevant to the role.

        4. **Analyze Examples**:
        - Use the provided examples of successful resumes and bullet points as a guide for tone, style, and structure.
        - Focus on crafting bullet points that emphasize accomplishments, results, and measurable impact.

        5. **Formatting**:
        - For **Work Experience**, create bullet points using the XYZ format:
            - **X**: What you accomplished.
            - **Y**: The result, impact, or measurable outcome (generate if missing).
            - **Z**: The actions or methods you used to achieve it.
        - For **Education**, summarize key details like degree, institution, and honors.
        - For **Projects**, focus on impact, relevance, and skills used (include metrics where appropriate).
        - For **Skills**, organize into clear categories (e.g., Technical Skills, Soft Skills).

        ### Input Data:
        - **Job Description**:
        ${jobDescription || "No job description provided."}

        - **Resume Information**:
        **Work Experience**:
        ${resume.experience
        .map(
            (exp) => `
            Title: ${exp.title}
            Organization: ${exp.organization}
            Location: ${exp.location}
            Start Date: ${exp.startDate}
            End Date: ${exp.endDate}
            Responsibilities: ${exp.responsibilities}`
        )
        .join("\n")}

        **Education**:
        ${resume.education
        .map(
            (edu) => `
            Degree: ${edu.title}
            Institution: ${edu.organization}
            Location: ${edu.location}
            Start Date: ${edu.startDate}
            End Date: ${edu.endDate}`
        )
        .join("\n")}

        **Projects**:
        ${resume.projects
        .map(
            (proj) => `
            Project Name: ${proj.title}
            Organization: ${proj.organization}
            Location: ${proj.location}
            Start Date: ${proj.startDate}
            End Date: ${proj.endDate}
            Description: ${proj.responsibilities}`
        )
        .join("\n")}

        **Skills**:
        ${resume.skills.join(", ")}

        - **Examples of Successful Resumes**:
        ${examples?.resumes.join("\n") || "No examples provided."}

        - **Examples of Successful Bullet Points**:
        ${examples?.bulletPoints.join("\n") || "No examples provided."}

        ### Output Requirements:
        - **Work Experience**: Generate bullet points using XYZ format, incorporating creative metrics as needed.
        - **Education**: Summarize each entry succinctly with key details.
        - **Projects**: Highlight impactful aspects in 1-3 concise bullet points, including generated metrics if applicable.
        - **Skills**: List in a clear, categorized format.

        ### Final Notes:
        - Strictly adhere to the **Mandatory Instructions** provided.
        - Use creative freedom to enhance the resume with metrics while maintaining credibility.
        - Ensure the resume is professional, concise, and aligned with the job description (if available).
        - Maintain a consistent and polished tone throughout.

        Generate the resume content based on this input.
    
    `
}


export default async function createResume(resume: ResumeData, jobDescription?: string) {
    const bullets = [
        `
            Developed a back end web service to handle user authentication utilizing JWT and interacting with existing user services to store sessions data in a Redis cache, 
            leading to a 14% reduction in complaints about dropped sessions
        `,
        `
            Developed a React-Native based mobile application by collaborating with product design teams, interacting with a GraphQL API allowing users to navigate and make orders to local restaurants leading 
            to better user engagement according to analytics funnels
        `,
        `
            Led the development of a data pipelines platform utilizing Kafka streams, ingesting data from various data stores from across the application 
            resulting in a more streamlined developer experience for data query teams and reducing congestion by 24% during peak hours
        
        `
    ]
    const instructions = returnResumeInstructions()
    
    const prompt = generatePrompt(
        resume, 
        jobDescription, 
        { resumes: [], bulletPoints: bullets },
        instructions 
    )
    const result = await model.generateContent(prompt);
    return result.response.text();

}