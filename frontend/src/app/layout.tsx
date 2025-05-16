//  global layout
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Task App',
  description: 'Login/Register/Dashboard UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="bg-purple-300 min-h-screen">
        <header className="bg-yellow-400 py-6 shadow">
          <h1 className="text-4xl font-extrabold text-center text-gray-900">
            Tasksphere 🚀
          </h1>
        </header>

        <div className="mb-4">
          <Navbar />
        </div>

        <main className="max-w-3xl mx-auto p-6 bg-white mt-4 rounded shadow">
          {children}
        </main>
      </body>
    </html>
  )
}

