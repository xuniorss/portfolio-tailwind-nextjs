'use client'

import { Header } from '@/components/Header'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ButtonSkill } from './components/ButtonSkill'
import { Courses } from './components/Courses'
import { Exp } from './components/Exp'
import { FinishesComponent } from './components/FinishesComponent'
import { Skill } from './components/Skill'

export default function SkillsView({ commitsQtd }: { commitsQtd: number }) {
   const [active, setActive] = useState(0)

   return (
      <motion.section
         id="about"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         className="flex min-h-screen w-full max-w-screen-xl flex-col px-8"
      >
         <Header
            title="Habilidades e Experiências"
            subtitle="NO QUE SOU ESPECIALISTA ?"
         >
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ y: [-50, 0], opacity: 1 }}
               className="mb-20 flex gap-x-4"
            >
               <ButtonSkill
                  onClick={() => setActive(0)}
                  label="Habilidades"
                  active={active}
                  activednumber={0}
               />
               <ButtonSkill
                  onClick={() => setActive(1)}
                  label="Experiências"
                  active={active}
                  activednumber={1}
               />
               <ButtonSkill
                  onClick={() => setActive(2)}
                  label="Graduções E Cursos"
                  active={active}
                  activednumber={2}
               />
            </motion.div>
            {active === 0 && <Skill />}

            {active === 1 && <Exp />}

            {active === 2 && <Courses />}

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ y: [-50, 0], opacity: 1 }}
               className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-5 text-center text-white md:mt-20 md:gap-y-0"
            >
               <FinishesComponent commitQtd={commitsQtd} />
            </motion.div>
         </Header>
      </motion.section>
   )
}
