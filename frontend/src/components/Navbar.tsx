'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	// Logout handler
	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.href = '/homepage';
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

					{open && (
						<div className="absolute font-mono right-0 mt-2 w-35 bg-white text-black  rounded-lg shadow-lg z-50">
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

