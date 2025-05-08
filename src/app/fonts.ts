import { Anton, Archivo_Black, Montserrat } from 'next/font/google';

// Utilisation de polices système et web sûres
export const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
}); 