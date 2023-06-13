import { IconType } from 'react-icons'

export type IconsPropsSkills = {
   icon: IconType
   name: string
}

export type ExperiencesProps = {
   id: number
   yearStart: number
   yearEnd?: number
   currentJob?: boolean
   position: string
   company: string
}

export type GraduationsProps = {
   id: number
   year: number
   academy: string
   course: string
   current?: boolean
}
