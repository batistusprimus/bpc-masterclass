'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Icônes SVG pour les stats
const StatsIcons = {
  time: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  rocket: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 16.5C-0.5 13.5 0.5 5.5 0.5 5.5C0.5 5.5 8.5 4.5 11.5 9.5L12 10.5L13 11L18 6C18 6 19 12 16 15C13 18 12 18.5 12 18.5C12 18.5 11 19.5 9 21.5C7 23.5 5 22.5 4.5 22C4 21.5 4.5 16.5 4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 21.5C9.5 21.5 9 17.5 12 14.5C15 11.5 19 11 19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 10.5V18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  growth: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    if (document.getElementById('iclosed-widget-script')) return;
    const script = document.createElement('script');
    script.id = 'iclosed-widget-script';
    script.src = 'https://app.iclosed.io/assets/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Real client avatars
  const clients = [
    { name: "Samantha Piat", avatar: "/Samantha%20Piat.jpeg" },
    { name: "Stevy", avatar: "/Stevy.png" },
    { name: "Jean Michel Ly", avatar: "/jean_michel_ly_v2.png" },
    { name: "Joris Genty", avatar: "/Joris%20Genty.jpeg" },
    { name: "Giacomo Genna", avatar: "/Giacomo%20Genna.jpeg" },
    { name: "Floriane Bobée", avatar: "/Floriane%20Bob%C3%A9e.jpeg" },
    { name: "Caroline Rousset", avatar: "/Caroline%20rousset.jpg" },
    { name: "Axelle Guer", avatar: "/Axelle%20Guer%20.jpeg" },
    { name: "Arthur", avatar: "/Arthur.png" },
    { name: "Adrien", avatar: "/Adrien.png" },
    { name: "Jean", avatar: "/Jean.png" },
    { name: "Paul", avatar: "/Paul.webp" },
    { name: "Anais Remaoun", avatar: "/anais-remaoun.webp" }
  ];

  // Helper to handle image error fallback
  const [erroredAvatars, setErroredAvatars] = useState<{[key:string]:boolean}>({});
  const handleImgError = (name:string) => {
    console.log(`Error loading image for ${name}`);
    setErroredAvatars(e => ({...e, [name]:true}));
  };

  // Component for client avatar with fallback
  const ClientAvatar = ({ client, index }: { client: typeof clients[0], index: number }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 ${erroredAvatars[client.name] ? 'border-red-500' : 'border-white/10'} overflow-hidden bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center`}
      style={{ minWidth: 40, minHeight: 40 }}
    >
      {!erroredAvatars[client.name] ? (
        <Image
          src={client.avatar}
          alt={client.name}
          width={48}
          height={48}
          className="object-cover rounded-full"
          onError={() => handleImgError(client.name)}
          unoptimized
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white font-medium text-sm bg-gradient-to-br from-button/20 to-button/10 rounded-full">
          {client.name.charAt(0)}
        </div>
      )}
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-primary to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-button/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Client Avatars Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="relative flex -space-x-4">
                  {clients.slice(0, 8).map((client, index) => (
                    <ClientAvatar key={index} client={client} index={index} />
                  ))}
                  {clients.length > 8 && (
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-sm font-medium">+200</span>
                    </div>
                  )}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-full px-6 py-2 border border-white/10 inline-block">
                  <p className="text-sm md:text-base text-gray-300">
                    <span className="text-white font-medium">Diagnostic gratuit et sans engagement</span> pour accélérer ta croissance
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
            >
              Accélère ton Business B2B
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            >
              Un diagnostic personnalisé de 45 minutes pour identifier tes opportunités de croissance et booster ton business
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <a
                href="https://app.iclosed.io/e/baptistepiocelle/diagnostic-b2b"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-button text-white rounded-xl font-medium hover:bg-button/90 transition-all duration-200 text-lg shadow-lg shadow-button/20 hover:shadow-xl hover:shadow-button/30 hover:-translate-y-0.5"
              >
                Réserve ton diagnostic gratuit
              </a>
              <span className="text-gray-400">ou</span>
              <a
                href="#diagnostic"
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-200 text-lg backdrop-blur-sm"
              >
                En savoir plus
              </a>
            </motion.div>

            {/* Stats in hero section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12"
            >
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 max-w-3xl mx-auto">
                {[
                  { 
                    number: "45", 
                    label: "minutes d'analyse", 
                    icon: StatsIcons.time
                  },
                  { 
                    number: "3x", 
                    label: "croissance moyenne", 
                    icon: StatsIcons.growth
                  },
                  { 
                    number: "100%", 
                    label: "gratuit", 
                    icon: StatsIcons.check
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="text-button group-hover:text-white transition-colors duration-200">
                      {stat.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-bold text-white group-hover:text-button transition-colors duration-200">{stat.number}</span>
                      <span className="text-xs md:text-sm text-gray-300 group-hover:text-white/80 transition-colors duration-200">{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-button/10 via-transparent to-transparent opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2.5 rounded-full bg-button/10 text-button text-sm font-medium mb-6 tracking-wide"
            >
              Pourquoi un diagnostic ?
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-tight"
            >
              Transforme ton business en 45 minutes
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Un diagnostic stratégique pour identifier tes leviers de croissance et passer à l'action
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Analyse Stratégique",
                description: "Une vision claire de ton positionnement et de tes opportunités de croissance",
                icon: "🎯",
                color: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Plan d'Action",
                description: "Une feuille de route concrète pour atteindre tes objectifs rapidement",
                icon: "📈",
                color: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "Accompagnement",
                description: "Un suivi personnalisé pour maximiser tes chances de succès",
                icon: "💡",
                color: "from-pink-500/20 to-orange-500/20"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative p-8 md:p-10 transition-all duration-300 hover:translate-y-[-4px]">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-button/20 to-button/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-12 h-12 flex items-center justify-center bg-button/10 rounded-full border border-button/20 group-hover:border-button/30 transition-colors duration-300">
                          <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-button transition-colors duration-300">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                      {benefit.description}
                    </p>
                    <div className="space-y-4">
                      {[
                        "Analyse de ton marché",
                        "Évaluation de ton positionnement",
                        "Identification des points forts"
                      ].map((detail, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                          className="flex items-center gap-3 text-gray-300 group-hover:text-white/80 transition-colors duration-300"
                        >
                          <span className="text-button group-hover:text-white transition-colors duration-300">→</span>
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-button/10 via-transparent to-transparent opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-button/10 text-button text-sm font-medium mb-4">
              Simple et efficace
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300">
              Un processus en 4 étapes pour transformer ton business
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-button/20 via-button/30 to-button/20 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Réservation",
                  description: "Réserve ton créneau de 45 minutes en quelques clics",
                  icon: "📅",
                  color: "from-blue-500/20 to-purple-500/20"
                },
                {
                  step: "02",
                  title: "Questionnaire",
                  description: "Remplis le questionnaire directement lors de la réservation pour préparer notre échange",
                  icon: "📝",
                  color: "from-purple-500/20 to-pink-500/20"
                },
                {
                  step: "03",
                  title: "Diagnostic",
                  description: "Échange approfondi sur ton business et tes objectifs de croissance",
                  icon: "🎯",
                  color: "from-pink-500/20 to-orange-500/20"
                },
                {
                  step: "04",
                  title: "Plan d'Action",
                  description: "Reçois un rapport détaillé avec tes recommandations personnalisées",
                  icon: "📈",
                  color: "from-orange-500/20 to-yellow-500/20"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`} />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-button/20 to-button/10 rounded-full blur-md" />
                        <div className="relative w-12 h-12 flex items-center justify-center bg-button/10 rounded-full border border-button/20">
                          <span className="text-2xl">{step.icon}</span>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-button mb-2">Étape {step.step}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Form Section */}
      <section id="diagnostic" className="py-20 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-button/10 via-transparent to-transparent opacity-30" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
        
        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 rounded-full bg-button/10 text-button text-sm font-medium">
                  Diagnostic gratuit
                </span>
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                  Réserve ton diagnostic gratuit
                </h2>
                <p className="text-xl text-gray-300">
                  Un appel de 45 minutes pour transformer ton business
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "⏱️", text: "45 minutes" },
                    { icon: "🎯", text: "100% personnalisé" },
                    { icon: "💡", text: "Sans engagement" },
                    { icon: "📈", text: "Résultats concrets" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                    >
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-gray-300 font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 text-gray-300">
                  <p className="text-lg font-medium">
                    Ce que tu vas obtenir :
                  </p>
                  <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                      <span className="text-button text-xl mt-1">•</span>
                      <span>Une analyse détaillée de ton business model et de ton marché</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <span className="text-button text-xl mt-1">•</span>
                      <span>L'identification de tes points de blocage et de tes opportunités de croissance</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <span className="text-button text-xl mt-1">•</span>
                      <span>Une stratégie de croissance adaptée à tes objectifs</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <span className="text-button text-xl mt-1">•</span>
                      <span>Des solutions concrètes pour accélérer ton développement</span>
                  </li>
                </ul>
                </div>

                <div className="pt-4">
                  <div className="bg-button/10 rounded-xl p-4 border border-button/20">
                    <p className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-button text-lg">💡</span>
                      <span>Le diagnostic est 100% gratuit et sans engagement. C'est l'occasion parfaite pour échanger sur ton business et découvrir comment je peux t'aider à atteindre tes objectifs.</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl min-h-[620px]">
                <div
                  id="iclosed-widget-container"
                  className="iclosed-widget"
                  data-url="https://app.iclosed.io/e/baptistepiocelle/diagnostic-b2b"
                  title="Diagnostic B2B"
                  style={{ width: "100%", height: "620px" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-button/10 via-transparent to-transparent opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-button/10 text-button text-sm font-medium mb-4">
                Questions fréquentes
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                Tout ce que tu dois savoir
              </h2>
              <p className="text-xl text-gray-300">
                Des réponses claires à tes questions
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Combien de temps dure le diagnostic ?",
                  answer: "Le diagnostic dure 45 minutes. C'est le temps idéal pour analyser en profondeur ton business et identifier tes opportunités de croissance."
                },
                {
                  question: "Le diagnostic est-il vraiment gratuit ?",
                  answer: "Oui, le diagnostic est 100% gratuit et sans engagement. C'est une opportunité pour toi de découvrir comment je peux t'aider à développer ton business."
                },
                {
                  question: "Qui va réaliser le diagnostic ?",
                  answer: "Le diagnostic est réalisé par Baptiste Piocelle, expert en développement commercial B2B. J'accompagne plus de 100 entreprises dans leur croissance."
                },
                {
                  question: "Que vais-je recevoir après le diagnostic ?",
                  answer: "Tu recevras un rapport détaillé avec l'analyse de ton business, tes opportunités de croissance identifiées et un plan d'action personnalisé."
                },
                {
                  question: "Comment se déroule le diagnostic ?",
                  answer: "Le diagnostic se déroule en visioconférence. Après la réservation, tu recevras un lien de connexion. Nous échangerons pendant 45 minutes sur ton business, tes objectifs et tes challenges actuels."
                },
                {
                  question: "Quand vais-je recevoir le rapport ?",
                  answer: "Tu recevras ton rapport détaillé dans les 48h suivant le diagnostic. Il contiendra toutes les analyses et recommandations personnalisées pour accélérer ta croissance."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <span className={`text-2xl text-button transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <div 
                    className={`grid transition-all duration-200 ease-in-out ${
                      openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-4 text-gray-300">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-button/20 via-transparent to-transparent opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[100px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-button to-transparent opacity-50" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-button/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-button/20 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="text-center space-y-8">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-2 rounded-full bg-button/10 text-button text-sm font-medium">
                      Prêt à passer à l'action ?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                      Accélère ta croissance dès maintenant
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      Réserve ton diagnostic gratuit et découvre comment transformer ton business B2B en 45 minutes
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                    {[
                      { icon: "🎯", text: "Diagnostic personnalisé" },
                      { icon: "⚡", text: "Résultats rapides" },
                      { icon: "🚀", text: "Croissance accélérée" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                      >
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="text-gray-300 font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="https://app.iclosed.io/e/baptistepiocelle/diagnostic-b2b"
                target="_blank"
                rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-button text-white rounded-xl font-medium hover:bg-button/90 transition-all duration-200 text-lg shadow-lg shadow-button/20 hover:shadow-xl hover:shadow-button/30 hover:-translate-y-0.5"
                    >
                      Réserve ton diagnostic gratuit
                    </a>
                    <span className="text-gray-400">ou</span>
                    <a
                      href="#diagnostic"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-200 text-lg backdrop-blur-sm"
                    >
                      En savoir plus
                    </a>
                  </div>

                  <p className="text-sm text-gray-400 pt-4">
                    💡 Le diagnostic est 100% gratuit et sans engagement. C'est l'occasion parfaite pour échanger sur ton business.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 