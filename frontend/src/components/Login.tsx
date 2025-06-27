'use client'

import Link from 'next/link';
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

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

			if (!res.ok) throw new Error('Invalid credentials')

			const data = await res.json()
			localStorage.setItem('token', data.access_token)
			router.push('/dashboard')
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message)
			} else {
				setError('Something went wrong')
			}
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

					<button
						type="submit"
						className="w-full py-2 rounded-full text-white font-bold transition bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 hover:brightness-110 text-shadow shadow-md"
					>
						I&apos;m Ready
					</button>

					<p className="text-sm text-center mt-4 text-gray-600">
						Still outside?{" "}
						<Link href="/register" className="text-pink-600 underline hover:text-pink-800">
							Sign Up
						</Link>
					</p>

				</form>
			</div>
		</div>
	)
}
