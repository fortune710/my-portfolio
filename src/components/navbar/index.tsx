"use client"
import { useInView } from 'motion/react'
import Link from 'next/link'
import React, { useRef } from 'react'

export default function Navbar() {
    const ref = useRef(null)
    const isInView = useInView(ref)

  return (
    <>
        <nav ref={ref} className="flex max-sm:hidden items-center gap-14 font-inter font-semibold text-lg">
            <Link href="/blog" className='cursor-custom'>
              Blog
            </Link>

            <Link href="/projects" className='cursor-custom'>
              Projects
            </Link>

            <Link href="#about" className='cursor-custom'>
              About
            </Link>
        </nav>

        {
            !isInView &&
            <header className='fixed top-5 w-screen flex justify-center z-[999]'>
                <nav className="flex max-sm:hidden items-center gap-1 font-inter font-semibold text-lg bg-[#030303] py-3 px-4 rounded-2xl border border-zinc-700">
                    <Link href="/blog" className='hover:bg-zinc-900 py-3 px-7 rounded-xl cursor-custom'>
                        Blog
                    </Link>

                    <Link href="/projects" className='hover:bg-zinc-900 py-3 px-7 rounded-xl cursor-custom'>
                        Projects
                    </Link>

                    <Link href="#about" className='hover:bg-zinc-900 py-3 px-7 rounded-xl cursor-custom'>
                        About
                    </Link>
                </nav>
            </header>
        }
    </>
  )
}
