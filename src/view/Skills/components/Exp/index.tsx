'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'
import { experiences } from '../../constants'

export const Exp = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ y: [-50, 0], opacity: 1 }}
         className="m-auto flex w-full max-w-sm flex-col gap-y-3"
      >
         {experiences.map((exp) => (
            <>
               {exp.currentJob && (
                  <small className="text-sm text-purpleprimary">
                     Emprego atual
                  </small>
               )}
               <div
                  key={exp.id}
                  className={clsx(
                     'flex items-center justify-between text-white',
                     exp.currentJob &&
                        'rounded-md border border-purpleprimary px-3'
                  )}
               >
                  <div className="w-full text-xl font-semibold">
                     {exp.yearEnd && (
                        <span>
                           {exp.yearStart} - {exp.yearEnd}
                        </span>
                     )}
                     {!exp.yearEnd && <span>{exp.yearStart}</span>}
                  </div>
                  <div className="w-full whitespace-nowrap text-end">
                     <p className="text-lg font-semibold md:text-xl">
                        {exp.position}
                     </p>
                     <small className="text-sm text-white/75">
                        {exp.company}
                     </small>
                  </div>
               </div>
            </>
         ))}
      </motion.div>
   )
}
