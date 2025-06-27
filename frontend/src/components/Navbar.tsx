'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';


export default function Navbar() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const [loading, setLoading] = useState(false);

	// Logout handler
	const handleLogout = () => {
		setLoading(true);
		localStorage.removeItem('token');
		router.push('/homepage');
		// setLoading(false) is not needed here as router.push will unmount this component
	};

	// Close dropdown if click outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
	    
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	
		
	
	}, []);

	return (
		<nav className="bg-black dark:bg-gray-900 dark:border-gray-700 px-6 py-3 md:px-6 md:py-5 shadow-lg fixed w-full z-30">
			<div className="flex justify-between items-center max-w-7xl mx-auto">

				{/* Left: Logo */}
				<Link
					href="/explore"
					className="text-2xl md:text-3xl font-mono font-extrabold text-white-800 shadow-md hover:brightness-110"
				>
					Tasksphere
				</Link>

				{/* Right: Dropdown menu */}
				<div className="relative" ref={menuRef}>
					<button
						onClick={() => setOpen(!open)}
						className="text-2xl md:text-3xl hover:scale-105 flex items-center justify-center"
					>
						☰
					</button>

					{loading && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-10 w-10 md:h-14 md:w-14 border-t-4 border-b-4 border-pink-500"></div>
      <p className="mt-4 text-white text-sm md:text-lg font-semibold text-shadow-md">Loading...</p>
    </div>
  </div>
)}
					
					{open && (
						<div className="absolute font-mono right-0 mt-2 w-35 bg-white text-black hover:scale-105 transition text-shadow duration-300 rounded-lg shadow-lg z-50">
							<button
								onClick={handleLogout}
								className="w-full font-mono px-4 py-2 text-left hover:rounded-lg hover:bg-gray-100"
							>
								Logout
							</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

