'use client';

import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/navigation'

export default function SignInModal({ onClose }: { onClose: () => void }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('')
	const router = useRouter()
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		setLoading(true);
		e.preventDefault();
		try {
			const formData = new URLSearchParams()
			formData.append('username', email)
			formData.append('password', password)

			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formData.toString(),
			})
			
			if (!res.ok) {
				const errorData = await res.json(); // Parse the error response from backend
				throw new Error(errorData.detail || 'Sign in failed. Please try again'); // Use backend's specific error message or a generic one
			    }

			const data = await res.json()
			localStorage.setItem('token', data.access_token)
			router.push('/explore')
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message)
			} else {
				setError('Something went wrong')
			} 
				setLoading(false); // <<< Ensures loading is false after API call (success or error)
		}
	}


	const handleSignUpClick = (e: MouseEvent<HTMLAnchorElement>) => {
		setLoading(true); // Show spinner immediately
		e.preventDefault(); // Prevent default link behavior
		router.push("/register"); // Navigate to the register page
			setLoading(false); // <<< Ensures loading is false after API call success or error
	    } 
		

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center w-screen h-screen items-center">
			<div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-md relative">
				<button
					onClick={onClose}
					className="absolute top-1 right-3 text-xl text-gray-500 hover:text-red-500"
				>
					&times;
				</button>

				<h2 className="text-2xl font-bold mb-2 font-mono text-gray-600 text-center">Sign In</h2>
				<p className="text-center text-sm text-gray-500 font-mono dark:text-gray-300 mb-1">
					Your journey starts here
				</p>

				<p className="text-center text-sm font-mono text-gray-500 dark:text-gray-400 mb-4">
        Still outside?{" "}
        <a
          href="/register" // Keep href for accessibility and non-JS fallback
          onClick={handleSignUpClick} // Use the new handler
          className="text-orange-600 font-mono hover:underline"
        >
          Sign Up
        </a>{" "}
        and jump in
      </p>

				{/* <div className="flex justify-center gap-4 mb-6"> */}
				{/* 	<button className="bg-white dark:bg-[#333] p-3 rounded-full border dark:border-gray-600"> */}
				{/* 		<FaGoogle /> */}
				{/* 	</button> */}
				{/* 	<button className="bg-white dark:bg-[#333] p-3 rounded-full border dark:border-gray-600"> */}
				{/* 		<FaFacebook /> */}
				{/* 	</button> */}
				{/* 	<button className="bg-white dark:bg-[#333] p-3 rounded-full border dark:border-gray-600"> */}
				{/* 		<FaGithub /> */}
				{/* 	</button> */}
				{/**/}
				{/* </div> */}

				<div className="flex items-center my-4">
					<hr className="flex-grow border-t border-gray-300" />
					<span className="mx-2 text-sm font-mono text-gray-400">or</span>
					<hr className="flex-grow border-t border-gray-300" />
				</div>

				<form onSubmit={handleSubmit} className="space-y-5 text-left">

					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="Email"
							required
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								setError('');
							}}
							className="w-full p-2 border border-pink-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-[#2b2b2b] text-black dark:text-white"
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>

						<input
							id="password"
							type="password"
							required placeholder="Password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								setError('');
							}}
							className="w-full p-2 border border-pink-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-[#2b2b2b] text-black dark:text-white"
						/>

					</div>

					
					
					{loading && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-10 w-10 md:h-14 md:w-14 border-t-4 border-b-4 border-pink-500"></div>
      <p className="mt-4 text-white text-sm md:text-lg font-semibold text-shadow-md">Loading...</p>
    </div>
  </div>
)}

					{error && (
						<p className="text-red-600 text-sm bg-red-100 p-2 rounded-md">{error}</p>
					)}


{/* Forgot Password Link */}
<div className="text-right text-sm">
                                  <Link
                                      href="/forgot-password" // <<< This is your new page path
                                      className="text-gray-500 hover:underline hover:text-gray-700"
                                      onClick={() => setLoading(true)} // <<< Show loading spinner during navigation
                                  >
                                      Forgot your password?
                                  </Link>
                              </div>


					<button
						type="submit"
						className="w-full bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 shadow-md text-shadow text-white py-2 rounded-full hover:brightness-110 transition duration-300 font-bold"
					>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
}
