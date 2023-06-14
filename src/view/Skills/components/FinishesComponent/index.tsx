import { differenceInCalendarYears } from 'date-fns'

interface FinishesComponentProps {
   commitQtd: number
}

type FinishesProps = {
   id: number
   number: number
   itemName: string
}

export const FinishesComponent = ({ commitQtd }: FinishesComponentProps) => {
   const programming = new Date(2017, 0, 1)
   const fullstack = new Date(2018, 0, 1)
   const currentDate = new Date()

   const yearsProgramming = differenceInCalendarYears(currentDate, programming)
   const yearsFullstack = differenceInCalendarYears(currentDate, fullstack)

   const finishes: Array<FinishesProps> = [
      { id: 1, number: yearsProgramming, itemName: 'Anos como programador' },
      {
         id: 2,
         number: yearsFullstack,
         itemName: 'Anos como Fullstack developer',
      },
      { id: 3, number: commitQtd, itemName: 'Commits no Github' },
      { id: 4, number: 10, itemName: 'Cursos certificados concluídos' },
   ]

   return (
      <>
         {finishes.map((value) => (
            <div key={value.id}>
               <span className="select-none text-3xl text-purpleprimary">
                  {value.number}+
               </span>
               <h4 className="font-semibold">{value.itemName}</h4>
            </div>
         ))}
      </>
   )
}
