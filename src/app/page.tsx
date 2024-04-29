/*

import { homePageQueryOptions } from "@/sanity/client/queryOptions";
import { sanityLoader } from "@/sanity/client/sanityLoader";
import { PageLayout } from "@/ui";
import { CtaButton } from "@/ui/buttons";
import Sections from "@/utils/Sections";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
*/

import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // Example How to use query with options
  //const homePage = await sanityLoader.loadHomePage(homePageQueryOptions);

  return (
    <>
      <Image src="/glow-1.svg" className="absolute top-0 left-0" alt="Glow" width={300} height={300}/>
      <header className="w-full px-4 md:px-6 lg:px-12 xl:px-20 h-28 flex items-center">
        <div className="flex items-center justify-between text-white w-full">
          <img width={50} src="/next.svg" alt="" />

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
      </main>
      
    </>
  );
}
