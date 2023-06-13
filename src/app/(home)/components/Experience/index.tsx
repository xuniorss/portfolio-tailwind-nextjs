'use client'

import { ExperienceProps } from '@/types/experience'
import clsx from 'clsx'
import { differenceInCalendarYears } from 'date-fns'
import { motion } from 'framer-motion'

export const Experience = ({
   iconTech,
   experience,
   techStarted,
   techName,
}: ExperienceProps) => {
   const currentDate = new Date()
   const started = new Date(techStarted, 0, 1)

   const techYear = differenceInCalendarYears(currentDate, started)

   return (
      <div className="group flex items-center gap-x-3 text-white/70">
         <span>{iconTech}</span>
         <div className="w-full rounded-md border border-purple-800 group-hover:text-white md:w-2/4">
            <motion.div
               initial={{ width: 0, opacity: 0 }}
               animate={{
                  width:
                     techYear >= 1
                        ? `${(techYear / experience) * 100}%`
                        : '100%',
                  opacity: 1,
               }}
               transition={{ duration: 2, delay: 0.1 }}
               className={clsx(
                  'whitespace-nowrap text-center',
                  techYear < 1 ? 'bg-transparent' : 'bg-purple-950'
               )}
               style={{
                  width:
                     techYear >= 1
                        ? `${(techYear / experience) * 100}%`
                        : '100%',
               }}
            >
               {techYear < 1 && <p className="w-full">Menos de um ano</p>}
               {techYear >= 1 && (
                  <p>
                     {techYear} {techYear === 1 ? 'Ano' : 'Anos'}
                  </p>
               )}
            </motion.div>
         </div>
         <div className="hidden text-white opacity-0 transition group-hover:opacity-100 md:block">
            <small>{techName}</small>
         </div>
      </div>
   )
}
