'use client'

import Link from 'next/link';
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const router = useRouter()


	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')
		setSuccess('')

		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			})

			if (!res.ok) {
				const data = await res.json()
				throw new Error(data.detail || 'This email is already taken. Please try signing in')
			}

			setTimeout(() => {
				router.push('/login')
			}, 2000)
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message || 'Something went wrong')
			} else {
				setError('Something went wrong')
			}
		}
	}

	return (
		<div
			className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
		>
			<div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm md:max-w-md">
				<h2 className="text-xl md:text-2xl font-bold mb-6 text-center font-mono text-gray-700">
					Create Your Account
				</h2>

				{error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
				{success && <p className="text-green-600 text-sm mb-3 text-center">{success}</p>}

				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="w-full px-4 py-2 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400
             text-gray-900 placeholder-gray-400 bg-white bg-opacity-90"
							placeholder="you@example.com"
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
							onChange={e => setPassword(e.target.value)}
							className="w-full px-4 py-2 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400
             text-gray-900 placeholder-gray-400 bg-white bg-opacity-90"
							placeholder="••••••••"
							required
						/>
					</div>

					<div className=' md:flex-row text-center items-center justify-center gap-4 mt-6'>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 text-white py-2 rounded-full hover:brightness-110 transition duration-300 shadow-md hover:shadow-md font-boldhover:brightness-110 transition duration-300 text-shadow rounded-full font-bold"
						>
							Sign Me Up
						</button>

						<p className="text-sm text-center mt-4 text-gray-600">
							Already have an account?{" "}
							<Link href="/login" className="text-pink-600 underline hover:text-pink-800">
								Sign In
							</Link>
						</p>


					</div>
				</form>
			</div>
		</div>
	)
}

