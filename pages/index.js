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

      <motion.header 
        //style={{ opacity: 1 - scrollY }}
        ref={pageRef} 
        className={styles.intro}
      >
        <Navbar />

        <div className={styles.profile}>
          <Socials />

          <section>
            <h4>Hello</h4>
            <h1>I&apos;m Fortune Alebiosu</h1>

            <p>
              I am a software developer and I am passionate 
              about designing and implementing beautiful user interfaces, 
              and building high quality, high performance applications that users will adore.
            </p>


          </section>
        </div>

        <a href="#main" className={styles.scrollDownPointer}>
          <IoChevronDown/>
          <h3>SCROLL DOWN</h3>
        </a>

      </motion.header>

      <main id="main" className={styles.main}>
        
        <SectionTitle name="About Me"/>
        
        <article className={styles.aboutMe}>

          <div className={styles.aboutMeContainer}>
            <p>
              My name is Fortune Alebiosu, and I love building user interfaces
              that users will adore. I&apos;m currently a final year student in the Computer Science department 
              at Nile University of Nigeria. 

              My dev journey started back in 2020, when I had a huge interest for Mobile App Development, 
              making me look for shortest route possible to being a Mobile App Developer😅. 
              This opened my eyes to the power of web technologies and helping me to fully utilize the
              power of the web. 

              Moving on to today, I&apos;ve gained lots of skills and had the priviglege of building an awesome startup called <a>Interna</a> with 
              some of my school colleagues.
            </p>

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
          </div>

          <div className={styles.imageHolder}>
            <img src="/fortune.jpeg" alt="A picture of me" />
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