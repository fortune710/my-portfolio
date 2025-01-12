import Navbar from "@/components/navbar"
import { ProjectCardNew } from "@/components/project-card"
import ScrollAnimation from "@/components/scroll-container"
import { getProjects } from "@/services/projects"
import Image from "next/image"
import Link from "next/link";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button"
import { LayoutGrid } from "lucide-react"

export default async function ProjectsPage() {
    const projects = await getProjects()

    return (
        <div className="overflow-x-hidden">
            <header className="w-full px-4 md:px-6 lg:px-12 xl:px-20 h-28 flex items-center">
                <div className="flex items-center justify-between sm:justify-center text-white w-full relative">
                    <Image 
                        width={50} 
                        src="/fortune-logo.png" 
                        alt="Fortune Logo" 
                        height={70}
                        className="z-10 max-sm:h-14 sm:absolute sm:left-0" 
                    />

                    <Navbar/>

                    <div className="max-sm:hidden"></div>

                    <Drawer>
                        <DrawerTrigger>
                            <Button className="bg-black h-14 w-14 text-white border border-white/40 rounded-full sm:hidden">
                                <LayoutGrid/>
                            </Button>
                        </DrawerTrigger>

                        <DrawerContent className="bg-[#030303] text-white border-white/20">
                            <DrawerHeader>
                                <DrawerTitle>Discover More</DrawerTitle>
                            </DrawerHeader>

                        <div className="flex flex-col px-4 space-y-3 pb-8">
                            <Link className="w-full rounded-lg py-3 px-2" href="/blog">
                                Blog
                            </Link>

                            <Link className="w-full rounded-lg py-3 px-2" href="/projects">
                                Projects
                            </Link>

                            <Link className="w-full rounded-lg py-3 px-2" href="/about">
                                About
                            </Link>
                        </div>
                        </DrawerContent>
                    </Drawer>
                </div>
                
            </header>
            
            <main className="text-white px-2">
                <Image src="/glow-1.svg" className="absolute top-0 left-0" alt="Glow" width={300} height={300}/>

                <section className="px-3 md:px-10 lg:px-16 gap-5 pt-8 md:pt-16 text-left space-y-2 md:w-3/4 mb-2">
                    <h1 className="font-bold font-inter text-4xl lg:text-5xl">My Projects</h1>
                    <p className="font-medium font-jarkata text-lg lg:text-2xl">
                        This page showcases a collection of my full-stack software engineering projects. 
                        Explore web and mobile applications I&apos;ve built from the ground up, as well as innovative solutions 
                        powered by AI. Each project is a testament to my passion for crafting exceptional digital experiences. 
                    </p>
                </section>

                <div className="animate-fade-in-bottom mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-10 lg:px-16 gap-5 pt-3 md:pt-4 gap-y-5 md:gap-y-7 pb-10">
                    {
                        projects.map((project, index) => (
                            <ScrollAnimation delay={0.25 * index} key={project.id}>
                                <ProjectCardNew project={project}/>
                            </ScrollAnimation>
                        )
                    )
                    }
                </div>
                
            </main>
        </div>
        
    )
}