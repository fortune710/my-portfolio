import Blog from "@/components/blog";
import Container from "@/components/container";
import SkillsContainer from "@/components/skills/container";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { getProjects } from "@/services/projects";
import { ArrowDown, ArrowRight, LayoutGrid, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {

  const projects = await getProjects()


  return (
    <>
      <Image src="/glow-1.svg" className="absolute top-0 left-0" alt="Glow" width={300} height={300}/>
      <header className="w-full px-4 md:px-6 lg:px-12 xl:px-20 h-28 flex items-center">
        <div className="flex items-center justify-between sm:justify-center text-white w-full relative">
          <Image 
            width={50} 
            src="/fortune-logo.png" 
            alt="Fortune Logo" 
            height={70}
            className="z-10 max-sm:h-14 sm:absolute sm:left-0" 
          />

          <nav className="flex max-sm:hidden items-center gap-14 font-inter font-semibold text-lg">
            <Link href="/blog">
              Blog
            </Link>

            <Link href="/projects">
              Projects
            </Link>

            <Link href="#about">
              About
            </Link>
          </nav>

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

      <main className="text-white overflow-x-hidden">

        <section className="px-4 md:px-6 lg:px-12 xl:px-20 font-jarkata mt-3 relative">
          <div className="w-full glass-back rounded-[50px] h-screen border bg-white/5 border-white/60 flex items-center justify-center box-border p-36 max-md:p-16 max-sm:p-4 max-sm:h-[80dvh]">
            <div className="space-y-4">
              <Image
                className="mr-auto md:mx-auto max-sm:w-24 max-sm:h-24" 
                src="/picture.png" 
                alt="Fortune" 
                width={200} height={200}
              />
              <h1 className="text-primary animate-tracking-in-expand font-bold text-7xl max-sm:text-4xl max-md:text-5xl text-left md:text-center">Hi 👋, I&apos;m Fortune Alebiosu</h1>
              <p className="font-normal text-4xl max-sm:text-xl max-md:text-3xl text-left md:text-center">
                I&apos;m an amazing full-stack developer passionate about building scalable digital experiences. 
                My aim is to blend functionality and aesthetics to create impactful solutions
              </p>
            </div>
          </div>

          <Image 
            src="/glow.svg" 
            className="absolute -bottom-24 -right-[300px] -z-30 w-[400px] h-[380px] sm:w-[600px] sm:h-[500px]" 
            alt="Glow" 
            width={300} height={300}
          />

        </section>


        <section id="about" className="px-4 md:px-6 lg:px-12 xl:px-20 font-jarkata mt-6 sm:mt-10 md:mt-16 animate-fade-in-bottom">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-primary">About Me</h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[_2fr_1fr] gap-4">
            <div className="bg-dark border border-dark-muted rounded-[40px] px-8 py-7 max-sm:px-4 max-sm:py-4 mt-5">
              <p className="text-lg md:text-3xl md:leading-relaxed">
                As a fullstack software engineer with three years of experience, I&apos;ve mastered the art of weaving 
                code into seamless digital experiences. From crafting visually stunning front-end designs to building 
                robust back-end systems, I bring a harmonious blend of aesthetics and functionality to every project, 
                and I am driven by a passion for innovation and excellence. My Degree in Computer Science has equipped me 
                with the necessary tools and knowledge to develop a deep understanding of building quality systems. 
              </p>
            </div>

            <div className="relative">
              <div className="absolute max-sm:hidden z-0 top-0 right-0 bg-dark border border-dark-muted rounded-[40px] w-[90%] h-[90%]"/>
              <Image 
                src="/fortune-image.png" 
                alt="Fortune Image"
                className="z-30 md:absolute object-cover rounded-[40px] bottom-0 left-0 w-[90%] h-[90%] max-sm:w-full max-sm:h-auto" 
                width={300} 
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6 lg:px-12 xl:px-20 font-jarkata mt-5 relative">
          <div className="w-full bg-dark border border-dark-muted rounded-[40px] px-8 py-10">
            <h2 className="text-4xl font-bold">My Skills</h2>

            <div className="w-full mt-8">
              <SkillsContainer/>
            </div>
          </div>
          <Image 
            src="/glow.svg" 
            className="absolute -bottom-16 -left-[300px] -z-30 w-[400px] h-[380px] sm:w-[600px] sm:h-[500px]" 
            alt="Glow" 
            width={300} height={300}
          />
        </section>

        <section className="px-4 md:px-6 lg:px-12 xl:px-20 mt-3 relative">
          <Image 
            src="/glow-2.svg" 
            className="absolute -bottom-0 -right-[200px] -z-30 w-[600px] h-[580px] sm:w-[700px] sm:h-[600px]" 
            alt="Glow" 
            width={300} height={300}
          />

          <Container className="space-y-3 px-6 py-7">
              <p className="text-lg">
                Driven by a passion for innovation, I&apos;ve immersed myself in the dynamic world of startups. As a co-founder myself, 
                I&apos;ve navigated the exhilarating highs and challenging lows of turning ideas into reality. 
              </p>

              <p className="text-lg">
                This unique perspective has not only sharpened my technical abilities but also deepened my 
                understanding of the business landscape. On a journey of transformation, one line of code at 
                a time, I create the future through captivating software narratives.         
              </p>
          </Container>
        </section>


        <section className="px-4 md:px-6 lg:px-12 xl:px-20 font-jarkata mt-10 relative">
          <h2 className="text-5xl max-sm:text-4xl font-bold text-primary">My Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-5">
            <Image 
              src="/glow-2.svg" 
              className="absolute top-[200px] -right-[200px] -z-30 w-[600px] h-[580px] sm:w-[700px] sm:h-[600px]" 
              alt="Glow" 
              width={300} height={300}
            />

            {
              projects.filter((project) => project.featured).map((project) => (
                <div className="w-full bg-dark border border-dark-muted rounded-[40px] px-8 py-10 space-y-3" key={project.title}>
                  <div className="flex justify-between items-start">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={200}
                      height={200}
                      className="rounded-lg max-sm:w-[100px] max-sm:h-[100px]"
                    />

                    <Link target="_blank"  className="border border-white rounded-md py-4 px-5 max-sm:py-2 max-sm:px-3 max-sm:text-xs text-white font-medium" href={project.link}>
                      Checkout Live App
                    </Link>
                  </div>

                  <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">{project.title}</h2>
                  <p>{project.year} - {project.type}</p>

                  <p className="lg:text-lg text-[#B3B3B3]">{project.description}</p>

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="rounded-lg w-full"
                  />

                </div>
              ))
            }
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-5 relative">
            <Image 
              src="/glow.svg" 
              className="absolute -top-48 -left-[300px] -z-30 w-[400px] h-[380px] sm:w-[600px] sm:h-[500px]" 
              alt="Glow" 
              width={300} height={300}
            />

            {
              projects.filter((project) => !project.featured).slice(0, 2).map((project) => (
              <div className="w-full bg-dark border border-dark-muted rounded-[40px] px-8 py-10 space-y-3" key={project.title}>
                <div className="flex justify-between items-start">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />

                  <Link target="_blank"  className="border border-white rounded-md py-4 px-5 max-sm:py-2 max-sm:px-3 max-sm:text-xs text-white font-medium" href={project.link}>
                    Checkout Live App
                  </Link>
                </div>

                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">{project.title}</h2>
                <p>{project.year} - {project.type}</p>

                <p className="lg:text-lg text-[#B3B3B3]">{project.description}</p>
              </div>
              ))
            }

            <div className="w-full bg-dark border border-dark-muted rounded-[40px] px-8 py-10 space-y-3">
              <p className="lg:text-lg text-[#B3B3B3]">
                There&apos;s a lot more where this came from. 
                Why don&apos;t you take a look?
              </p>

              <p className="lg:text-lg text-[#B3B3B3]">
                Most of my projects span across fullstack web applications
                and mobile app, and including static websites too! 
              </p>

              <p className="lg:text-lg text-[#B3B3B3]">
                I&apos;ll be delving into artificial intelligence in the near future. Feel
                free to hit me up with any unconventional ideas!
              </p>

              <div className="flex items-center gap-5">
                <Link href="/projects">
                  <Button className="bg-white text-black rounded-full w-24 h-24 max-sm:w-16 max-sm:h-16 hover:text-white">
                    <ArrowRight className="h-12 w-12"/>
                  </Button>
                </Link>
                <h2 className="font-bold text-xl md:text-3xl lg:text-4xl">See More</h2>
              </div>

            </div>
          </div>


        </section>

        <section className="px-4 md:px-6 lg:px-12 xl:px-20 mt-3 relative">
          <Image 
            src="/glow-2.svg" 
            className="absolute -bottom-0 -right-[200px] -z-30 w-[600px] h-[580px] sm:w-[700px] sm:h-[600px]" 
            alt="Glow" 
            width={300} height={300}
          />

          <Container className="space-y-3 px-6 py-7">
              <p className="text-lg">
                I am obsessed with performace, and a true believer that performace and aesthetics can go hand in hand. That&apos;s why I 
                love exploring new technologies and techniques that can help me bring my designs to life in most efficient way possible.
              </p>

              <p className="text-lg">
                Whether I&apos;m working on a complex web application or a simple landing page, I approach each project 
                with the same level of detail and dedication. 
                My goal is always to deliver results and that not only meet, but exceed expectations of my clients.
              </p>
          </Container>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-[_27%_auto] gap-5 px-4 md:px-6 lg:px-12 xl:px-20 mt-3">
          <Container className="space-y-3 px-6 py-7">
            <h2 className="text-primary font-semibold text-4xl">
              Other things about me
            </h2>
            <p className="font-medium text-lg">
              I talk about web dev a lot and my content is geared 
              towards beginner developers. Here are some of my recent articles.
            </p>

            <Link href="/blog">
              <Button className="bg-white text-black rounded-full w-16 h-16 max-sm:mt-3 mt-5 hover:text-white">
                <ArrowRight className="max-md:hidden"/>
                <ArrowDown className="md:hidden"/>
              </Button>
            </Link>

          </Container>

          <Container className="w-full">
              <Blog/>
          </Container>
        </section>
      </main>

      <footer className="pb-20 px-4 md:px-6 lg:px-12 xl:px-20 font-jarkata mt-3 relative">
        <Image 
          src="/glow.svg" 
          className="absolute -top-32 -left-[300px] -z-30 w-[400px] h-[380px] sm:w-[600px] sm:h-[500px]" 
          alt="Glow" 
          width={300} height={300}
        />

        <Container className="flex items-center justify-center py-32 max-sm:py-40 max-sm:px-4 relative">
          <Image 
            className="top-0 left-0 absolute" 
            src="/ellipse-left.svg" 
            alt="Ellipse Left" 
            width={150} height={150}
          />

          <Image 
            className="bottom-0 right-0 absolute" 
            src="/ellipse-right.svg" 
            alt="Ellipse Left" 
            width={150} height={150}
          />

          <div className="text-center max-sm:text-left z-20 text-white w-1/2 max-sm:w-full max-md:w-5/6 space-y-10 max-sm:space-y-8">

            <h2 className="font-bold text-5xl">
              Let&apos;s Talk!
            </h2>
            <p className="text-lg text-[#b3b3b3]">
              Interested in working together or have a question? Feel free to reach out. 
              I&apos;m here to help you turn your ideas into amazing digital realities. 
              Looking forward to hearing from you soon!
            </p>

            <div className="flex max-sm:flex-col items-center justify-center max-sm:items-start gap-2">
              <Link 
                className="border border-[#3B3B3B] bg-[#0a0a0a] rounded-md p-2 flex items-center gap-2 w-fit max-sm:max-w-full"
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
              <div className="flex items-center justify-start gap-2">

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
          </div>
        </Container>
      </footer>
      
    </>
  );
}
