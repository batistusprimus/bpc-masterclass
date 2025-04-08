import React from 'react';
import Image from 'next/image';

interface LogoMarqueeProps {
  className?: string;
}

// Liste des logos clients
const logos = [
  { id: 1, name: 'Client 1', path: '/66586f5324a5f96213323991_e06827a1-d54d-4cff-8f39-d480a4d23967.png' },
  { id: 2, name: 'Client 2', path: '/665876e344b512bddc35112e_77189863-0a3b-48f3-9b9d-cf294d14d568.png' },
  { id: 3, name: 'Client 3', path: '/665871bc5f8d9b87ce190b59_1443ebad-ae25-4240-b1e3-1bf8bf237c3a.png' },
  { id: 4, name: 'Client 4', path: '/66586da221e592872a514716_ecf4541d-3c8f-4731-ace6-7f59afa16df4.png' },
  { id: 5, name: 'Client 5', path: '/6658713033c7316a7e38d620_548af79d-89fc-4542-a939-4eb1fabae0c8.png' },
  { id: 6, name: 'Client 6', path: '/6658731f8227b6b6a4bca138_739e49c5-fdf8-4988-8417-7502d47f2c53.png' },
];

export default function LogoMarquee({ className = '' }: LogoMarqueeProps) {
  // On duplique la liste de logos mais on réduit pour ne pas avoir trop de logos sur mobile
  const displayLogos = [...logos, ...logos];
  
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="relative w-[200%] flex items-center">
        <div 
          className="flex w-[100%] animate-marquee"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {displayLogos.map((logo, index) => (
            <div 
              key={`logo-${index}`} 
              className="flex-shrink-0 flex items-center justify-center px-3 sm:px-5 md:px-6"
              style={{ width: `${100 / 8}%` }}
            >
              <Image 
                src={logo.path}
                alt={logo.name}
                width={320}
                height={160}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain hover:opacity-90 transition-opacity"
                priority={index < 6}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 