import localFont from 'next/font/local';

// Utilisation de polices système et web sûres
export const anton = localFont({
  src: '../public/fonts/Anton-Regular.woff2',
  variable: '--font-anton',
  display: 'swap',
});

export const archivo = localFont({
  src: '../public/fonts/ArchivoBlack-Regular.woff2',
  variable: '--font-archivo',
  display: 'swap',
});

export const montserrat = localFont({
  src: '../public/fonts/Montserrat-Regular.woff2',
  variable: '--font-montserrat',
  display: 'swap',
}); 