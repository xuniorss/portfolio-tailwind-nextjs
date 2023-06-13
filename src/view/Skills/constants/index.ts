import {
   ExperiencesProps,
   GraduationsProps,
   IconsPropsSkills,
} from '@/types/skills'
import {
   FaCss3,
   FaFigma,
   FaHtml5,
   FaNodeJs,
   FaReact,
   FaSass,
} from 'react-icons/fa'
import {
   SiAdonisjs,
   SiJavascript,
   SiPostgresql,
   SiTailwindcss,
   SiTypescript,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export const icons: Array<IconsPropsSkills> = [
   { icon: FaHtml5, name: 'Html 5' },
   { icon: FaCss3, name: 'CSS 3' },
   { icon: FaSass, name: 'SASS' },
   { icon: SiJavascript, name: 'JavaScript' },
   { icon: SiTypescript, name: 'TypeScript' },
   { icon: FaReact, name: 'React.js' },
   { icon: SiTailwindcss, name: 'Tailwind CSS' },
   { icon: TbBrandNextjs, name: 'Next.js' },
   { icon: FaNodeJs, name: 'Node.js' },
   { icon: SiAdonisjs, name: 'Adonis.js' },
   { icon: FaFigma, name: 'Figma' },
   { icon: SiPostgresql, name: 'PostgreSQL' },
]

export const experiences: Array<ExperiencesProps> = [
   {
      id: 1,
      yearStart: 2017,
      position: 'T.I',
      company: 'Redepas Jordão',
      yearEnd: 2017,
   },
   {
      id: 2,
      yearStart: 2018,
      position: 'Fullstack developer',
      company: 'Intersolid Software',
      currentJob: true,
   },
]

export const graduations: Array<GraduationsProps> = [
   { id: 1, year: 2010, academy: 'Micro-Way', course: 'Hardware' },
   {
      id: 2,
      year: 2015,
      academy: 'SENAI',
      course: 'Técnico em eletroeletrônica',
   },
   {
      id: 3,
      year: 2019,
      academy: 'Uni Salesiano',
      course: 'Análise e desenvolvimento de sistemas',
   },
   {
      id: 4,
      year: 2022,
      academy: 'Udemy',
      course: 'ReactJs, React Native, NextJs & Typescript',
   },
   {
      id: 5,
      year: 2022,
      academy: 'Udemy',
      course: 'NodeJs com Express & AdonisJs',
   },
   {
      id: 6,
      year: 2023,
      academy: 'PUC Minas',
      course: 'Pós graduação em Engenharia de Software',
      current: true,
   },
]
