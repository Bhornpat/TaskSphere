'use client'
import Link from 'next/link'
import { FaUser, FaSignOutAlt } from 'react-icons/fa'  // ใช้ react-icons
import SignInModal from '@/components/SignInModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // mock for now
  const handleSignOut = () => {
    // todo: replace with real sign out logic
    setIsAuthenticated(false);
  };

  return (
    <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center" >
      <div className="bg-black/80 text-white px-12 py-12 rounded-2xl max-w-[90vw] md:max-w-5xl lg:max-w-6xl text-center space-y-6 shadow-xl">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-200">
          Welcome to <br />
          <span className="text-yellow-400">Tasksphere 🚀</span>
        </h1>

        <p className="text-sm md:text-base text-gray-300 font-mono leading-relaxed">
          Organize your life<br />
          Conquer your tasks and rule your galaxy
        </p>

        {/* Auth Button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          {!isAuthenticated ? (
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:brightness-110 transform duration-200"
            >
              <FaUser /> Sign In
            </button>
          ) : (
            <div className="relative group">
              <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center">
                <FaUser className="text-white" />
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-md text-sm opacity-0 group-hover:opacity-100 transition duration-200 z-50">
                <button onClick={handleSignOut} className="w-full px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </div>
          )}


          {/* Explore Button */}
          <button
            onClick={() => router.push('/explore')}
            className="px-6 py-2 rounded-full bg-yellow-400 hover:brightness-110 transform duration-200 text-black font-bold shadow-md text-center"
          >
            Explore the Galaxy
          </button>
        </div>
        {/* Sign In Modal */}

        {showModal && (
          <SignInModal onClose={() => setShowModal(false)} />
        )}
      </div>
    </div >
  );
}


