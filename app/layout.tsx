import Header from '@/components/Header'
import './globals.css'
// import AnimatedCursor from "react-animated-cursor"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pranshu Jha',
  description: 'Full-Stack Developer Crafting Seamless Digital Experiences.',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " noise-bg text-text"}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
