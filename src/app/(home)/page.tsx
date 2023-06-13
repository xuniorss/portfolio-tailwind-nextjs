'use client'

import IconCss3 from '@/components/Icons/IconCss3'
import IconHtml5 from '@/components/Icons/IconHtml5'
import IconJavascript from '@/components/Icons/IconJavascript'
import IconNextjs from '@/components/Icons/IconNextjs'
import IconReactjsFill from '@/components/Icons/IconReactjsFill'
import IconTypescript from '@/components/Icons/IconTypescript'
import { experience } from '@/constants'
import { ExperienceProps } from '@/types/experience'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from './components/Experience'

export default function Home() {
   const exp: Array<ExperienceProps> = [
      {
         iconTech: (
            <IconReactjsFill className="h-10 w-10 transition group-hover:text-bluereact" />
         ),
         experience,
         techStarted: 2022,
         techName: 'React.js',
      },
      {
         iconTech: (
            <IconHtml5 className="h-10 w-10 transition group-hover:text-orangehtml" />
         ),
         experience,
         techStarted: 2017,
         techName: 'HTML 5',
      },
      {
         iconTech: (
            <IconNextjs className="h-10 w-10 transition group-hover:text-white" />
         ),
         experience,
         techStarted: 2022,
         techName: 'Next.js',
      },
      {
         iconTech: (
            <IconCss3 className="h-10 w-10 transition group-hover:text-bluecss" />
         ),
         experience,
         techStarted: 2017,
         techName: 'CSS3',
      },
      {
         iconTech: (
            <IconTypescript className="h-10 w-10 transition group-hover:text-bluetypescript" />
         ),
         experience,
         techStarted: 2022,
         techName: 'TypeScript',
      },
      {
         iconTech: (
            <IconJavascript className="h-10 w-10 transition group-hover:text-yellow-500" />
         ),
         experience,
         techStarted: 2017,
         techName: 'JavaScript',
      },
   ]

   return (
      <motion.section
         initial={{ y: -15, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 2, delay: 0.5 }}
         id="home"
         className="flex h-full w-full max-w-screen-xl flex-col px-8"
      >
         <main className="mt-0 grid grid-cols-1 py-10 md:mt-5 md:grid-cols-2">
            <div className="flex w-full flex-col space-y-9">
               <div className="flex flex-col items-center gap-x-0 space-y-4 md:flex-row md:gap-x-4 md:space-y-0">
                  <Image
                     src="/images/portfolio.jpg"
                     alt="Image"
                     width={230}
                     height={230}
                     className="aspect-auto rounded-full border border-purpleprimary object-cover"
                  />
                  <div className="flex flex-col items-center md:items-start">
                     <h1 className="text-center text-[1.75rem] font-bold leading-[2.625rem] text-white">
                        Olá, Eu sou o{' '}
                        <span className="text-purpleprimary">Gilberto! 👋</span>
                     </h1>
                     <p className="text-lg italic text-gray-400/70 md:text-xl">
                        Engenheiro de Software
                     </p>
                  </div>
               </div>
               <div className="flex flex-col space-y-5">
                  <h2 className="text-xl text-white">Experiência</h2>
                  <p className="text-lg text-white/50">
                     {experience} anos como programador web e mais de{' '}
                     {experience - 1} anos no mercado de trabalho.
                  </p>
                  <div className="flex flex-col gap-y-4">
                     {exp.map((item) => (
                        <Experience
                           key={item.techName}
                           iconTech={item.iconTech}
                           experience={item.experience}
                           techStarted={item.techStarted}
                           techName={item.techName}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </main>
      </motion.section>
   )
}
