import { differenceInCalendarYears } from 'date-fns'

const currentDate = new Date()
const targetDateExperience = new Date(2017, 0, 1)

export const experience = differenceInCalendarYears(
   currentDate,
   targetDateExperience
)
