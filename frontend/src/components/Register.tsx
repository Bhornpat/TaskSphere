'use client'

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
			const res = await fetch('http://192.168.137.50:8000/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			})

			if (!res.ok) {
				const data = await res.json()
				throw new Error(data.detail || 'Registration failed')
			}

			setSuccess('Account created! You can now log in.')
			// optionally redirect after success
			setTimeout(() => {
				router.push('/login')
			}, 5000)
		} catch (err: any) {
			setError(err.message || 'Something went wrong')
		}
	}

	return (
		<div className="w-full max-w-md mx-auto">
			<h2 className="text-2xl font-bold mb-6 text-center text-gray-400">Create Your Account</h2>

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
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
						className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
						placeholder="••••••••"
						required
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
				>
					Register
				</button>
			</form>
		</div>
	)
}

