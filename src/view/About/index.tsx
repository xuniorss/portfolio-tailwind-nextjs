'use client'

import { useAge } from '@/hooks/useAge'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getDownloadURL, getMetadata, ref } from 'firebase/storage'
import storage from '@/services/firebase'
import Link from 'next/link'
import { Header } from '@/components/Header'

export default function AboutView() {
   const [download, setDownload] = useState('')
   const [kb, setKb] = useState(0)
   const { age } = useAge()

   useEffect(() => {
      getDownloadURL(ref(storage, 'curriculoGilberto.pdf')).then((url) => {
         setDownload(url)
      })
   }, [])

   getMetadata(ref(storage, 'curriculoGilberto.pdf')).then((metadata) => {
      const kb = Math.round(metadata.size / 1024)
      setKb(kb)
   })

   return (
      <motion.section
         id="about"
         initial={{ opacity: 0 }}
         whileInView={{ y: [-50, 0], opacity: 1 }}
         className="flex min-h-screen w-full max-w-screen-xl flex-col px-8"
      >
         <Header title="Sobre mim" subtitle="QUEM SOU EU ?">
            <div className="grid w-full grid-cols-1 place-items-center space-y-6 md:grid-cols-2 md:space-y-0">
               <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: [-250, 0], opacity: 1 }}
                  transition={{ duration: 1 }}
               >
                  <Image
                     src="/images/portfolio2.jpeg"
                     height={300}
                     width={300}
                     alt="Image2"
                     className="rounded-md border border-purpleprimary object-cover transition hover:scale-105"
                  />
               </motion.div>
               <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: [250, 0], opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col space-y-5"
               >
                  <p className="text-[1rem] leading-6 text-white md:text-lg">
                     Sou um desenvolvedor fullstack com {age} anos de idade,
                     especializado nas linguagens de programação ReactJs,
                     NextJs, React-Native, NodeJs, AdonisJs e TypeScript. Sempre
                     busco evoluir minhas habilidades e conhecimentos na
                     programação, trabalhando em projetos desafiantes e buscando
                     soluções inovadoras para problemas complexos. Além disso,
                     sou uma pessoa dedicada e apaixonada pelo que faço, sempre
                     buscando aprender e evoluir continuamente.
                  </p>

                  <Link
                     href={download}
                     target="_blank"
                     className="w-full rounded-xl bg-white px-3 py-4 text-center text-sm font-semibold capitalize hover:bg-white/90 md:w-1/2"
                  >
                     {`Ver Currículo (${kb} kb)`}
                  </Link>
               </motion.div>
            </div>
         </Header>
      </motion.section>
   )
}
