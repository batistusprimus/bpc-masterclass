'use client';

import Button from "@/components/Button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Testimonials from "@/components/Testimonials";

// Ajout des constantes de style pour la cohérence
const sectionStyles = {
  base: "py-24", // Augmentation de l'espacement vertical pour plus de respiration
  dark: "bg-gray-900",
  light: "bg-primary"
};

// Mise à jour des constantes de style pour la typographie
const containerStyles = {
  base: "container-custom max-w-4xl mx-auto",
  text: "text-lg md:text-xl text-gray-300 leading-relaxed font-normal",
  heading: "text-2xl md:text-3xl font-bold text-white mb-8",
  subheading: "text-xl md:text-2xl font-medium text-button mb-6",
  emphasis: "text-xl md:text-2xl font-medium text-white",
  highlight: "text-xl md:text-2xl font-bold text-button"
};

const cardStyles = {
  base: "bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30",
  accent: "border-button/30",
  warning: "border-red-500/30"
};

const animationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export default function StarterPage() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 heures en secondes
  const [lightbox, setLightbox] = useState<string|null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 24 * 60 * 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="w-full md:w-auto max-w-full flex justify-center">
          <div className="bg-primary/95 backdrop-blur-sm border-t border-button/30 shadow-lg flex-1 md:flex-none flex items-center justify-between gap-2 md:gap-4 px-2 py-2 md:px-6 md:py-4 rounded-t-xl md:rounded-t-none max-w-xs w-[95vw] md:max-w-none pointer-events-auto">
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-button font-bold tracking-wider text-sm md:text-base">STARTER</span>
              <span className="text-gray-300 text-sm md:text-base">Système de vente B2B en 7 jours</span>
            </div>
            <Button 
              href="https://buy.stripe.com/5kAcNB6Y16zZ7wQeV7" 
              size="sm"
              className="group relative overflow-hidden shadow-lg hover:shadow-button/20 transition-all duration-300 text-xs md:text-sm px-3 py-2 md:px-5 md:py-2"
            >
              <span className="relative z-10">Oui je veux ce système</span>
              <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* 1. Big Promise Brutale */}
      <section className={`${sectionStyles.base} ${sectionStyles.light} relative min-h-[75vh] flex items-center justify-center pt-8 md:pt-32 pb-12 md:pb-20`}>
        {/* Background simplifié */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-button/5 via-transparent to-transparent"></div>
        </div>

        <div className={containerStyles.base}>
          <div className="max-w-3xl mx-auto text-center relative">
            <motion.div
              className="mb-2 md:mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-button/10 rounded-full text-button text-sm md:text-base font-medium tracking-wide">
                SYSTÈME DE VENTE B2B EN 7 JOURS
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-tight tracking-tight"
            >
              Tu veux vraiment passer les 6 prochains mois à bidouiller pendant que d'autres signent 5k€/mois avec un système que je leur ai filé en 7 jours ?
            </motion.h1>
            
            <motion.div
              className="space-y-3 md:space-y-6 mb-6 md:mb-12"
            >
              <p className="text-base md:text-lg text-gray-400 italic font-normal max-w-2xl mx-auto">
                Tu veux des clients, ou tu veux encore "travailler sur ton branding" ?
              </p>

              <p className="max-w-2xl mx-auto font-bold text-button text-lg md:text-2xl bg-button/10 border border-button/20 rounded-xl px-4 py-3 shadow-sm">
                Ce Starter, c'est un raccourci. Pas une énième formation.<br />
                Tu l'actives aujourd'hui → t'as des leads dans 7 jours.
              </p>
            </motion.div>

            <motion.div
            >
              <Button 
                href="https://buy.stripe.com/5kAcNB6Y16zZ7wQeV7" 
                size="lg"
                className="group relative overflow-hidden shadow-lg hover:shadow-button/20 transition-all duration-300 px-6 md:px-8 py-3 md:py-4"
              >
                <span className="relative z-10 font-medium text-base md:text-lg">→ Oui, je veux un système qui me ramène des clients cette semaine</span>
                <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Proof Stack */}
      <section className={`${sectionStyles.base} ${sectionStyles.dark} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <div className="space-y-6">
              <motion.p
                className={containerStyles.emphasis}
              >
                Écoute-moi bien.
              </motion.p>

              <motion.p
                className={containerStyles.text}
              >
                J'ai déjà aidé <span className="text-button font-medium">237 freelances</span> à installer leur machine d'acquisition en 7 jours.
              </motion.p>

              <motion.p
                className={containerStyles.highlight}
              >
                Pas en 6 mois. Pas en 1 an. En 7 putains de jours.
              </motion.p>

              <motion.div
                className="space-y-4"
              >
                <p className={containerStyles.text}>
                  Certains ont signé leurs premiers <span className="text-button font-medium">5.000€</span> en 10 jours après installation.
                </p>
                <p className={containerStyles.text}>
                  D'autres sont montés à <span className="text-button font-medium">20.000€/mois</span> avec exactement les mêmes outils que je vais te donner.
                </p>
              </motion.div>

              <motion.p
                className={containerStyles.highlight}
              >
                Voici ce que ça donne concrètement :
              </motion.p>

              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 py-4">
                {[
                  '/52ca1aef-3987-40bd-ba8f-f17c23089204.png',
                  '/f9c46e64-1604-4daf-8264-6e96a8fade03.png',
                  '/Baptiste Piocelle (1) (2).png',
                  '/Screen Freebe (1) (4).png',
                ].map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Screenshot compte en banque ${idx + 1}`}
                    className="max-w-full h-auto w-auto object-contain"
                    style={{ maxHeight: '340px' }}
                  />
                ))}
              </div>

              <motion.p
                className={containerStyles.emphasis}
              >
                Alors maintenant, tu as deux options :
              </motion.p>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
              >
                <div className={`${cardStyles.base} ${cardStyles.warning} hover:border-red-500/50 transition-colors duration-300`}>
                  <p className="text-red-500 font-bold mb-2">Option 1</p>
                  <p className={containerStyles.text}>Continuer à te raconter des histoires.</p>
                </div>
                <div className={`${cardStyles.base} ${cardStyles.accent} hover:border-button/50 transition-colors duration-300`}>
                  <p className="text-button font-bold mb-2">Option 2</p>
                  <p className={containerStyles.text}>Installer un système qui fonctionne.</p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
              >
                <p className={containerStyles.highlight}>
                  Voici comment Léon a signé +2K en 3 semaines.
                </p>
                <div className={`${cardStyles.base} ${cardStyles.accent} p-8`}>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/K2YsABjkRiE"
                      title="Témoignage de Léon"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Lettre ouverte */}
      <section className={`${sectionStyles.base} ${sectionStyles.light} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className={containerStyles.base}>
          <div className="max-w-[700px] mx-auto relative">
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm px-5 md:px-10 py-8 md:py-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-8 text-center tracking-tight">LETTRE OUVERTE À CELUI QUI RAME</h2>
              <div className="space-y-8">
                <p className="italic text-lg md:text-xl text-gray-800 font-semibold text-center">Je vais être cash avec toi.</p>
                <div className="space-y-4">
                  <p className="text-[#222] text-lg md:text-xl leading-relaxed">
                    Tu sais bosser. T'as de l'expertise. T'es pas un touriste.
                  </p>
                  <p className="font-bold text-lg md:text-xl leading-relaxed text-black">
                    Mais tu fais comme 95% des indépendants : tu confonds activité et business.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[#222] text-lg md:text-xl leading-relaxed">
                    Tu postes, tu replies à deux DM, tu fais le mec sérieux.
                  </p>
                  <p className="text-[#222] text-lg md:text-xl leading-relaxed">
                    Mais chaque matin, tu t'assois devant ton ordi en espérant qu'un prospect pense à toi.
                  </p>
                  <p className="text-[#222] text-lg md:text-xl leading-relaxed">
                    Tu check tes mails, tu refresh LinkedIn, tu regardes si un like peut se transformer en appel.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[#222] text-lg md:text-xl leading-relaxed">
                    T'as pas de tunnel. Pas de CRM. Pas de plan. Juste ta bonne volonté et deux potes qui te recommandent une fois de temps en temps.
                  </p>
                  <p className="font-bold text-lg md:text-xl leading-relaxed text-black">
                    T'appelles ça un business ? Moi j'appelle ça de la survie.
                  </p>
                </div>
                <p className="font-bold text-lg md:text-xl text-center leading-relaxed text-black">
                  Et tu recommences, mois après mois. Comme si l'univers allait soudainement t'envoyer 10k.
                </p>
                <div className="space-y-6">
                  <p className="font-bold text-lg md:text-xl text-center leading-relaxed text-black">
                    T'as de la valeur, oui. Mais ton expertise ne vaut rien sans système.
                  </p>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                    <p className="font-bold text-lg md:text-xl mb-3 text-black">
                      Un vrai business, ça :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-black">→</span>
                        <span className="text-[#222] text-lg">Ça attire.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-black">→</span>
                        <span className="text-[#222] text-lg">Ça convertit.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-black">→</span>
                        <span className="text-[#222] text-lg">Ça relance sans toi.</span>
                      </li>
                    </ul>
                  </div>
                  <p className="font-bold text-lg md:text-xl text-center leading-relaxed text-black">
                    Et c'est exactement ce que je vais t'installer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. L'erreur fatale */}
      <section className={`${sectionStyles.base} ${sectionStyles.dark} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-red-500 text-center mb-12"
            >
              L'ERREUR FATALE QUE FONT 95% DES FREELANCES
            </motion.h2>

            <motion.div
              className="space-y-6"
            >
              <div className={`${cardStyles.base} ${cardStyles.warning} p-8`}>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-red-500 font-medium text-2xl">→</span>
                    <p className={containerStyles.text}>Tu vends ton temps, pas un système.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-red-500 font-medium text-2xl">→</span>
                    <p className={containerStyles.text}>Tu veux des clients, mais t'as pas de machine pour les attirer.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-red-500 font-medium text-2xl">→</span>
                    <p className={containerStyles.text}>Tu consommes des formations comme des séries Netflix, mais t'exécutes rien.</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.p
              className={containerStyles.highlight}
            >
              Et c'est exactement pour ça que t'es coincé à 2 ou 3K par mois, à courir après des clients qui te respectent pas et qui négocient tes tarifs.
            </motion.p>

            <motion.div 
              className="space-y-6"
            >
              <p className={containerStyles.text}>
                Pendant ce temps, d'autres freelances, pas plus intelligents que toi, signent des contrats de <span className="text-button font-medium">5 à 10K</span> sans lever le petit doigt.
              </p>
              <p className={containerStyles.emphasis}>
                La différence ? Ils ont un système. Pas toi.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Voici ce que j'ai créé */}
      <section className={`${sectionStyles.base} ${sectionStyles.light} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className={containerStyles.heading}
            >
              Voici ce que j'ai créé pour les mecs comme toi
            </motion.h2>

            <div className="space-y-8">
              <motion.p
                className={containerStyles.text}
              >
                J'ai pris tout ce que j'installe pour mes clients à 5 chiffres… et je l'ai packagé pour les mecs qui veulent aller vite.
              </motion.p>

              <motion.p
                className={containerStyles.highlight}
              >
                Pas réfléchir. Exécuter.
              </motion.p>

              <motion.div
                className={`${cardStyles.base} ${cardStyles.accent} p-8`}
              >
                <p className={containerStyles.highlight}>
                  Ce pack n'est pas fait pour réfléchir. Il est fait pour AGIR.
                </p>
                <p className={`${containerStyles.text} mb-6`}>
                  En 7 jours, tu montes une machine qui fait le taf à ta place :
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <p className={containerStyles.text}>Une offre claire que tu peux pitcher en 2 phrases — ou qui fait bander tes prospects.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <p className={containerStyles.text}>Un tunnel GHL qui tourne pendant que tu dors.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <p className={containerStyles.text}>Un CRM qui suit et relance automatiquement.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <p className={containerStyles.text}>Une séquence qui close sans que tu aies à supplier.</p>
                  </li>
                </ul>
              </motion.div>

              <motion.p
                className={containerStyles.emphasis}
              >
                Tout est guidé. Tout est prêt.
              </motion.p>

              <motion.div
                className="space-y-6"
              >
                <p className={containerStyles.text}>
                  Prix ? <span className="text-button font-medium">99€</span>. Une fois. Pas d'abonnement. Pas de piège. Juste une installation express.
                </p>
                <p className={containerStyles.highlight}>
                  Tu veux quoi de plus ? Que je t'amène les clients en trottinette ?
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Ce que tu reçois */}
      <section className={`${sectionStyles.base} ${sectionStyles.dark} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className={containerStyles.heading}
            >
              CE QUE TU REÇOIS (BRUT ET CONCRET)
            </motion.h2>

            <motion.p
              className={`${containerStyles.text} text-center mb-12`}
            >
              Voilà exactement ce que tu obtiens quand tu cliques sur ce bouton :
            </motion.p>

            <motion.div
              className="space-y-6"
            >
              <div className={`${cardStyles.base} ${cardStyles.accent} p-8`}>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <div>
                      <p className="font-medium text-white mb-1">Une offre claire comme de l'eau de roche</p>
                      <p className={containerStyles.text}>Tu ne bégaieras plus jamais quand quelqu'un te demande ce que tu fais.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <div>
                      <p className="font-medium text-white mb-1">Une séquence de prospection qui vend</p>
                      <p className={containerStyles.text}>Fini les messages pathétiques du type "Salut, tu vas bien ? On pourrait échanger ?"</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <div>
                      <p className="font-medium text-white mb-1">Un CRM automatisé</p>
                      <p className={containerStyles.text}>Tu bosses pendant que ton système relance tes prospects tièdes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <div>
                      <p className="font-medium text-white mb-1">50+ templates Notion & Go High Level</p>
                      <p className={containerStyles.text}>Des assets prêts à l'emploi que tu peux copier-coller.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <div>
                      <p className="font-medium text-white mb-1">Accès à notre Discord privé</p>
                      <p className={containerStyles.text}>T'es pas tout seul dans cette aventure.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <div>
                      <p className="font-medium text-white mb-1">Mises à jour à vie</p>
                      <p className={containerStyles.text}>Le système évolue, tu évolues avec.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={`${cardStyles.base} ${cardStyles.warning} p-8`}>
                <p className={containerStyles.highlight}>
                  BONUS
                </p>
                <p className={containerStyles.text}>
                  Exercices guidés + fiches PDF pour accélérer ton implémentation.
                </p>
              </div>

              <motion.div
                className={`${cardStyles.base} ${cardStyles.accent} p-8`}
              >
                <p className={`${containerStyles.highlight} mb-4`}>
                  Voici à quoi ressemble l'intérieur du produit :
                </p>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400 italic">[SCREENSHOT DE L'INTÉRIEUR DU PRODUIT]</p>
                </div>
              </motion.div>

              <motion.p
                className={`${containerStyles.highlight} text-center`}
              >
                Et tout ça pour 99€. Le prix d'une soirée au restaurant que tu vas oublier demain.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. Pourquoi ce système marche */}
      <section className={`${sectionStyles.base} ${sectionStyles.light} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className={containerStyles.heading}
            >
              POURQUOI CE SYSTÈME MARCHE (ET MARCHE VITE)
            </motion.h2>

            <motion.p
              className={`${containerStyles.highlight} text-center mb-12`}
            >
              Ce n'est pas de la magie. C'est de la mécanique pure.
            </motion.p>

            <motion.div
              className="space-y-6"
            >
              <div className={`${cardStyles.base} ${cardStyles.accent} p-8`}>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <div>
                      <p className="font-medium text-white mb-2">Il te force à clarifier ton positionnement</p>
                      <p className={containerStyles.text}>Tu parles enfin à la bonne cible, celle qui a de l'argent et des problèmes que tu peux résoudre.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <div>
                      <p className="font-medium text-white mb-2">Il t'équipe avec les bons outils</p>
                      <p className={containerStyles.text}>Plus de temps perdu à chercher "comment faire un tunnel" ou "quel CRM choisir".</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <div>
                      <p className="font-medium text-white mb-2">Il te pousse à exécuter, pas réfléchir</p>
                      <p className={containerStyles.text}>Tout est plug-and-play. Tu suis le plan, tu installes, tu lances.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-button font-medium text-2xl">→</span>
                    <div>
                      <p className="font-medium text-white mb-2">Il t'installe une routine quotidienne</p>
                      <p className={containerStyles.text}>Ton acquisition devient prévisible, pas aléatoire.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <motion.p
                className={containerStyles.emphasis}
              >
                Pas besoin d'avoir du talent. Juste de suivre le plan.
              </motion.p>

              <motion.div
                className={`${cardStyles.base} ${cardStyles.warning} p-8`}
              >
                <p className={containerStyles.text}>
                  La vérité, c'est que la plupart des freelances échouent non pas par manque de compétence, mais par manque de système. Ils improvisent leur acquisition comme un gamin de 5 ans improvise au piano.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. ILS ONT SUIVI LE PLAN, VOICI CE QU'ILS EN DISENT */}
      <section className={`${sectionStyles.base} ${sectionStyles.light} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className={containerStyles.heading}
            >
              ILS ONT SUIVI LE PLAN, VOICI CE QU'ILS EN DISENT
            </motion.h2>
            <Testimonials />
          </motion.div>
        </div>
      </section>

      {/* 9. Jour par jour */}
      <section className={`${sectionStyles.base} ${sectionStyles.dark} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className={containerStyles.heading}
            >
              JOUR PAR JOUR : TON PLAN D'ACTION STARTER
            </motion.h2>

            <motion.p
              className={`${containerStyles.text} text-center mb-12`}
            >
              Voici exactement ce que tu fais pendant les 7 jours :
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                {
                  day: "Jour 1",
                  title: "Clarification du positionnement",
                  description: "Tu clarifie ton positionnement + ton offre. Fini le flou artistique."
                },
                {
                  day: "Jour 2",
                  title: "Séquence de prospection",
                  description: "Tu construis ta séquence de prospection qui fait mouche à chaque fois."
                },
                {
                  day: "Jour 3",
                  title: "Installation du tunnel",
                  description: "Tu installes ton tunnel GHL (landing page + calendrier) qui convertit pendant ton sommeil."
                },
                {
                  day: "Jour 4",
                  title: "Configuration du CRM",
                  description: "Tu paramètres ton CRM de suivi pour ne plus jamais perdre un lead chaud."
                },
                {
                  day: "Jour 5",
                  title: "Automatisation",
                  description: "Tu intègres les templates Notion + outils d'automatisation pour gagner 10h par semaine."
                },
                {
                  day: "Jour 6",
                  title: "Routine d'acquisition",
                  description: "Tu structures ta routine quotidienne d'acquisition. 30 minutes par jour, pas plus."
                },
                {
                  day: "Jour 7",
                  title: "Lancement",
                  description: "Tu lances et tu vois arriver tes premiers leads entrants. Sans supplier. Sans mendier."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`${cardStyles.base} ${cardStyles.accent} hover:border-button/50 transition-all duration-300 hover:transform hover:scale-[1.02]`}
                >
                  <div className="flex flex-col h-full">
                    <div className="text-button font-medium text-xl mb-3">{item.day}</div>
                    <div className="font-medium text-white mb-2">{item.title}</div>
                    <div className={containerStyles.text}>{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className={`${cardStyles.base} ${cardStyles.warning} mt-8 p-8 text-center`}
            >
              <p className={containerStyles.emphasis}>
                C'est mécanique. C'est prévisible. C'est ce qui fait la différence entre un amateur et un pro.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 10. Dans 30 jours */}
      <section className={`${sectionStyles.base} ${sectionStyles.light} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              DANS 30 JOURS, TA RÉALITÉ PEUT RESSEMBLER À ÇA :
            </motion.h2>

            <motion.p
              className="text-2xl font-bold text-button text-center mb-12"
            >
              Imagine un instant.
            </motion.p>

            <motion.div
              className={`${cardStyles.base} ${cardStyles.accent} p-8`}
            >
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <span className="text-button font-bold text-2xl">→</span>
                  <p className={containerStyles.text}>Tu ouvres ton ordinateur le matin et tu as déjà <span className="text-white font-bold">3 leads chauds</span> qui attendent dans ton CRM.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-button font-bold text-2xl">→</span>
                  <p className={containerStyles.text}>Ton tunnel close des prospects pendant que tu es à la salle de sport.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-button font-bold text-2xl">→</span>
                  <p className={containerStyles.text}>Tu sais exactement quoi faire chaque jour pour faire grandir ton business.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-button font-bold text-2xl">→</span>
                  <p className={containerStyles.text}>Tu choisis les clients avec qui tu veux bosser, pas l'inverse.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-button font-bold text-2xl">→</span>
                  <p className={containerStyles.text}>Tu gagnes plus en travaillant moins, parce que ton système fait le boulot à ta place.</p>
                </li>
              </ul>
            </motion.div>

            <motion.p
              className="text-2xl font-bold text-white text-center"
            >
              Tout ça commence avec 7 jours d'exécution. Le reste, c'est une question de répétition.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 11. Questions fréquentes */}
      <section className={`${sectionStyles.base} ${sectionStyles.dark} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              TU TE POSES SÛREMENT CES QUESTIONS :
            </motion.h2>

            <motion.div
              className="space-y-6"
            >
              {[
                {
                  question: "Je suis pas sûr d'avoir le temps...",
                  answer: "T'as 1h par jour ? C'est suffisant. Si t'as pas 1h par jour pour ton business, t'as pas un business, t'as un hobby."
                },
                {
                  question: "Je débute, c'est trop avancé pour moi ?",
                  answer: "Non. C'est justement fait pour te lancer proprement dès le début, sans prendre les mauvaises habitudes."
                },
                {
                  question: "Je peux pas tout faire moi-même ?",
                  answer: "Si. Mais tu vas perdre 6 mois à réinventer la roue, tester des trucs qui marchent pas, et probablement abandonner en cours de route."
                },
                {
                  question: "99€, c'est pas trop cher ?",
                  answer: "Ton inaction te coûte 10 fois plus chaque mois. Chaque client que tu ne signes pas parce que ton système est inexistant, c'est 2K, 5K, 10K qui s'envolent."
                },
                {
                  question: "J'ai pas GHL / Notion...",
                  answer: "T'as les templates. C'est plug-and-play. Les outils sont secondaires, c'est la méthode qui compte."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`${cardStyles.base} ${cardStyles.accent} hover:border-button/50 transition-all duration-300 hover:transform hover:scale-[1.02]`}
                >
                  <div className="space-y-4">
                    <p className="text-xl font-bold text-white">{item.question}</p>
                    <div className="flex items-start gap-4">
                      <span className="text-button font-bold text-2xl">→</span>
                      <p className={containerStyles.text}>{item.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 12. Avant / Après */}
      <section className={`${sectionStyles.base} ${sectionStyles.light} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              AVANT / APRÈS (TRANSFORMATION CLAIRE)
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Avant */}
              <motion.div
                className={`${cardStyles.base} ${cardStyles.warning} hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]`}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-red-500 mb-6">AVANT STARTER</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="text-red-500 font-bold text-2xl">→</span>
                      <p className={containerStyles.text}>Acquisition au feeling, à l'instinct</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-red-500 font-bold text-2xl">→</span>
                      <p className={containerStyles.text}>Aucun tunnel, juste des conversations qui mènent nulle part</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-red-500 font-bold text-2xl">→</span>
                      <p className={containerStyles.text}>Pas de message clair, tu bégaies quand on te demande ce que tu fais</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-red-500 font-bold text-2xl">→</span>
                      <p className={containerStyles.text}>Tu vis d'espoir et de posts LinkedIn</p>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Après */}
              <motion.div
                className={`${cardStyles.base} ${cardStyles.accent} hover:border-button/50 transition-all duration-300 hover:transform hover:scale-[1.02]`}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-button mb-6">APRÈS STARTER</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="text-button font-bold text-2xl">→</span>
                      <p className={containerStyles.text}>Machine d'acquisition installée et prévisible</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-button font-bold text-2xl">→</span>
                      <p className={containerStyles.text}>Tunnel qui close pendant ton sommeil</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-button font-bold text-2xl">→</span>
                      <p className={containerStyles.text}>Séquence efficace qui fait comprendre ta valeur en 30 secondes</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-button font-bold text-2xl">→</span>
                      <p className={containerStyles.text}>Tu vis d'un système structuré qui génère des résultats</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className={`${cardStyles.base} ${cardStyles.accent} mt-8 p-8 text-center`}
            >
              <p className={containerStyles.emphasis}>
                La différence est brutale. Et elle ne prend que 7 jours à installer.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 13. Pourquoi 99€ */}
      <section className={`${sectionStyles.base} ${sectionStyles.dark} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              POURQUOI 99€ ? (POSITIONNEMENT + SCARCITY)
            </motion.h2>

            <motion.div
              className="space-y-8"
            >
              <div className={`${cardStyles.base} ${cardStyles.accent} p-8`}>
                <p className={containerStyles.text}>
                  Je pourrais vendre ce système 500€, easy. D'ailleurs, je l'ai déjà fait.
                </p>
                <p className={containerStyles.text}>
                  Mais j'en avais marre de voir des mecs ramer alors qu'ils pourraient lancer un système en 7 jours. C'est pas une formation où je te raconte ma vie. C'est une installation concrète.
                </p>
                <p className={containerStyles.text}>
                  Et elle te coûte moins cher qu'un resto avec ta copine.
                </p>
                <p className={containerStyles.highlight}>
                  Pourquoi si peu ? Parce que je veux enlever toutes tes excuses. Je veux que tu n'aies plus aucune raison de ne pas agir.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 14. Coût de l'inaction */}
      <section className={`${sectionStyles.base} ${sectionStyles.light} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              TU VEUX ENCORE RÉFLÉCHIR ? VOILÀ CE QUE ÇA VA TE COÛTER.
            </motion.h2>

            <motion.div
              className={`${cardStyles.base} ${cardStyles.warning} p-8`}
            >
              <div className="space-y-6">
                <p className={containerStyles.text}>
                  Continue de poster sur LinkedIn. Continue d'espérer que quelqu'un pense à toi. Continue de te dire que "ça va venir".
                </p>
                <p className={containerStyles.text}>
                  Pendant ce temps, d'autres mecs lancent leur machine. Ils signent. Ils scalent. Ils prennent les clients que tu aurais pu avoir.
                </p>
                <p className={containerStyles.text}>
                  Chaque jour que tu passes à "réfléchir", c'est un jour où tu ne génères pas de leads. C'est un jour sans nouveaux clients. C'est un jour sans revenus supplémentaires.
                </p>
                <p className="text-2xl font-bold text-white text-center mt-8">
                  Le coût de l'inaction est toujours plus élevé que le coût de l'action.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 15. Pas de garantie */}
      <section className={`${sectionStyles.base} ${sectionStyles.dark} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              IL N'Y A PAS DE GARANTIE "SATISFAIT OU REMBOURSÉ".
            </motion.h2>

            <motion.div
              className={`${cardStyles.base} ${cardStyles.accent} p-8`}
            >
              <div className="space-y-6">
                <p className={containerStyles.text}>
                  Parce que je ne vends pas une promesse magique.
                </p>
                <p className={containerStyles.text}>
                  Je vends un système.
                </p>
                <p className={containerStyles.text}>
                  Et ce système, si tu le suis, il fonctionne.
                </p>
                <div className="space-y-4 mt-8">
                  <p className={containerStyles.highlight}>
                    Tu veux une garantie ? Prends-toi en main.
                  </p>
                  <p className={containerStyles.highlight}>
                    Tu veux des résultats ? Applique le plan.
                  </p>
                </div>
                <p className="text-2xl font-bold text-white text-center mt-8">
                  Le vrai risque, c'est de ne rien faire.
                </p>
                <p className={containerStyles.text}>
                  Je ne veux pas de touristes qui achètent, regardent vaguement, et demandent un remboursement. Je veux des guerriers qui exécutent.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 16. CTA final */}
      <section className={`${sectionStyles.base} ${sectionStyles.light} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-button/5 to-primary/0"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            >
              GUERRIER OU TOURISTE ?
            </motion.h2>

            <motion.div
              className="space-y-6 text-center"
            >
              <Button 
                href="https://buy.stripe.com/5kAcNB6Y16zZ7wQeV7" 
                size="lg"
                className="group relative overflow-hidden w-full md:w-auto shadow-lg hover:shadow-button/20 transition-all duration-300"
              >
                <span className="relative z-10 font-medium">JE LANCE MA MACHINE MAINTENANT → ACCÈS IMMÉDIAT AU STARTER</span>
                <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>

              <p className="text-gray-400 italic">
                Ou je retourne scroller en attendant que la vie change toute seule.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 17. PS */}
      <section className={`${sectionStyles.base} ${sectionStyles.dark} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        <div className={containerStyles.base}>
          <motion.div 
            className="space-y-8 relative"
          >
            <motion.div
              className={`${cardStyles.base} ${cardStyles.accent} p-8`}
            >
              <div className="space-y-6">
                <p className={containerStyles.text}>
                  Tu veux être pris au sérieux par tes clients ? Commence par te prendre au sérieux toi-même.
                </p>
                <p className={containerStyles.text}>
                  Ce Starter, c'est ton test. Si tu passes à l'action maintenant, t'as une machine qui tourne en 7 jours. Sinon... tu sais déjà ce qui t'attend.
                </p>
                <p className={containerStyles.text}>
                  Les mêmes résultats. La même frustration. Les mêmes excuses.
                </p>
                <p className="text-2xl font-bold text-white text-center mt-8">
                  La balle est dans ton camp. Qu'est-ce que tu choisis ?
                </p>
              </div>

              <div className="mt-12 text-center">
                <Button 
                  href="https://buy.stripe.com/5kAcNB6Y16zZ7wQeV7" 
                  size="lg"
                  className="group relative overflow-hidden shadow-lg hover:shadow-button/20 transition-all duration-300"
                >
                  <span className="relative z-10">JE PRENDS LE STARTER MAINTENANT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Zoom screenshot" className="max-w-full max-h-full rounded-xl shadow-2xl" />
          <button className="absolute top-4 right-4 text-white text-3xl font-bold" onClick={() => setLightbox(null)}>&times;</button>
        </div>
      )}

    </>
  );
} 