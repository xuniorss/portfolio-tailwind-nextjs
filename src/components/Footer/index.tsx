'use client'

import { social } from '@/constants'
import { useAge } from '@/hooks/useAge'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Footer = () => {
   const { currentYear } = useAge()

   return (
      <motion.footer
         initial={{ opacity: 0 }}
         whileInView={{
            opacity: 1,
         }}
         transition={{ duration: 1.5 }}
         className="mx-auto flex max-w-[50rem] flex-wrap items-center justify-between gap-x-8 space-y-3 px-12 py-4 text-white"
      >
         <div className="flex">
            <p className="text-sm font-medium">
               Copyright&copy;{currentYear} Todos os direitos reservados. Feito
               por{' '}
               <span className="font-extrabold text-purpleprimary">
                  Gilberto Fortunato
               </span>
            </p>
         </div>
         <div className="flex items-center gap-4">
            <h4 className="text-sm font-extrabold">Siga-me</h4>
            <span className="h-[0.125rem] w-12 bg-white" />
            <div className="flex gap-2">
               {social.map((value) => {
                  const Icon = value.icon

                  return (
                     <Link
                        key={value.name}
                        href={value.href}
                        target="_blank"
                        className="text-white"
                     >
                        <Icon
                           size={20}
                           className="opacity-70 transition-opacity hover:opacity-100"
                        />
                     </Link>
                  )
               })}
            </div>
         </div>
      </motion.footer>
   )
}
