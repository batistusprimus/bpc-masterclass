'use client';

import Image from "next/image";
import Link from 'next/link';
import Button from '@/components/Button';
import OptinForm from '@/components/OptinForm';
import LogoMarquee from '@/components/LogoMarquee';

type HomeTestimonial = {
  quote: string;
  detail: string;
  name: string;
  role: string;
  image?: string | null;
};

export default function Home() {
  return (
    <>
      {/* Header/Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-graph/10"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-block animate-fade-in px-4 py-2 sm:px-6 sm:py-3">
              <span className="px-4 py-2 rounded-full bg-button/10 border border-button/20 text-button text-sm sm:text-base font-medium">
                Masterclass Gratuite
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-title leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text animate-gradient px-4">
              Tu veux faire plus de cash en B2B ?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              On aide les solopreneurs B2B à construire un business structuré 
              qui tourne, qui scale et qui rapporte.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Tout ce qu'on fait pour nos clients à 10k, 30k ou 80k/mois, 
              on l'a mis dans une Masterclass. Gratuite. Sans inscription.
            </p>
            <div className="pt-4 sm:pt-6 md:pt-8">
              <Button href="/masterclass" size="lg" className="animate-bounce-subtle">
                Apprendre à Scaler
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modules Section */}
      <section className="section bg-primary relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-button/5 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
            <span className="text-button text-sm font-medium uppercase tracking-wider">9 Modules Gratuits</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-subtitle mt-4 mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Tu veux progresser ? Commence par là.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              9 modules. 9 façons d'avancer rapidement.
              Tu sélectionnes ce qui t'aide, et tu passes à l'action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4">
            {[
              {
                title: 'Mindset',
                description: 'Le mindset à adopter pour réussir',
                link: '/masterclass#0'
              },
              {
                title: 'Créer son offre irrésistible',
                description: "Tout commence ici. Cette phase est la base de tout. Si elle est mal exécutée, le reste du plan tombe à l'eau.",
                link: '/masterclass#1'
              },
              {
                title: "Toute l'acquisition",
                description: "Volume + Relations + Valeur = €. Tout ce dont tu as besoin pour trouver des prospects est ici.",
                link: '/masterclass#2'
              },
              {
                title: 'Newsletter & Communauté',
                description: "Crée une audience qui t'appartient",
                link: '/masterclass#3'
              },
              {
                title: 'Éduquer ses prospects',
                description: 'Avoir des utilisateurs éduqués',
                link: '/masterclass#4'
              },
              {
                title: "L'art de faire des VSL",
                description: 'Crée des vidéos de vente qui convertissent',
                link: '/masterclass#5'
              },
              {
                title: 'Cours de setting',
                description: 'Paramètre tous tes outils pour une efficacité maximale',
                link: '/masterclass#6'
              },
              {
                title: 'Tout pour closer en B2B',
                description: "Tout ce dont tu as besoin pour vendre à n'importe qui",
                link: '/masterclass#7'
              },
              {
                title: 'Satisfaire ses clients',
                description: 'Tout ce dont tu as besoin pour avoir des clients satisfaits',
                link: '/masterclass#8'
              }
            ].map((module, index) => (
              <Link 
                href="/masterclass"
                key={index}
                onClick={() => {
                  localStorage.setItem('selectedModuleId', index.toString());
                }}
                className="group relative bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden hover:border-button/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text group-hover:from-button group-hover:to-white transition-all duration-300">
                    {module.title}
                  </h3>
                  <span className="text-sm text-gray-500">Module {index}</span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {module.description}
                </p>

                <div className="flex items-center text-button text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Voir le module
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Form Optin Section */}
      <section id="optin" className="section bg-gradient-to-br from-primary via-button/5 to-graph/5 relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-button/10 rounded-full -mt-12 -mr-12 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-graph/10 rounded-full -mb-12 -ml-12 blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/5 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0">
              <div className="md:col-span-2 p-6 sm:p-8 md:p-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-button/20 to-graph/20 opacity-30"></div>
                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-subtitle mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    Tu veux savoir quoi faire maintenant ?
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                    Demande ta roadmap.
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    {[
                      "→ Plan sur-mesure",
                      "→ Priorités claires",
                      "→ Recos immédiates"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-base sm:text-lg">
                        <span className="text-button mr-2">•</span>
                        <span className="text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 sm:mt-8 p-4 bg-black/30 rounded-lg border border-white/10">
                    <p className="text-gray-300 text-sm sm:text-base">
                      Livrée gratuitement sous 24h.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 bg-black/60 p-6 sm:p-8 md:p-12">
                <OptinForm 
                  title="Obtiens ta roadmap personnalisée" 
                  subtitle="Laisse-nous tes coordonnées et reçois ta roadmap dans les 24h"
                  className="bg-transparent p-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-primary relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="text-button text-sm font-medium uppercase tracking-wider">Témoignages</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-subtitle mt-4 mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Ils nous font confiance
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Des centaines d'entrepreneurs B2B ont déjà transformé leur activité grâce à notre masterclass
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "+20 000€ générés dès le premier lancement avec un système de vente entièrement délégué",
                detail: "Tout a été mis en place sans que j'aie à lever le petit doigt : tunnel, mails, pub, VSL, prise de rendez-vous, setting, closing.",
                name: "Yann Grosjean",
                role: "CEO de Lugus",
                image: "/Yann Grosjean.jpeg"
              } as HomeTestimonial,
              {
                quote: "+300 000€ générés en 75 jours via une stratégie de contenu LinkedIn",
                detail: "On a lancé 35 posts en 75 jours. Résultat : +1,7M de vues, 4 posts viraux, +4000 abonnés, et plus de 300 000€ générés.",
                name: "Anaïs R.",
                role: "CEO de A&C",
                image: "/anais-remaoun.webp"
              } as HomeTestimonial,
              {
                quote: "+75% de rentabilité sur 6 mois sans recruter ni déléguer",
                detail: "Je voulais scaler sans sacrifier ma liberté. En quelques semaines, j'ai restructuré mes offres, internalisé l'acquisition, et lancé un système qui tourne.",
                name: "CEO anonyme",
                role: "prestataire B2B indépendant",
                image: null
              } as HomeTestimonial,
            ].map((testimonial, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-button/20 transition-colors duration-300">
                <div className="mb-6">
                  <div className="text-2xl font-bold text-button mb-4">{testimonial.quote}</div>
                  <p className="text-gray-300 italic">{testimonial.detail}</p>
                </div>
                <div className="flex items-center">
                  {testimonial.image ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-button to-graph rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gradient-to-br from-primary via-button/5 to-graph/5 relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="text-button text-sm font-medium uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-subtitle mt-4 mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Questions fréquentes
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Tout ce que tu dois savoir sur notre masterclass B2B.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "La masterclass est-elle vraiment gratuite ?",
                answer: "Oui, la masterclass est entièrement gratuite et accessible sans inscription préalable. Nous croyons en la diffusion du savoir pour aider les entrepreneurs B2B à se développer."
              },
              {
                question: "Combien de temps dure la masterclass ?",
                answer: "La masterclass complète est composée de 9 modules d'environ 30 minutes chacun. Tu peux les suivre à ton rythme, quand tu veux."
              },
              {
                question: "Est-ce que je recevrai un certificat ?",
                answer: "Nous ne délivrons pas de certificat officiel, mais tu peux recevoir une attestation de suivi sur demande après avoir complété l'ensemble des modules."
              },
              {
                question: "Comment obtenir ma roadmap personnalisée ?",
                answer: "Il te suffit de remplir le formulaire d'optin présent sur cette page. Tu recevras ta roadmap par email dans les 24 heures suivant ta demande."
              },
              {
                question: "Peut-on accéder à un accompagnement personnalisé ?",
                answer: "Absolument ! Nous proposons différentes formules d'accompagnement pour les entrepreneurs qui souhaitent aller plus loin. Tu peux en savoir plus en visitant notre page 'Incubateur'."
              }
            ].map((faq, index) => (
              <div key={index} 
                className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden hover:border-button/20 transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                    <div className="ml-6 mt-1">
                      <div className="w-8 h-8 rounded-full bg-button/10 border border-button/20 flex items-center justify-center">
                        <span className="text-button text-lg">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-primary to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-graph/10"></div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-button/10 border border-button/20 text-button text-sm sm:text-base font-medium mb-6 sm:mb-8">
              Prêt à transformer ton business ?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-subtitle mb-6 sm:mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">
              Passe à l&apos;action maintenant
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12">
              Ne laisse pas passer cette opportunité d&apos;accélérer ta croissance. 
              Rejoins notre masterclass gratuite dès aujourd&apos;hui.
            </p>
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              <Button href="/masterclass" size="lg" className="px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg">
                Accéder à la Masterclass
              </Button>
              <p className="text-xs sm:text-sm text-gray-400">
                100% gratuit • Accès immédiat • Sans engagement
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
