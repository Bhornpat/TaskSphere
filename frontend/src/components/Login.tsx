'use client'

import { useState } from 'react'


export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// TODO: Call API to log in
		console.log('Logging in with', { email, password })
	}



	return (
		<div className="w-full max-w-md mx-auto">
			<h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
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
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="••••••••"
						required
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
				>
					Login
				</button>
			</form>
		</div>
	)
}

