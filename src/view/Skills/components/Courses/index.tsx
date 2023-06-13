'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { graduations } from '../../constants'

export const Courses = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ y: [-50, 0], opacity: 1 }}
         className="m-auto flex w-full max-w-sm flex-col gap-y-3 md:max-w-xl"
      >
         {graduations.map((grad) => (
            <div
               key={grad.id}
               className="flex w-full flex-col text-lg text-white md:text-xl"
            >
               <div
                  className={clsx(
                     'flex items-center justify-between gap-x-4',
                     grad.current &&
                        'rounded-md border border-purpleprimary px-3'
                  )}
               >
                  <span className="font-semibold">{grad.year}</span>

                  <div className="flex w-full flex-col items-start md:items-end">
                     <p className="font-semibold">{grad.course}</p>
                     <small className="text-white/75">{grad.academy}</small>
                  </div>
               </div>
            </div>
         ))}
      </motion.div>
   )
}
