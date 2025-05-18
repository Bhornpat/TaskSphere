'use client'

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
			//  Must be 'username' — FastAPI expects this
			formData.append('username', email)
			formData.append('password', password)

			const res = await fetch('http://192.168.137.50:8000/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formData.toString(),    // converts to a=b&c=d
			})

			if (!res.ok) throw new Error('Invalid credentials')

			const data = await res.json()
			//  Store JWT
			localStorage.setItem('token', data.access_token)
			//  Redirect
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
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
			<h2 className="text-2xl font-bold mb-4 text-center text-gray-400">Login to Your Account</h2>
			{error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Email"
					className="w-full p-2 border rounded"
					required
				/>
				<input
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder="Password"
					className="w-full p-2 border rounded"
					required
				/>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
				>
					Login
				</button>
			</form>
		</div>
	)
}

