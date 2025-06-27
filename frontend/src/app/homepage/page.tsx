'use client'
//import Link from 'next/link'
import { FaSignOutAlt } from 'react-icons/fa'  // ใช้ react-icons
import SignInModal from '@/components/SignInModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typewriter } from 'react-simple-typewriter'



export default function HomePage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // mock for now
  const handleSignOut = () => {
    // todo: replace with real sign out logic
    setIsAuthenticated(false);
  };

  return (
    // This outer div now acts as the main container for the page
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        
      {/* Your existing content card, make sure it has a higher z-index */}
      <div className="bg-black/80 text-white px-8 py-10 md:px-16 md:py-16 rounded-3xl max-w-3xl md:max-w-6xl text-center space-y-8 shadow-2xl z-10 relative"> {/* Added z-10 and relative */}

          {/* Sign In Modal */}

          {showModal && (
          <SignInModal onClose={() => setShowModal(false)} />
        )}

        <div className='flex flex-col gap-5'>
          <h1 className="text-2xl md:text-4xl max-w-xl md:max-w-5xl  font-bold text-gray-100 ">
            <span >Ready to launch </span><br />
            <span className="text-yellow-400">
              <Typewriter
                words={['Tasksphere', 'Your Mission Control', 'Your New Journey']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </span>
          </h1>
        </div>
        {/* <p className="text-sm md:text-base text-gray-300 font-mono leading-looses"> */}
        {/* Organize your life<br /> */}
        {/* Conquer your tasks and rule your galaxy */}
        {/* </p> */}

        {/* Auth Button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          {!isAuthenticated ? (
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold px-4 py-2 rounded-full shadow-md text-shadow flex items-center gap-2 hover:brightness-110 transform duration-200 hover:scale-105 transition duration-300"
            >
              🚀 Sign In
            </button>
          ) : (
            <div className="relative group">
              <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center justify-center">

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
            className="px-6 py-2 rounded-full bg-yellow-400 hover:brightness-110 transform duration-200 text-black font-bold shadow-md text-shadow text-center hover:scale-105 transition duration-300"
          >
            Explore the Galaxy
          </button>


        </div>
      

      </div>

    </div>

  );
}