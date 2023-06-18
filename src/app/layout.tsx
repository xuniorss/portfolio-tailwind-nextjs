import { Footer } from '@/components/Footer'
import clsx from 'clsx'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

const font = Poppins({
   subsets: ['latin'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
   title: 'Portfolio - Gilberto Fortunato',
   description:
      'Desenvolvedor web apaixonado por criar experiências interativas e funcionais. Especializado em front-end utilizando frameworks modernos como React e Next.js. Procuro combinar design e desenvolvimento para entregar soluções elegantes e de alta qualidade.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="pt-BR">
         <body
            className={clsx(
               'flex min-h-screen flex-col items-center bg-background',
               font.className
            )}
         >
            {children}
            <Footer />
         </body>
      </html>
   )
}
