import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Mentions Légales | BPC Masterclass',
  description: "Mentions légales de BPC Masterclass - Informations légales, politique de confidentialité et conditions générales d'utilisation.",
};

export default function MentionsLegales() {
  return (
    <main className="container-custom py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-title">Mentions Légales</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">1. Éditeur du site</h2>
          <p className="mb-4">
            Le présent site est édité par :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>BP LES CANNISSES KFT</li>
            <li>Société de droit hongrois (KFT) au capital social de 8.000€</li>
            <li>Siège social : Rózsa utca 38/A, 1077 Budapest, Hongrie</li>
            <li>Enregistrée au registre du commerce de Budapest sous le numéro Cg.01-09-420052</li>
            <li>Numéro de TVA intracommunautaire : HU32359815</li>
            <li>Responsable de la publication : Baptiste Piocelle</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">2. Hébergement</h2>
          <p className="mb-4">
            Le site est hébergé par :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Vercel Inc.</li>
            <li>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, United States</li>
            <li>Site : https://vercel.com</li>
            <li>Support : support@vercel.com</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">3. Contact</h2>
          <p className="mb-4">
            Pour toute question, remarque ou demande d'information, vous pouvez contacter l'éditeur du site à l'adresse suivante :
          </p>
          <p className="mb-4">
            📧 baptiste@bpcorp.eu
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">4. Activité du site</h2>
          <p className="mb-4">
            Le site masterclass.bpcorp.eu propose des formations, ressources et accompagnements pour entrepreneurs du B2B, à travers plusieurs offres : Starter, Accélérateur, Scale et Incubateur BPC.
          </p>
          <p className="mb-4">
            L'accès à certains contenus est gratuit, d'autres sont payants.
            Il n'existe pas encore d'espace membre privé.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">5. Propriété intellectuelle</h2>
          <p className="mb-4">
            L'ensemble des contenus présents sur ce site (textes, vidéos, documents, concepts, formations) sont la propriété exclusive de BP LES CANNISSES KFT.
          </p>
          <p className="mb-4">
            Toute reproduction ou diffusion, même partielle, sans autorisation préalable est strictement interdite.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">6. Protection des données personnelles</h2>
          <p className="mb-4">
            Le site collecte des données personnelles (nom, prénom, email) via ses formulaires de contact et d'inscription.
            Ces données sont utilisées à des fins de gestion commerciale, d'envoi d'emails via le CRM GoHighLevel, et de gestion de paiements via Stripe.
          </p>
          <p className="mb-4">
            Conformément à la réglementation européenne (RGPD), vous disposez d'un droit d'accès, de modification et de suppression de vos données.
            Pour exercer ce droit, contactez-nous à : baptiste@bpcorp.eu
          </p>
          <p className="mb-4">
            Outils utilisés pouvant impliquer un traitement de vos données :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>CRM : GoHighLevel</li>
            <li>Plateforme de paiement : Stripe</li>
            <li>Organisation interne : Notion</li>
          </ul>
          <p className="mb-4">
            Aucune donnée n'est revendue ou utilisée à des fins non mentionnées.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">7. Cookies et tracking</h2>
          <p className="mb-4">
            Le site n'utilise pas de cookies à des fins de tracking publicitaire ou d'analyse (Google Analytics, Meta Ads, etc.) à ce jour.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">8. Responsabilité</h2>
          <p className="mb-4">
            L'éditeur s'efforce de fournir des informations fiables et à jour. Cependant, il ne saurait être tenu responsable d'éventuelles erreurs, inexactitudes ou indisponibilités ponctuelles du site.
          </p>
        </section>
        
        <div className="mt-10">
          <Link href="/" className="inline-flex items-center text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
} 