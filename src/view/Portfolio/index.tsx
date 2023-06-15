'use client'

import { Header } from '@/components/Header'
import { TabProps, workImagesProps } from '@/types/portfolio'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { FiEye, FiGithub } from 'react-icons/fi'
import { workImages, workNavs } from './constants'

export default function Portfolio() {
   const [active, setActive] = useState(0)
   const [tab, setTab] = useState<TabProps>({ name: 'Todos' })
   const [works, setWorks] = useState<Array<workImagesProps>>([])
   const [visibilityItems, setVisibilityItems] = useState(6)

   const activeTab = useCallback(
      (e: MouseEvent<HTMLButtonElement>, index: number) => {
         if (e.currentTarget) {
            const target = e.currentTarget
            const context = target.textContent as string

            setTab({ name: context.toLowerCase() })
            setActive(index)
         }
      },
      []
   )

   useEffect(() => {
      if (tab.name === 'Todos' || tab.name === 'todos') {
         setWorks(workImages)
      } else {
         const newWork = workImages.filter(
            (workImage) => workImage.category.toLowerCase() === tab.name
         )

         setWorks(newWork)
      }
   }, [tab.name])

   const itemsToShow = useMemo(
      () => works.slice(0, visibilityItems),
      [visibilityItems, works]
   )

   const lastItem = useMemo(
      () => works.length === itemsToShow.length,
      [itemsToShow.length, works.length]
   )

   return (
      <motion.section
         id="about"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         className="flex min-h-screen w-full max-w-screen-xl flex-col px-8"
      >
         <Header title="Projetos Incríveis" subtitle="MEU TRABALHO">
            <div className="flex flex-col items-center justify-center">
               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ y: [-50, 0], opacity: 1 }}
                  className="flex flex-wrap justify-center gap-x-4"
               >
                  {workNavs.map((value, idx) => (
                     <button
                        key={idx}
                        onClick={(e) => activeTab(e, idx)}
                        className={clsx(
                           'mt-4 rounded-lg border-none px-4 py-[0.65rem] text-sm font-semibold capitalize',
                           active === idx
                              ? 'bg-purpleprimary text-white'
                              : 'bg-white text-black'
                        )}
                     >
                        {value}
                     </button>
                  ))}
               </motion.div>
               <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: [-250, 0], opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
               >
                  {itemsToShow.map((work) => (
                     <div
                        key={work.id}
                        className="relative mx-auto h-64 max-w-[21.875rem] rounded-md sm:max-w-[23.75rem]"
                     >
                        <Image
                           src={work.img}
                           alt="ImagePortfolio"
                           width={400}
                           height={400}
                           priority
                           className="aspect-auto h-full w-full rounded-md object-cover"
                        />
                        <motion.div
                           initial={{ opacity: 0 }}
                           whileHover={{ opacity: [0, 1] }}
                           transition={{ duration: 0.3, ease: 'easeInOut' }}
                           className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-y-6 rounded-md bg-purpleprimary"
                        >
                           <motion.p className="text-base font-semibold text-white">
                              {work.name}
                           </motion.p>

                           <motion.div className="flex gap-x-2">
                              <motion.a
                                 href={work.repoLink}
                                 whileInView={{ scale: [0, 1] }}
                                 whileHover={{ scale: [1, 1.1] }}
                                 transition={{ duration: 0.3 }}
                                 target="_blank"
                                 className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-white/25"
                              >
                                 <FiGithub className="text-2xl text-white" />
                              </motion.a>

                              {work.deployUrl && (
                                 <motion.a
                                    href={work.deployUrl}
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 1.1] }}
                                    transition={{ duration: 0.3 }}
                                    target="_blank"
                                    className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-white/25"
                                 >
                                    <FiEye className="text-2xl text-white" />
                                 </motion.a>
                              )}
                           </motion.div>
                        </motion.div>
                     </div>
                  ))}
               </motion.div>
               {!lastItem && (
                  <button
                     onClick={() => setVisibilityItems((prev) => prev + 6)}
                     className="my-5 rounded-md bg-purple-700 p-3 text-white hover:bg-purple-800"
                  >
                     Mostrar mais
                  </button>
               )}
            </div>
            <motion.div
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [250, 0], opacity: 1 }}
               transition={{ duration: 1 }}
               className="m-auto mt-12 flex max-w-[43.75rem] flex-wrap items-center justify-between gap-x-12 gap-y-4 rounded-md bg-white p-4 md:gap-y-0"
            >
               <div className="flex flex-col">
                  <h3 className="text-2xl font-extrabold">
                     Então vamos falar sobre
                  </h3>
                  <span className="text-2xl font-extrabold text-purpleprimary sm:text-[2rem] sm:leading-[3rem] md:text-[2.5rem] md:leading-[3.75rem]">
                     meus próximos projetos
                  </span>
               </div>
               <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 cursor-pointer self-end rounded-md bg-purpleprimary px-4 py-[0.65rem] text-sm"
               >
                  <Link
                     href="#contact"
                     className="font-bold capitalize text-white"
                  >
                     Contate-me
                  </Link>
               </motion.div>
            </motion.div>
         </Header>
      </motion.section>
   )
}
