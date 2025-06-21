'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface StickerCardProps {
	title: string;
	content: string;
	x: string; // e.g., '10%', '70vw'
	y: string; // e.g., '20%', '50vh'
}

const StickerCard: React.FC<StickerCardProps> = ({ title, content, x, y }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			whileHover={{ rotate: 3, scale: 1.05 }}
			transition={{ duration: 0.5 }}
			style={{
				position: 'absolute',
				left: x,
				top: y,
				width: '200px',
				background: 'white',
				borderRadius: '12px',
				padding: '1rem',
				boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
				cursor: 'pointer',
				fontFamily: 'inherit',
			}}
		>
			<h3 className="text-lg font-bold">{title}</h3>
			<p className="text-sm text-gray-700 mt-1">{content}</p>
		</motion.div>
	);
};

export default StickerCard;
