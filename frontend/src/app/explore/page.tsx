'use client';
import { useRouter } from 'next/navigation';
import StickerCard from '@/components/StickerCard';

const stickers = [
  {
    title: 'Yuna ✨',
    content: 'Can animate when hover',
    x: '5%',
    y: '15%',
  },
  {
    title: 'Yamado Ocha 🍵',
    content: 'Ready for your mission',
    x: '65%',
    y: '10%',
  },
  {
    title: 'Task Time',
    content: '9 AM in 🌅',
    x: '20%',
    y: '50%',
  },
  {
    title: 'Don’t Remove it',
    content: 'Very important note!',
    x: '60%',
    y: '60%',
  },
  {
    title: 'Car 🚗',
    content: 'Zoom zoom...',
    x: '80%',
    y: '80%',
  },
];

export default function ExplorePage() {
  return (
    <main className="relative w-full h-screen bg-stars bg-cover overflow-hidden">
      {stickers.map((sticker, idx) => (
        <StickerCard key={idx} {...sticker} />
      ))}
    </main>
  );
}
