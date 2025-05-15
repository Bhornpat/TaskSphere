//  UI for top navigation bar
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const pathname = usePathname()

	return (
		<nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
			<ul className="flex space-x-6 text-sm">
				<li>
					<Link
						href="/login"
						className={pathname === '/login' ? 'font-bold text-blue-300' : ''}
					>
						Login
					</Link>
				</li>
				<li>
					<Link
						href="/register"
						className={pathname === '/register' ? 'font-bold text-blue-300' : ''}
					>
						Register
					</Link>
				</li>
				<li>
					<Link
						href="/dashboard"
						className={pathname === '/dashboard' ? 'font-bold text-blue-300' : ''}
					>
						Dashboard
					</Link>
				</li>
			</ul>
		</nav>
	)
}

