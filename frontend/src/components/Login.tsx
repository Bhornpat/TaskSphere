'use client'

import Link from 'next/link';
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()
	const [loading, setLoading] = useState(false);
	const [failedAttempts, setFailedAttempts] = useState(0);
    


	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true); // Start loading immediately on submit
		setError(''); // Clear previous errors on new attempt

		try {
			const formData = new URLSearchParams()
			formData.append('username', email) // Ensure your backend expects 'username' for email
			formData.append('password', password)
		
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formData.toString(),
			})
			if (!res.ok) {
				const errorData = await res.json();
				const backendDetail = errorData.detail; // Get the raw detail from backend
				
				console.log("Frontend received errorMessage (raw detail):", backendDetail);
				console.log("Frontend received errorMessage (trimmed & lowercased for comparison):", backendDetail ? backendDetail.toLowerCase().trim() : 'N/A');
    
				// Set the error message to be displayed to the user
				setError(backendDetail || 'Sign in failed. Please try again'); 
    
				// Now, handle the failedAttempts based on the backendDetail
				if (backendDetail === "Incorrect Email or Password") { // Exact string match for password error
				    setFailedAttempts(prev => prev + 1);
				    console.log("Failed attempts incremented to:", failedAttempts + 1);
				} else if (backendDetail === "No account found. Please sign up first") { // Exact string match for no account
				    setFailedAttempts(0); // Reset for "no account" error
				} else {
				    // For any other unexpected backend errors, reset attempts
				    setFailedAttempts(0);
				}
				
				// No need to throw new Error here, as setError is already called.
				// The 'finally' block will handle setLoading(false).
				return; // Exit function early if not ok
			    }
		
			
			
                  // If login is successful
			const data = await res.json()
			localStorage.setItem('token', data.access_token)
			setFailedAttempts(0);
			router.push('/dashboard')
			
		
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message)
			} else {
				setError('An unexpected network error occurred')
			}
		} finally {
			// This finally block ensures setLoading(false) is called whether try succeeds or catch runs
			setLoading(false); // <<< IMPORTANT FIX: Ensure loading is false after try/catch block
		    }
		
	
		  }

	return (
		<div
			className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
			style={{ backgroundImage: "url('/your-star-background.jpg')" }} // update to your starry image path
		>
			<div className="bg-white/100 z-10 backdrop-blur-md shadow-xl rounded-xl p-8 w-full max-w-sm md:max-w-md mx-auto text-center space-y-6">
				<h2 className="text-2xl md:text-3xl font-bold font-mono text-gray-800">
					Sign In <br /> <span className='text-sm font-medium text-gray-500'> Ready to Launch? </span>
				</h2>



				{error && (
					<p className="text-red-600 text-sm bg-red-100 p-2 rounded-md">
						{error}
					</p>
				)}

{loading && (
  <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-10 w-10 md:h-14 md:w-14 border-t-4 border-b-4 border-pink-500"></div>
      <p className="mt-4 text-white text-sm md:text-lg font-semibold text-shadow-md">Loading...</p>
    </div>
  </div>
)}

				<form onSubmit={handleSubmit} className="space-y-5 text-left">
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="you@example.com"
							className=" w-full px-4 py-2 border border-pink-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
							required
						/>
					</div>

					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="••••••••"
							className="w-full px-4 py-2 border border-pink-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
							required
						/>
					</div>

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
						className="w-full py-2 rounded-full text-white font-bold transition bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 hover:brightness-110 text-shadow shadow-md"
					>
						I&apos;m Ready
					</button>

					<p className="text-sm text-center mt-4 text-gray-600">
						Still outside?{" "}
						<Link href="/register" className="text-pink-600 underline hover:text-pink-800" onClick={() => setLoading(true)}>
							Sign Up
						</Link>
					</p>

				</form>
			</div>
		</div>
	)
}
