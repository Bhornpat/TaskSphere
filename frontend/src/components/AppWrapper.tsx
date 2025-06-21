'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const hideNavbar = pathname === '/homepage';

	return (
		<>
			{!hideNavbar && <Navbar />}
			{children}
		</>
	);
}
