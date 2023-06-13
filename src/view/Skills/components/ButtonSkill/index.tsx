'use client'

import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   active: number
   activednumber: number
   label: string
}

export const ButtonSkill = ({
   active,
   activednumber,
   label,
   ...rest
}: ButtonProps) => {
   return (
      <button
         className={clsx(
            'rounded-xl border-0 p-3 text-sm capitalize',
            active === activednumber
               ? 'cursor-default bg-purpleprimary text-white'
               : 'bg-white text-black hover:bg-white/90'
         )}
         {...rest}
      >
         {label}
      </button>
   )
}
