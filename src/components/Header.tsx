'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-primary bg-opacity-90 backdrop-blur-md shadow-lg"
    >
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo blanc.png" alt="BPC Logo" className="h-16" />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-contrast hover:text-title transition-colors">
            Accueil
          </Link>
          <Link href="/masterclass" className="text-contrast hover:text-title transition-colors">
            Masterclass
          </Link>
          <Link href="/catalogue" className="text-contrast hover:text-title transition-colors">
            Catalogue
          </Link>
          <Link href="/media" className="text-contrast hover:text-title transition-colors">
            Media
          </Link>
          <Link href="/bpc-group" className="text-contrast hover:text-title transition-colors">
            BPC GROUP
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/contact" className="btn">
            Obtenir ma Roadmap Personnalisée
          </Link>
          
          {/* Menu mobile button */}
          <button 
            className="md:hidden text-contrast"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="container-custom py-4 flex flex-col space-y-4 bg-primary">
          <Link 
            href="/" 
            className="text-contrast hover:text-title transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            href="/masterclass" 
            className="text-contrast hover:text-title transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Masterclass
          </Link>
          <Link 
            href="/catalogue" 
            className="text-contrast hover:text-title transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Catalogue
          </Link>
          <Link 
            href="/media" 
            className="text-contrast hover:text-title transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Media
          </Link>
          <Link 
            href="/bpc-group" 
            className="text-contrast hover:text-title transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            BPC GROUP
          </Link>
        </nav>
      </div>
    </header>
  );
} 