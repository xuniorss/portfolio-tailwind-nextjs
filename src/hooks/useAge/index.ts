import { differenceInYears, getYear } from 'date-fns'

export function useAge() {
   const birthDate = new Date(1998, 1, 27)
   const currentDate = new Date()

   const age = differenceInYears(currentDate, birthDate)
   const currentYear = getYear(currentDate)

   return { age, currentYear }
}
