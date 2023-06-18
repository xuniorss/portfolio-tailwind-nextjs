import { SocialProps } from '@/types'
import { differenceInCalendarYears } from 'date-fns'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const currentDate = new Date()
const targetDateExperience = new Date(2017, 0, 1)

export const experience = differenceInCalendarYears(
   currentDate,
   targetDateExperience
)

export const social: Array<SocialProps> = [
   { icon: BsGithub, name: 'GitHub', href: 'https://github.com/xuniorss' },
   {
      icon: BsLinkedin,
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/gilberto-fortunato-111899201/',
   },
   {
      icon: BsInstagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/xuniorss/',
   },
]
