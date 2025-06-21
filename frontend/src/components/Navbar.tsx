//  UI for top navigation bar
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa'; //  ADD THIS
import SignInModal from './SignInModal';

export default function Navbar() {
	/* const [showModal, setShowModal] = useState(false); */

	return (
		<>
			<nav className="bg-black dark:bg-gray-900 dark:border-gray-700 px-4 py-3 shadow-lg fixed w-full z-50">
				<div className="flex justify-between items-center max-w-7xl mx-auto">
					{/* Left: Logo */}
					<Link href="/explore" className="text-2xl font-mono font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text  hover:brightness-110 shadow-md">
						Tasksphere
					</Link>

					{/* {/* Right: Sign In Button */}
					{/* <div className="flex items-center gap-4"> */}
					{/* 	<button */}
					{/* 		onClick={() => setShowModal(true)} */}
					{/* 		className="font-mono bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 text-white px-4 py-2 rounded-full shadow-md hover:brightness-110 font-semibold flex items-center gap-3 , transition duration-300" */}
					{/* 	> */}
					{/* 		<FaUser /> */}
					{/* 	</button> */}
					{/* </div> */}
				</div>
			</nav>

			{/* {/* Modal */}
			{/* {showModal && <SignInModal onClose={() => setShowModal(false)} />} */}
		</>
	);
}



