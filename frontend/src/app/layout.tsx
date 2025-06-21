//  global layout
import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google';
import AppWrapper from '@/components/AppWrapper'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'Tasksphere',
  description: 'Manage your tasks across the galaxy!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${inter.variable}`}>
      <body className="bg-[url('/milkyway-8190232_1920.jpg')] bg-cover bg-center min-h-screen ">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}

