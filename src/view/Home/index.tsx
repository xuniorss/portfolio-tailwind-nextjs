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
import Link from 'next/link'
import Typed from 'react-typed'

import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { Experience } from './components/Experience'

type SocialProps = {
   icon: IconType
   name: string
   href: string
}

export default function HomeView() {
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

   const social: Array<SocialProps> = [
      { icon: BsGithub, name: 'GitHub', href: 'https://github.com/xuniorss' },
      {
         icon: BsLinkedin,
         name: 'Linkedin',
         href: 'https://www.linkedin.com/in/gilberto-fortunato-111899201/',
      },
      {
         icon: BsInstagram,
         name: 'Instagram',
         href: 'https://www.instagram.com/xuniorss/',
      },
   ]

   return (
      <motion.section
         initial={{ y: -15, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 2, delay: 0.5 }}
         id="home"
         className="flex min-h-screen w-full max-w-screen-xl flex-col px-8"
      >
         <main className="mt-0 grid grid-cols-1 gap-y-5 py-10 md:mt-5 md:grid-cols-2 md:gap-y-0">
            <div className="flex w-full flex-col space-y-9">
               <div className="flex flex-col-reverse items-center gap-x-0 space-y-4 md:flex-row md:gap-x-4 md:space-y-0">
                  <Image
                     src="/images/portfolio.jpg"
                     alt="Image"
                     width={230}
                     height={230}
                     className="mt-4 aspect-auto rounded-full border border-purpleprimary object-cover md:mt-0"
                  />
                  <div className="flex flex-col items-center md:items-start">
                     <h1 className="text-center text-[1.563rem] font-bold leading-[2.345rem] text-white">
                        Olá, Eu sou o{' '}
                        <span className="text-purpleprimary">Gilberto! 👋</span>
                     </h1>
                     <Typed
                        className="text-center text-lg italic text-gray-400/70 md:text-xl"
                        strings={[
                           'Engenheiro de Software.',
                           'FullStack Developer.',
                           'Front-End Developer.',
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                     />
                     {/* <p className="">
                        Engenheiro de Software
                     </p> */}
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
            <div className="flex flex-col items-start justify-center gap-y-10 md:items-end">
               <div className="flex w-full max-w-xs flex-col items-start gap-y-2">
                  <h2 className="text-center text-xl text-white">Educação</h2>
                  <p className="text-white/50">
                     Cursando Pós-Graduação em Engenharia de Software na
                     PUC-Minas
                  </p>
               </div>
               <div className="flex w-full max-w-xs flex-col items-start gap-y-4">
                  <h3 className="text-lg text-white">Contato</h3>
                  <div className="flex gap-x-4">
                     {social.map((value) => {
                        const Icon = value.icon

                        return (
                           <Link
                              key={value.name}
                              href={value.href}
                              target="_blank"
                              className="text-white/50 transition hover:text-white/70"
                           >
                              <Icon size={25} />
                           </Link>
                        )
                     })}
                  </div>
                  <button className="rounded bg-purpleprimary p-4 text-white transition hover:bg-purple-700">
                     Entre em contato
                  </button>
               </div>
            </div>
         </main>
      </motion.section>
   )
}
