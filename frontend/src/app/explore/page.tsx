'use client'

import { useRouter } from 'next/navigation'
import { FaRocket } from 'react-icons/fa'

export default function ExplorePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/milkyway-8190232_1920.jpg')" }}>

      <div className="bg-black/80 text-white px-10 py-12 rounded-2xl max-w-[90vw] md:max-w-3xl text-center shadow-2xl ">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Explore the <span className="text-yellow-400">Galaxy</span>
        </h1>

        <p className="text-md md:text-lg drop-shadow font-mono mb-3 text-gray-300 text-center">
          This is your universe
          <span className="hidden md:inline"> — </span>
          <br className="block md:hidden" />
          Make it productive and exciting
        </p>

        <div className="flex justify-center gap-6 pt-4">
          <button
            onClick={() => router.push('/dashboard')}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 text-white font-semibold text-lg rounded-full shadow-md hover:brightness-110 hover:scale-105 transition text-shadow duration-300"
          >
            Let’s Fly to Task Control <FaRocket className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

