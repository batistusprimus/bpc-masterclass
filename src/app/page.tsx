'use client';

import Image from "next/image";
import Link from 'next/link';
import Button from '@/components/Button';
import RoadmapCTA from '@/components/RoadmapCTA';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type HomeTestimonial = {
  quote: string;
  detail: string;
  name: string;
  role: string;
  image?: string | null;
};

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Header/Hero Section - Simplified */}
      <section className="relative min-h-[calc(70vh-4rem)] flex items-center py-6 sm:py-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-button/10 via-transparent to-graph/10"></div>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-button/5 via-transparent to-graph/5 animate-pulse"></div>
          {/* Floating particles effect */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-button/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-graph/40 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-button/20 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center space-y-6 mb-6">
            {/* Badge with enhanced animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 sm:px-6 sm:py-3"
            >
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-button/20 to-graph/20 border border-button/30 text-button text-sm sm:text-base font-bold shadow-lg backdrop-blur-sm animate-pulse">
                ⭐ Groupe Privé
              </span>
            </motion.div>

            {/* Main title with enhanced styling */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-title leading-tight px-4"
            >
              <span className="bg-gradient-to-r from-white via-button to-white text-transparent bg-clip-text animate-gradient">
                Tu es ici pour faire plus de cash en B2B
              </span>
            </motion.h1>

            {/* Subtitle with enhanced styling */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 font-medium"
            >
              <span className="bg-gradient-to-r from-gray-300 to-button text-transparent bg-clip-text">
                Groupe privé pour le top 1% des Solopreneurs
              </span>
            </motion.p>
            
            {/* CTA Section with enhanced design */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              {/* Main CTA Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-button to-graph rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Button 
                  href="https://app.iclosed.io/e/baptistepiocelle/incubateur-bpc" 
                  size="lg" 
                  className="relative px-16 py-5 text-xl font-bold bg-gradient-to-r from-button to-graph hover:from-graph hover:to-button transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  🚀 Candidater maintenant
                </Button>
          </div>

              {/* Secondary link with enhanced styling */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <p className="text-gray-400 mb-3 text-lg">Avec qui tu vas travailler ?</p>
                <Link 
                  href="/catalogue/incubateur"
                  className="inline-flex items-center text-button hover:text-white transition-all duration-300 font-medium text-lg group"
                >
                  <span className="underline underline-offset-4 group-hover:underline-offset-8 transition-all duration-300">
                    Voir l'histoire de Baptiste avec des preuves
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent"></div>
      </section>
      
      {/* Ressources Gratuites Section */}
      <section className="section bg-gradient-to-br from-primary via-button/5 to-graph/5 relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-title mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Ressources gratuites
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Des dizaines d'heures de contenu, des centaines de process et des outils pour t'aider à grossir ton business en ligne, gratuitement et sans inscription.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Masterclass */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-button/30 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-button/20"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-button/20 to-graph/20 border border-button/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-button transition-colors duration-300">Masterclass</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">9 modules pour transformer ton business B2B</p>
            <Link 
              href="/masterclass"
                className="inline-flex items-center text-button hover:text-white transition-all duration-300 font-semibold group-hover:translate-x-2"
              >
                <span>Accéder gratuitement</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Créer son offre */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-button/30 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-button/20"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-button/20 to-graph/20 border border-button/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-2xl">💎</span>
                </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-button transition-colors duration-300">Créer son offre</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Module 1 - Construire une offre irrésistible</p>
              <Link 
                href="/masterclass/module1"
                className="inline-flex items-center text-button hover:text-white transition-all duration-300 font-semibold group-hover:translate-x-2"
              >
                <span>Voir le module</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Lancer un business à 1M/mois */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-button/30 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-button/20"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-button/20 to-graph/20 border border-button/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-button transition-colors duration-300">Lancer un business à 1M/mois</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Module 9 - Stratégies de scaling avancées</p>
              <Link 
                href="/masterclass/module9"
                className="inline-flex items-center text-button hover:text-white transition-all duration-300 font-semibold group-hover:translate-x-2"
              >
                <span>Voir le module</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Étude de cas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-button/30 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-button/20"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-button/20 to-graph/20 border border-button/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-button transition-colors duration-300">Étude de cas</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Comment faire 1.749.074 vues et 300 000€ en 75 jours et 35 posts</p>
              <a 
                href="https://youtu.be/UkYmi9HNdf4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-button hover:text-white transition-all duration-300 font-semibold group-hover:translate-x-2"
              >
                <span>Voir la vidéo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/masterclass"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-button/20 to-graph/20 border border-button/30 rounded-xl text-button hover:text-white transition-all duration-300 font-bold text-lg group hover:scale-105 hover:shadow-xl hover:shadow-button/20"
            >
              <span>Voir + de contenu gratuit</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Form Optin Section */}
      <section id="optin" className="section bg-gradient-to-br from-primary via-button/5 to-graph/5 relative overflow-hidden py-8 sm:py-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-subtitle mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                Accélère ta croissance B2B
              </h2>
              <p className="text-base sm:text-lg text-gray-300">
                Reçois ta roadmap personnalisée en 2 minutes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Colonne de gauche - Avantages */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-button/10 border border-button/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Plan sur-mesure pour ton business</p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-button/10 border border-button/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Actions concrètes à mettre en place</p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-button/10 border border-button/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Livrée en 2 minutes</p>
                </div>
              </div>

              {/* Colonne de droite - CTA */}
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-button/20 p-6 sm:p-8 transform hover:scale-[1.02] transition-all duration-300">
                <RoadmapCTA className="h-full" />
              </div>
            </div>

            {/* Preuve sociale */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Déjà +2.000 entrepreneurs formés • 98% de satisfaction
              </p>
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
              <div 
                key={index} 
                className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden hover:border-button/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 md:p-8 flex items-start justify-between group"
                >
                  <h3 className="text-xl font-bold text-left bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text group-hover:from-button group-hover:to-white transition-all duration-300">
                    {faq.question}
                  </h3>
                  <div className="ml-6 mt-1 flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full bg-button/10 border border-button/20 flex items-center justify-center transition-transform duration-300 ${openFaqIndex === index ? 'rotate-45' : ''}`}>
                      <span className="text-button text-lg">+</span>
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary via-button/5 to-graph/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
        </div>

        <div className="container-custom relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Colonne de gauche - Avantages */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-button/10 border border-button/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <p className="text-gray-300">9 modules structurés pour transformer ton business</p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-button/10 border border-button/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Accès immédiat et gratuit</p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-button/10 border border-button/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Sans engagement</p>
                </div>
              </div>

              {/* Colonne de droite - CTA */}
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-button/20 p-6 sm:p-8 transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-center space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    Passe à l&apos;action maintenant
                  </h2>
                  <p className="text-gray-300">
                    Ne laisse pas passer cette opportunité d&apos;accélérer ta croissance. 
                    Rejoins notre masterclass gratuite dès aujourd&apos;hui.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button href="/masterclass" size="lg" className="w-full px-8 py-4 text-lg">
                      Accéder à la Masterclass
                    </Button>
                    <Link
                      href="/contact"
                      className="btn-outline w-full px-8 py-4 text-lg text-center"
                    >
                      Réserver un appel de diagnostic
                    </Link>
                  </div>
                  <p className="text-sm text-gray-400">
                    100% gratuit • Accès immédiat • Sans engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
