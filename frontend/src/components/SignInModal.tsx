'use client';

import { FaGoogle, FaFacebook, FaGithub, FaUserLock } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function SignInModal({ onClose }: { onClose: () => void }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('')
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent) => {
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

			if (!res.ok) throw new Error('No account found. Please sign up first.')

			const data = await res.json()
			localStorage.setItem('token', data.access_token)
			router.push('/explore')
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message)
			} else {
				setError('Something went wrong')
			}
		}
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

				<p className="text-center text-sm  font-mono text-gray-500 dark:text-gray-400 mb-4">
					Still outside? <a className="text-orange-600 font-mono hover:underline" href="/register">Sign Up</a> and jump in
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

					{error && (
						<p className="text-red-600 text-sm bg-red-100 p-2 rounded-md">{error}</p>
					)}

					<div className="text-right text-sm">
						<a href="/forgot-password" className="text-gray-500 font-mono hover:underline">Forgot your password?</a>
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
