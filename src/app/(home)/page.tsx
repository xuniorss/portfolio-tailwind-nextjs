'use client'

import IconCss3 from '@/components/Icons/IconCss3'
import IconHtml5 from '@/components/Icons/IconHtml5'
import IconNextjs from '@/components/Icons/IconNextjs'
import IconReactjsFill from '@/components/Icons/IconReactjsFill'
import IconTypescript from '@/components/Icons/IconTypescript'
import { differenceInCalendarYears } from 'date-fns'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from './components/Experience'

export default function Home() {
   const currentDate = new Date()
   const targetDateExperience = new Date(2017, 0, 1)

   const experience = differenceInCalendarYears(
      currentDate,
      targetDateExperience
   )

   return (
      <motion.section
         initial={{ y: -50 }}
         animate={{ y: -5 }}
         transition={{ duration: 0.5 }}
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
               <div className="flex flex-col space-y-3">
                  <h2 className="text-xl text-white">Experiência</h2>
                  <p className="text-lg text-white/50">
                     {experience} anos como programador web e mais de{' '}
                     {experience - 1} anos no mercado de trabalho.
                  </p>
                  <div className="flex flex-col gap-y-3">
                     <Experience
                        iconTech={
                           <IconReactjsFill className="h-10 w-10 group-hover:text-white" />
                        }
                        experience={experience}
                        techStarted={2022}
                     />

                     <Experience
                        iconTech={
                           <IconHtml5 className="h-10 w-10 group-hover:text-white" />
                        }
                        experience={experience}
                        techStarted={2017}
                     />

                     <Experience
                        iconTech={
                           <IconNextjs className="h-10 w-10 group-hover:text-white" />
                        }
                        experience={experience}
                        techStarted={2022}
                     />

                     <Experience
                        iconTech={
                           <IconCss3 className="h-10 w-10 group-hover:text-white" />
                        }
                        experience={experience}
                        techStarted={2017}
                     />

                     <Experience
                        iconTech={
                           <IconTypescript className="h-10 w-10 group-hover:text-white" />
                        }
                        experience={experience}
                        techStarted={2022}
                     />
                  </div>
               </div>
            </div>
         </main>
      </motion.section>
   )
}
