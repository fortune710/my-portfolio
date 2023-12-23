import Head from 'next/head'
import Image from 'next/legacy/image'
import React, { useEffect, useRef } from 'react';
import { ArticlesSection, ContactInformation, Navbar, ProjectsContainer, SectionTitle, Socials } from '../components';
import { Section } from '../components/Section/section';
import styles from '../styles/Home.module.scss';

import { IoChevronDown } from 'react-icons/io5';
import { useScroll, motion } from 'framer-motion';
import { SOCIAL_MEDIA_HANDLES } from '../components/Socials/socials-data';
import Link from 'next/link';

export default function Home() {
  const pageRef = useRef(null);
  /*
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start end", "end end"]
  })*/

  return (
    <React.Fragment>
      <Head>
        <title>Fortune Alebiosu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header 
        className={styles.intro}
      >
        <Navbar />

        <section className="flex items-center w-full justify-between px-2 md:px-4 lg:px-8">
          <div className='flex flex-col gap-2 md:gap-3'>
            <h4>Hello</h4>
            <h1 className='text-2xl md:text-3xl lg:text-4xl'>
              I&apos;m Fortune Alebiosu
            </h1>

            <p className='text-xl md:text-2xl lg:text-3xl'>
              I am a software developer and I am passionate 
              about designing and implementing beautiful user interfaces, 
              and building high quality, high performance applications that users will adore.
            </p>

            <button className='border border-white rounded-md md:w-1/2 lg:w-1/4 py-3 my-3'>
              My Resume
            </button>
          </div>

          <Socials />
        </section>

        <a href="#main" className={styles.scrollDownPointer}>
          <IoChevronDown/>
          <h3>SCROLL DOWN</h3>
        </a>

      </header>

      <main id="main" className={styles.main}>
        
        <SectionTitle name="About Me"/>
        
        <article className='px-2 md:px-4 lg:px-6 grid grid-cols-1 md:grid-cols-[_1fr_2fr]'>

          <div className='w-full'>
            <Image 
              src="/fortune.jpeg" 
              alt="A picture of me" 
              width={310}
              height={290}
              className='mx-auto w-full'
            />
          </div>

          <div className='w-full flex flex-col gap-2 md:gap-3'>
            <p className='text-lg lg:text-lg text-white/70'>
              My name is Fortune Alebiosu, and I love building user interfaces
              that users will adore. I&apos;m currently a final year student in the Computer Science department 
              at Nile University of Nigeria. 

              My dev journey started back in 2020, when I had a huge interest for Mobile App Development, 
              making me look for shortest route possible to being a Mobile App Developer😅. 
              This opened my eyes to the power of web technologies and helping me to fully utilize the
              power of the web.               
            </p>

            <p className='text-lg text-white/70'>
              Moving on to today, I&apos;ve gained lots of skills and had the priviglege of building an awesome startup called 
              <a className='font-semibold text-white'> Interna</a> and <a className='font-semibold text-white'>ConsumerWatch</a> with 
              some of my school colleagues.
              In my free time, I create programming content that is geared towards beginner developers, by writing articles on my <a className='font-semibold text-white'>blog</a> and 
              recoding videos on <a className='font-semibold text-white'>TikTok</a>
            </p>

            <p className='text-lg text-white/70'>
              When I&apos;m not working, I&apos;m usually out playing football, watching anime or laughing through YouTube shorts.
            </p>


            {
              /*
              
              <div className={styles.skills}>
                <h5>Here are some the skills I&apos;ve gained</h5>
                <ul role={'list'}>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Capacitor.js</li>
                  <li>Ionic Framework</li>
                  <li>Firebase</li>
                  <li>MySQL</li>
                  <li>Git</li>
                </ul>
              </div>
              
              */
            }
          </div>
        </article>

        <ProjectsContainer limit={6}/>

        <section className={styles.section}>
          <div>
            <h3>
              I am <span>obsessed</span> with performace, and a true believer that performace 
              and aesthetics can go hand in hand. That&apos;s why I love exploring new 
              <span> technologies</span> and <span> techniques</span> that can help me bring my designs 
              to life in <span>most efficient</span> way possible.
            </h3>

            <h3>
              Whether I&apos;m working on a <span>complex</span> web application
              or a <span>simple</span> landing page, I approach each project with 
              the same level of <span>detail</span> and dedication. My goal is always to
              <span> deliver results</span> and that not only meet,
              but <span>exceed expectations</span> of my clients.
            </h3>

          </div>

          <div className={styles.ImageHolder}>
            <Image alt="someone coding" src="/image-1.webp" width={300} height={400}/>
          </div>
        </section>
        <ArticlesSection/>
      </main>

      {
        /*
        <motion.circle 
        pathLength="2"
        r="20"    
        radius="20"
        cx={50}
        cy={20}
        style={{ 
          position: "absolute",
          bottom: 0, 
          zIndex: 999,
          right: '10px',
          pathLength: scrollYProgress,
          color: 'var(--light-green)'
        }}
        
        />
        */
      }

      <footer className={styles.footer}>
        <div className={styles.topContainer}>
          <div>
            <h3>Quick Access</h3>

            <div className={styles.quickAccessContainer}>
              <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://fortunealebiosu.hashnode.dev"
              >
                MY BLOG
              </a>
              <a>
                MY RESUME
              </a>
              <Link href="/projects">
                MY PROJECTS
              </Link>
            </div>
          </div>
          <ContactInformation/>
        </div>

        <div className={styles.bottomContainer}>
          <div>
            {
              SOCIAL_MEDIA_HANDLES.map(({ src, link, title }) => (
                <a key={title} target="_blank" rel="noreferrer" href={link}>
                  <Image width={30} height={30} src={src} alt={title} />
                </a>
              ))
            }
          </div>
          <p>Made with 💖 by Fortune Alebiosu</p>
        </div>
      </footer>

    </React.Fragment>
  )
}
