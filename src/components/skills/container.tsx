import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import SkillBlock from "./block"

const skills = [
    {
        image: "/logos/react-svgrepo-com.svg",
        name: "React",
        color: "bg-[#111111]"
    },
    {
        image: "/logos/next-js-svgrepo-com.svg",
        name: "Next.js",
        color: "bg-white"
    },
    {
        image: "/logos/javascript-1-svgrepo-com.svg",
        name: "Javascript",
        color: "bg-[#F7DF1E]",
        imageStyle: "absolute bottom-1 right-1"
    },
    {
        image: "/logos/typescript.svg",
        name: "Typescript",
        color: "bg-[#007acc]",
        imageStyle: "absolute bottom-1 right-1"
    },
    {
        image: "/logos/python-svgrepo-com.svg",
        name: "Python",
        color: "bg-white"
    },
    {
        image: "/logos/node-js-svgrepo-com.svg",
        name: "Node.js",
        color: "bg-zinc-500"
    },
    {
        image: "/logos/express-svgrepo-com.svg",
        name: "Express",
        color: "bg-white"
    },
    {
        image: "/logos/firebase-svgrepo-com.svg",
        name: "Firebase",
        color: "bg-blue-300"
    },
    {
        image: "/logos/postgresql-svgrepo-com.svg",
        name: "PostgreSQL",
        color: "bg-white"
    },
    {
        image: "/logos/mysql-logo-svgrepo-com.svg",
        name: "MySQL",
        color: "bg-white"
    },
    {
        image: "/logos/light-prisma-svgrepo-com.svg",
        name: "Prisma",
        color: "bg-white"
    },
    {
        image: "/logos/aws-svgrepo-com.svg",
        name: "AWS",
        color: "bg-white"
    },
    {
        image: "/logos/tailwind-svgrepo-com.svg",
        name: "Tailwind",
        color: "bg-white"
    },
    {
        image: "/logos/react-svgrepo-com.svg",
        name: "React Native",
        color: "bg-[#111111]"
    },
    {
        image: "/logos/flask-svgrepo-com.svg",
        name: "Flask",
        color: "bg-white"
    },
    {
        image: "/logos/github-svgrepo-com.svg",
        name: "Github",
        color: "bg-black"
    },



]


export default function SkillsContainer() {
    return (
        <div  className="grid gap-12 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            <TooltipProvider>
                {
                    skills.map((skill) => (
                        <Tooltip key={skill.name}>
                            <TooltipTrigger asChild>
                                <SkillBlock
                                    {...skill}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{skill.name}</p>
                            </TooltipContent>
                        </Tooltip>

                    ))
                }
            </TooltipProvider>
        </div>
    )
}