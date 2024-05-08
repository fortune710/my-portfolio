/*

import { homePageQueryOptions } from "@/sanity/client/queryOptions";
import { sanityLoader } from "@/sanity/client/sanityLoader";
import { CtaButton } from "@/ui/buttons";
import Sections from "@/utils/Sections";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
*/

import Blog from "@/components/blog";
import Container from "@/components/container";
import SkillsContainer from "@/components/skills/container";
import { Button } from "@/components/ui/button";
import { firestore } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectCollections = collection(firestore, "projects")

export default async function Home() {
  // Example How to use query with options
  //const homePage = await sanityLoader.loadHomePage(homePageQueryOptions);

  const projects = (await getDocs(projectCollections)).docs.map((doc) => ({ ...doc.data() }));



  return (
    <>
      <Image src="/glow-1.svg" className="absolute top-0 left-0" alt="Glow" width={300} height={300}/>
      <header className="w-full px-4 md:px-6 lg:px-12 xl:px-20 h-28 flex items-center">
        <div className="flex items-center justify-between text-white w-full">
          <Image width={50} src="/fortune-logo.png" alt="Fortune Logo" height={70} className="z-10" />

          <nav className="flex items-center gap-10 font-inter font-semibold">
            <Link href="/blog">
              Blog
            </Link>

            <Link href="/projects">
              Projects
            </Link>

            <Link href="/about">
              About
            </Link>
          </nav>

          <div></div>
        </div>
        
      </header>

      <main className="text-white">

        <section className="px-4 md:px-6 lg:px-12 xl:px-20 font-jarkata mt-3">
          <div className="w-full glass-back rounded-[50px] h-screen border bg-white/5 border-white/60 flex items-center justify-center box-border p-36 max-md:p-16">


            <div className="space-y-4">
              <Image className="mx-auto" src="/picture.png" alt="Fortune" width={200} height={200}/>
              <h1 className="text-primary font-bold text-7xl text-center">Hi 👋, I&apos;m Fortune Alebiosu</h1>
              <p className="font-normal text-4xl text-center">
                I&apos;m an amazing full-stack developer passionate about building scalable digital experiences. 
                My aim is to blend functionality and aesthetics to create impactful solutions
              </p>
            </div>
          </div>
        </section>


        <section className="px-4 md:px-6 lg:px-12 xl:px-20 font-jarkata mt-3">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-primary">About Me</h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[_2fr_1fr] gap-4">
            <div className="bg-dark border border-dark-muted rounded-[40px] px-8 py-7 mt-5">
              <p className="text-xl md:text-3xl md:leading-relaxed">
                I&apos;m recent graduate from the Computer Science department at Nile University of Nigeria. 
                My dev journey started back in 2020, when I had a huge interest for Mobile App Development, 
                making me look for shortest route possible to being a Mobile App Developer😅. This opened my 
                eyes to the power of web technologies and helping me to fully utilize the power of the web. 
                Moving on to today, I&apos;ve gained lots of skills and had the privilege of building an awesome 
                startup called Interna with some of my school colleagues.
              </p>
            </div>

            <div className="relative">
              <div className="absolute z-0 top-0 right-0 bg-dark border border-dark-muted rounded-[40px] w-[90%] h-[400px]"/>
              <Image 
                src="/Image.svg" 
                alt="Fortune Image"
                className="z-20 absolute rounded-[40px] bottom-0 left-0 w-[90%] h-[75%]" 
                width={300} 
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6 lg:px-12 xl:px-20 font-jarkata mt-3">
          <div className="w-full bg-dark border border-dark-muted rounded-[40px] px-8 py-10">
            <h2 className="text-4xl font-bold">My Skills</h2>

            <div className="w-full mt-8">
              <SkillsContainer/>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6 lg:px-12 xl:px-20 font-jarkata mt-3">
          <h2 className="text-4xl font-bold">My Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-5">
              {
                projects.map((project) => (
                  <div className="w-full bg-dark border border-dark-muted rounded-[40px] px-8 py-10 space-y-3" key={project.name}>
                    <div className="flex justify-between items-start">
                      <Image
                        src={project.logo}
                        alt={project.name}
                        width={200}
                        height={200}
                        className="rounded-lg"
                      />

                      <Link target="_blank"  className="border border-white rounded-md py-4 px-5 text-white font-medium" href={project.link}>
                        Checkout Live App
                      </Link>
                    </div>

                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">{project.title}</h2>
                    <p>2024 - Web App</p>

                    <p className="lg:text-lg text-[#B3B3B3]">{project.description}</p>

                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={500}
                      className="rounded-lg w-full"
                    />

                  </div>
                ))
              }
          </div>
        </section>


        <section className="grid grid-cols-[_27%_auto] gap-5 px-4 md:px-6 lg:px-12 xl:px-20 mt-3">
          <Container className="space-y-3 px-6 py-7">
            <h2 className="text-primary font-semibold text-4xl">
              Other things about me
            </h2>
            <p className="font-medium text-lg">
              I talk about web dev a lot and my content is geared 
              towards beginner developers. Here are some of my recent articles.
            </p>

            <Button className="bg-white text-black rounded-full w-16 h-16">
              <ArrowRight/>
            </Button>
          </Container>

          <Container>
              <Blog/>
          </Container>
        </section>
      </main>

      <footer className="px-4 md:px-6 lg:px-12 xl:px-20 font-jarkata mt-3">
        <Container className="flex items-center justify-center py-20">
          <div className="text-center text-white w-1/2 space-y-10">

            <h2 className="font-bold text-5xl">
              Let&apos;s Talk
            </h2>
            <p className="text-lg text-[#b3b3b3]">
              Interested in working together or have a question? Feel free to reach out. 
              I&apos;m here to help you turn your ideas into amazing digital realities. 
              Looking forward to hearing from you soon!
            </p>

            <div className="flex items-center justify-center gap-2">
              <Link 
                className="border border-[#3B3B3B] bg-[#0a0a0a] rounded-md p-2 flex items-center gap-2 w-fit"
                href="mailto:fortunealebiosu710@gmail.com"
                >
                  <Image
                    src="/logos/mail.svg"
                    alt="My Email"
                    width={24}
                    height={24}
                  />
                  fortunealebiosu710@gmail.com
              </Link>

              <Link 
                href="https://twitter.com/alebiosu_thedev"
                target="_blank"
                className="border border-[#3B3B3B] bg-[#0a0a0a] rounded-sm p-2 flex w-fit"
              >
                <Image
                  src="/logos/twitter.svg"
                  alt="My Twitter"
                  width={24}
                  height={24}
                />
              </Link>

              <Link 
                href="https://instagram.com/fortune_thedev"
                target="_blank"
                className="border border-[#3B3B3B] bg-[#0a0a0a] rounded-sm p-2 flex w-fit"
              >
                <Image
                  src="/logos/instagram.svg"
                  alt="My Instagram"
                  width={24}
                  height={24}
                />
              </Link>

              <Link 
                href="https://linkedin.com/in/fortunealebiosu"
                target="_blank"
                className="border border-[#3B3B3B] bg-[#0a0a0a] rounded-sm p-2 flex w-fit"
              >
                <Image
                  src="/logos/linkedin.svg"
                  alt="My LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>


            </div>
          </div>
        </Container>
      </footer>
      
    </>
  );
}
