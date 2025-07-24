'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/Button";
import InteractiveLPGallery from "@/components/InteractiveLPGallery";

export default function LaunchPadExpressPage() {
  const [placesLeft, setPlacesLeft] = useState(7);

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const lpExamples = [
    {
      title: "Coach Business",
      description: "De 0 à 15 RDV/mois",
      image: "/Incubateur/Guillaume.png",
      sector: "Coaching"
    },
    {
      title: "Consultant Marketing",
      description: "x4 son taux de conversion",
      image: "/Incubateur/JM.jpg",
      sector: "Consulting"
    },
    {
      title: "Formateur Digital",
      description: "12K€ CA en 30 jours",
      image: "/Incubateur/Yannphoto.png",
      sector: "Formation"
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ marginTop: '-80px', paddingTop: '0' }}>
      <style jsx global>{`
        header {
          display: none !important;
        }
        main {
          padding-top: 0 !important;
        }
      `}</style>
      {/* HERO SECTION */}
      <motion.section 
        className="py-16 md:py-24 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          {/* Badge urgence */}
          <motion.div 
            className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            🔥 Plus que {placesLeft} places ce mois-ci
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            {...animationProps}
          >
            <span className="text-blue-600">LaunchPad Express™</span><br />
            LP + Copywriting qui Convertit<br />
            <span className="text-green-600">en 7 Jours</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
            {...animationProps}
          >
            Pour solopreneurs qui veulent une <strong>page qui vend</strong> sans perdre 3 mois et 3500€
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
            {...animationProps}
          >
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span>
              +500 Landing Pages créées
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span>
              x3 votre taux de conversion
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span>
              Livraison garantie en 7 jours
            </div>
          </motion.div>

          <motion.div {...animationProps}>
            <a 
              href="https://tally.so/r/wkBaVo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="primary" 
                size="lg"
                className="mb-4 text-xl px-12 py-4"
              >
                Vérifier Mon Éligibilité (2 min) →
              </Button>
            </a>
            <p className="text-gray-500 text-sm">Puis accès à l'offre 997€</p>
          </motion.div>
        </div>
      </motion.section>



      {/* PROBLÈME */}
      <motion.section 
        className="py-16 md:py-24 px-4 bg-gray-50"
        {...animationProps}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Votre Site Actuel Vous Coûte <span className="text-red-600">2000-3000€/mois</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Chaque prospect perdu = argent qui s'envole. Combien de temps allez-vous attendre ?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-700 mb-4">📉 Sans Landing Page Pro</h3>
              <ul className="space-y-3 text-red-600">
                <li>• <strong>95%</strong> des visiteurs repartent sans rien acheter</li>
                <li>• Perte moyenne : <strong>2000-3000€ CA/mois</strong></li>
                <li>• Image "amateur" qui fait fuir les prospects</li>
                <li>• Pas de copywriting qui convertit</li>
                <li>• <strong>50h+</strong> perdues à bricoler des outils</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">📈 Avec LaunchPad Express™</h3>
              <ul className="space-y-3 text-green-600">
                <li>• <strong>x3</strong> votre taux de conversion minimum</li>
                <li>• Gain estimé : <strong>5000-8000€ CA/mois</strong></li>
                <li>• Image ultra-professionnelle qui rassure</li>
                <li>• Copy qui pousse à l'achat automatiquement</li>
                <li>• <strong>0h</strong> de votre temps (on fait tout)</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              Combien de temps allez-vous encore perdre des clients ?
            </p>
            <Button variant="primary" size="lg">
              Je Stoppe l'Hémorragie Maintenant →
            </Button>
          </div>
        </div>
      </motion.section>

      {/* LOGOS CLIENTS */}
      <motion.section 
        className="py-16 md:py-24 px-4 bg-white"
        {...animationProps}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ils Nous Font <span className="text-blue-600">Confiance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Des centaines de solopreneurs ont déjà transformé leur business
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
            <img src="/66586da221e592872a514716_ecf4541d-3c8f-4731-ace6-7f59afa16df4.png" alt="Scale Up Logo" className="mx-auto max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="/66586f5324a5f96213323991_e06827a1-d54d-4cff-8f39-d480a4d23967.png" alt="Business Pro Club Logo" className="mx-auto max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="/665871bc5f8d9b87ce190b59_1443ebad-ae25-4240-b1e3-1bf8bf237c3a.png" alt="BPC Masterclass Logo" className="mx-auto max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="/665876e344b512bddc35112e_77189863-0a3b-48f3-9b9d-cf294d14d568.png" alt="BPC Academy Logo" className="mx-auto max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="/6658731f8227b6b6a4bca138_739e49c5-fdf8-4988-8417-7502d47f2c53.png" alt="BPC Incubateur Logo" className="mx-auto max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
            <img src="/6658713033c7316a7e38d620_548af79d-89fc-4542-a939-4eb1fabae0c8.png" alt="BPC Startup Logo" className="mx-auto max-h-20 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.section>

      {/* SOLUTION */}
      <motion.section 
        className="py-16 md:py-24 px-4"
        {...animationProps}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">LaunchPad Express™</span> :<br />
              La Solution <span className="text-green-600">3x Plus Rapide</span> et Moins Chère
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Pourquoi attendre 3-6 mois et payer 3500€ quand vous pouvez avoir votre LP pro en 7 jours pour 997€ ?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">+500 LP Créées</h3>
              <p className="text-gray-600">Expertise prouvée, rapidité garantie</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="font-bold text-gray-900 mb-2">Copy Inclus</h3>
              <p className="text-gray-600">1 seul interlocuteur, résultat cohérent</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2">7 Jours</h3>
              <p className="text-gray-600">vs 3-6 mois d'agences classiques</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">997€</h3>
              <p className="text-gray-600">vs 3500€ prix marché</p>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              L'Équation Qui Change Tout
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">90%</div>
                <div className="text-gray-300">Chances de succès</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">7 Jours</div>
                <div className="text-gray-300">Délai de livraison</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-2">0h</div>
                <div className="text-gray-300">Votre effort</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">∞</div>
                <div className="text-gray-300">Retours possibles</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* GALERIE INTERACTIVE DES LANDING PAGES */}
      <InteractiveLPGallery />



      {/* PROCESSUS */}
      <motion.section 
        className="py-16 md:py-24 px-4 bg-gray-50"
        {...animationProps}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre Processus <span className="text-blue-600">Ultra-Simple</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Vous n'avez rien à faire, on s'occupe de tout
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Vous Payez et Remplissez le Brief",
                description: "Paiement sécurisé Stripe + brief automatique de 5 minutes",
                time: "Jour 0"
              },
              {
                step: "2", 
                title: "On Crée Votre Premier Draft",
                description: "Notre équipe crée votre LP + copy personnalisé",
                time: "Jour 1-3"
              },
              {
                step: "3",
                title: "Allers-Retours Illimités",
                description: "Modifications jusqu'à ce que ce soit parfait",
                time: "Jour 4-7"
              },
              {
                step: "4",
                title: "Livraison + Mise en Ligne",
                description: "Votre LP est prête, avec options d'hébergement",
                time: "Jour 7"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                    {item.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CE QUE VOUS RECEVEZ */}
      <motion.section 
        className="py-16 md:py-24 px-4"
        {...animationProps}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Votre Package Complet à <span className="text-green-600">997€</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Tout ce dont vous avez besoin pour convertir vos visiteurs en clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Landing Page Optimisée</h3>
                  <p className="text-gray-600">Design moderne, responsive, optimisé conversion</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Copywriting Inclus</h3>
                  <p className="text-gray-600">Textes qui vendent, adaptés à votre marché</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Allers-Retours Illimités</h3>
                  <p className="text-gray-600">Modifications jusqu'à satisfaction complète</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Livraison en 7 Jours</h3>
                  <p className="text-gray-600">Garantie de délai ou remboursé</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hébergement Pro</h3>
                  <p className="text-gray-600">Solution technique clé en main (50€/mois)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Support Technique</h3>
                  <p className="text-gray-600">Assistance pour la mise en ligne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BONUS */}
      <motion.section 
        className="py-16 md:py-24 px-4 bg-yellow-50"
        {...animationProps}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bonus Inclus <span className="text-yellow-600">(Valeur 500€)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Des ressources exclusives pour maximiser vos résultats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">📁</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Swipe File Premium</h3>
              <p className="text-gray-600 mb-4">
                Collection de pages qui convertissent le mieux dans votre secteur
              </p>
              <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold">
                Valeur : 150€
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Checklist de Lancement</h3>
              <p className="text-gray-600 mb-4">
                Guide étape par étape pour optimiser votre taux de conversion
              </p>
              <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold">
                Valeur : 100€
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guide Trafic</h3>
              <p className="text-gray-600 mb-4">
                Comment envoyer du trafic qualifié sur votre nouvelle LP
              </p>
              <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold">
                Valeur : 250€
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PRIX & COMPARAISON */}
      <motion.section 
        className="py-16 md:py-24 px-4"
        {...animationProps}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              LaunchPad Express™ vs <span className="text-red-600">Le Marché</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Pourquoi payer plus cher pour attendre plus longtemps ?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Marché */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-700 mb-2">Agences Classiques</h3>
                <div className="text-4xl font-bold text-red-600">3500€</div>
                <p className="text-red-600">+ 3 à 6 mois d'attente</p>
              </div>
              <ul className="space-y-3 text-red-600">
                <li>❌ Délais interminables (3-6 mois)</li>
                <li>❌ Prix prohibitifs (3500€+)</li>
                <li>❌ Modifications payantes</li>
                <li>❌ Plusieurs interlocuteurs</li>
                <li>❌ Copy en supplément</li>
                <li>❌ Pas de garantie délai</li>
              </ul>
            </div>

            {/* Notre offre */}
            <div className="bg-green-50 border-4 border-green-400 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold">
                MEILLEUR CHOIX
              </div>
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-bold text-green-700 mb-2">LaunchPad Express™</h3>
                <div className="text-4xl font-bold text-green-600">997€</div>
                <p className="text-green-600">Livré en 7 jours</p>
              </div>
              <ul className="space-y-3 text-green-600">
                <li>✅ Livraison ultra-rapide (7 jours)</li>
                <li>✅ Prix imbattable (997€)</li>
                <li>✅ Modifications illimitées</li>
                <li>✅ Un seul interlocuteur</li>
                <li>✅ Copy inclus</li>
                <li>✅ Garantie délai</li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Options de Paiement Flexibles</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Paiement 2x</h4>
                <div className="text-2xl font-bold text-green-400">598€</div>
                <p className="text-gray-300">x2 fois sans frais</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Paiement 4x</h4>
                <div className="text-2xl font-bold text-blue-400">349€</div>
                <p className="text-gray-300">x4 fois sans frais</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Paiement 6x</h4>
                <div className="text-2xl font-bold text-purple-400">249€</div>
                <p className="text-gray-300">x6 fois sans frais</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-green-400">
              <p className="text-sm text-gray-300">
                <strong>💬 Pour bénéficier d'un plan de paiement sans frais, contactez-nous sur WhatsApp au +33 6 52 90 27 11 (sérieux uniquement)</strong>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* GARANTIES */}
      <motion.section 
        className="py-16 md:py-24 px-4 bg-blue-50"
        {...animationProps}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-blue-600">Garanties</span> Béton
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Votre investissement est 100% protégé
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Satisfaction Garantie</h3>
              <p className="text-gray-600">
                Allers-retours illimités jusqu'à ce que vous soyez 100% satisfait
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Délai Garanti</h3>
              <p className="text-gray-600">
                Si pas livré en 7 jours, vous êtes automatiquement remboursé
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Qualité Assurée</h3>
              <p className="text-gray-600">
                +500 LP créées, expertise prouvée et résultats mesurables
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section 
        className="py-16 md:py-24 px-4"
        {...animationProps}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Combien de temps faut-il vraiment pour créer ma LP ?",
                r: "Maximum 7 jours. Premier draft en 3 jours, puis allers-retours jusqu'à validation finale. Si on dépasse 7 jours, vous êtes remboursé."
              },
              {
                q: "Que se passe-t-il si je ne suis pas satisfait ?",
                r: "Allers-retours illimités jusqu'à satisfaction complète. Notre objectif est que vous adoriez votre LP finale."
              },
              {
                q: "L'hébergement est-il inclus ?",
                r: "L'hébergement est proposé en option à 50€/mois. Vous pouvez aussi héberger la LP où vous voulez."
              },
              {
                q: "Puis-je modifier ma LP après livraison ?",
                r: "Oui ! Modifications mineures gratuites pendant 30 jours. Pour des modifications majeures, tarifs préférentiels."
              },
              {
                q: "Comment puis-je être sûr que ça va marcher pour mon secteur ?",
                r: "Nous avons créé +500 LP dans tous les secteurs B2B. Nos templates sont testés et optimisés pour la conversion."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA FINAL */}
      <motion.section 
        className="py-16 md:py-24 px-4 bg-gradient-to-r from-blue-600 to-green-600"
        {...animationProps}
      >
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Avoir une Landing Page<br />
            Qui <span className="text-yellow-300">Convertit Enfin</span> ?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Plus que <strong>{placesLeft} places</strong> disponibles ce mois-ci
          </p>

          <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
            <div className="text-3xl font-bold mb-4">Récapitulatif de votre investissement :</div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <div className="text-lg">✅ Landing Page professionnelle</div>
                <div className="text-lg">✅ Copywriting inclus</div>
                <div className="text-lg">✅ Livraison en 7 jours</div>
                <div className="text-lg">✅ Modifications illimitées</div>
              </div>
              <div>
                <div className="text-lg">🎁 Swipe file (150€)</div>
                <div className="text-lg">🎁 Checklist lancement (100€)</div>
                <div className="text-lg">🎁 Guide trafic (250€)</div>
                <div className="text-lg font-bold text-yellow-300">Total bonus : 500€</div>
              </div>
            </div>
          </div>

          <div className="text-2xl mb-6">
            <span className="line-through text-gray-300">Valeur totale : 4000€</span><br />
            <span className="text-3xl font-bold text-yellow-300">Votre prix aujourd'hui : 997€</span>
          </div>

          <a 
            href="https://tally.so/r/wkBaVo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="secondary" 
              size="lg"
              className="mb-6 text-2xl px-16 py-6 bg-yellow-400 text-gray-900 hover:bg-yellow-300"
            >
              🚀 Vérifier Mon Éligibilité (2 min)
            </Button>
          </a>

          <p className="text-lg opacity-90">
            Paiement sécurisé • Garantie satisfait ou remboursé • Support inclus
          </p>
          

        </div>
      </motion.section>


    </div>
  );
} 