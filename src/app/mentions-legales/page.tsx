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
          <h2 className="text-2xl font-semibold mb-4 text-title">1. Informations légales</h2>
          <p className="mb-4">
            Le site BPC Masterclass est édité par BPC GROUP, entreprise individuelle.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Responsable de la publication : Baptiste Piocelle</li>
            <li>Adresse e-mail : baptiste@bpcorp.eu</li>
            <li>Numéro SIRET : [Insérer numéro SIRET]</li>
          </ul>
          
          <p className="mb-4">
            Hébergement du site : [Nom et coordonnées de l'hébergeur]
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">2. Propriété intellectuelle</h2>
          <p className="mb-4">
            L'ensemble du contenu présent sur le site BPC Masterclass (textes, images, vidéos, logos, icônes, structure, base de données...) est protégé par le droit d'auteur et est la propriété exclusive de BPC GROUP ou de ses partenaires.
          </p>
          <p className="mb-4">
            Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation préalable écrite de BPC GROUP.
          </p>
          <p className="mb-4">
            Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">3. Protection des données personnelles</h2>
          <p className="mb-4">
            BPC Masterclass s'engage à respecter la confidentialité des données personnelles communiquées par les utilisateurs du site et à les traiter dans le respect de la loi Informatique et Libertés du 6 janvier 1978 et du Règlement Général sur la Protection des Données (RGPD).
          </p>
          <p className="mb-4">
            Les données collectées sur le site sont destinées à BPC GROUP et ne sont pas cédées à des tiers. Elles sont collectées dans le but de fournir nos services, d'améliorer notre site et de communiquer avec nos utilisateurs.
          </p>
          <p className="mb-4">
            Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition relatif aux données vous concernant. Pour exercer ces droits, vous pouvez nous contacter à l'adresse e-mail : baptiste@bpcorp.eu
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">4. Cookies</h2>
          <p className="mb-4">
            Le site BPC Masterclass peut utiliser des cookies pour améliorer l'expérience de navigation des utilisateurs. Un cookie est un petit fichier texte stocké sur votre ordinateur qui permet d'enregistrer des informations relatives à votre navigation.
          </p>
          <p className="mb-4">
            Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsque des cookies sont envoyés. Cependant, certaines parties du site pourraient ne pas fonctionner correctement si vous refusez les cookies.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">5. Limitation de responsabilité</h2>
          <p className="mb-4">
            BPC GROUP s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Toutefois, BPC GROUP ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
          </p>
          <p className="mb-4">
            BPC GROUP décline toute responsabilité :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Pour toute interruption du site</li>
            <li>Pour toute survenance de bugs</li>
            <li>Pour toute inexactitude ou omission portant sur des informations disponibles sur le site</li>
            <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site</li>
            <li>Et plus généralement de tout dommage direct ou indirect, quelles qu'en soient les causes, origines, natures ou conséquences</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">6. Liens hypertextes</h2>
          <p className="mb-4">
            Le site BPC Masterclass peut contenir des liens hypertextes vers d'autres sites internet. BPC GROUP n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-title">7. Droit applicable et juridiction compétente</h2>
          <p className="mb-4">
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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