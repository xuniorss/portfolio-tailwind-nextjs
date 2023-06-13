'use client'

import { motion } from 'framer-motion'
import { icons } from '../../constants'

export const Skill = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ y: [-50, 0], opacity: 1 }}
         className="m-auto grid w-full max-w-3xl grid-cols-2 justify-center gap-8 md:grid-cols-4 md:gap-x-16"
      >
         {icons.map((ic) => {
            const Icon = ic.icon

            return (
               <div
                  key={ic.name}
                  className="group flex flex-col items-center space-y-3"
               >
                  {
                     <div className="flex flex-col gap-y-3">
                        <Icon className="h-[6.25rem] w-[6.25rem] rounded-[50%] text-white hover:border hover:border-purple-500/20" />
                        <span className="text-center text-white opacity-90 md:opacity-0 md:group-hover:opacity-100">
                           {ic.name}
                        </span>
                     </div>
                  }
               </div>
            )
         })}
      </motion.div>
   )
}
