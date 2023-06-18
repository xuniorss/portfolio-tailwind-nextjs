'use client'

import { Header } from '@/components/Header'
import { social } from '@/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { contacts } from './constants'

export const Contact = () => {
   return (
      <motion.section
         id="contact"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         className="flex min-h-full w-full max-w-screen-xl flex-col px-8"
      >
         <Header title="Contate-me" subtitle="ENTRAR EM CONTATO">
            <div className="mx-auto grid max-w-[68.75rem] grid-cols-1 gap-8 overflow-hidden rounded-2xl bg-white p-8 md:grid-cols-2">
               <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: [-150, 0], opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="contact_left_container"
               >
                  <h3 className="mb-4 text-2xl font-bold capitalize">
                     Apenas diga oi
                  </h3>
                  <p className="mb-2 text-center text-sm font-semibold leading-relaxed md:mb-0 md:text-start md:text-base">
                     Olá! Meu nome é Gilberto Fortunato e sou desenvolvedor de
                     software. Adoro trabalhar com tecnologia e sempre busco me
                     atualizar e aprender novas habilidades. Se você está
                     procurando por alguém para ajudar em seu projeto ou
                     simplesmente quer conversar sobre tecnologia, eu adoraria
                     conversar com você. Entre em contato comigo pelo meu e-mail
                     ou redes sociais. Vamos bater um papo!
                  </p>
               </motion.div>
               <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: [150, 0], opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col"
                  animate={{ opacity: 1, x: 0 }}
               >
                  {contacts.map(({ id, icon: Icon, infoText }) => (
                     <div key={id} className="mt-4 flex items-center">
                        <span className="mr-4 flex h-fit w-fit items-center justify-center gap-y-4 text-purpleprimary md:h-[3.125rem] md:w-[3.125rem] md:rounded-full md:bg-purpleprimary md:text-white">
                           {<Icon />}
                        </span>
                        <p className="text-sm font-bold">{infoText}</p>
                     </div>
                  ))}

                  <div className="mt-4 flex gap-x-4">
                     {social.map((value) => {
                        const Icon = value.icon

                        return (
                           <Link
                              key={value.name}
                              href={value.href}
                              target="_blank"
                              className="text-black transition hover:opacity-80"
                           >
                              <Icon size={20} className="text-sm" />
                           </Link>
                        )
                     })}
                  </div>
               </motion.div>
            </div>
         </Header>
      </motion.section>
   )
}
