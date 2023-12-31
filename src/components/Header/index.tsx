import { ReactNode } from 'react'

interface HeaderProps {
   title: string
   subtitle: string
   children: ReactNode
}

export const Header = ({ title, subtitle, children }: HeaderProps) => {
   return (
      <main className="flex flex-col items-center py-6">
         <div className="flex flex-col gap-y-4">
            <span className="text-center text-sm font-extrabold uppercase tracking-[0.313em] text-purpleprimary">
               {subtitle}
            </span>
            <h1 className="mb-12 text-center text-3xl font-bold leading-relaxed text-white md:text-5xl">
               {title}
            </h1>
         </div>
         {children}
      </main>
   )
}
