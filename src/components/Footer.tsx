import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-6">BPC MASTERCLASS</h3>
            <p className="text-sm text-gray-400 mb-4">
              Notre produit ultime, mis à disposition gratuitement et sans inscription 
              pour les entrepreneurs et solopreneurs du B2B.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-title">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-title transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/masterclass" className="text-gray-400 hover:text-title transition-colors">
                  Masterclass
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-gray-400 hover:text-title transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-title transition-colors">
                  Diagnostic B2B Gratuit
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-400 hover:text-title transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/bpc-group" className="text-gray-400 hover:text-title transition-colors">
                  BPC GROUP
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Baptiste@bpcorp.eu
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-title transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Réserver un appel de diagnostic B2B gratuit
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-6">Ressources</h4>
            <div className="space-y-4">
              <Link href="/catalogue" className="block text-gray-400 hover:text-title transition-colors">
                Catalogue
              </Link>
              <Link href="/#testimonials" className="block text-gray-400 hover:text-title transition-colors">
                Témoignages
              </Link>
              <Link href="/#faq" className="block text-gray-400 hover:text-title transition-colors">
                FAQ
              </Link>
              <Link href="/mentions-legales" className="block text-gray-400 hover:text-title transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} BPC Masterclass. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 