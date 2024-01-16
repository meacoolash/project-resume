import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './provider'
import { Montserrat, Inter, Signika_Negative } from 'next/font/google'

const inter = Inter({
  subsets: ['latin']
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-monsterrat',
})

const signika_Negative = Signika_Negative({
  variable: '--font-signika-negative',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mikulas Stec | FE/Fullstack Developer',
  description: 'This project serves as a showcase of my professional journey as a software developer.',
  metadataBase: new URL('https://www.stec.sk'),
  openGraph: {
    title: 'Mikulas Stec | FE/Fullstack Developer',
    description: 'This project serves as a showcase of my professional journey as a software developer',
    images: '/react.jpg'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`
        bg-background-body text-text 
        ${montserrat.variable} 
        ${signika_Negative.variable} 
        ${inter.className}
        `}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
