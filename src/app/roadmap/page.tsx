'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anton, Montserrat } from 'next/font/google';
import { FaArrowRight, FaRocket, FaChartBar } from 'react-icons/fa';
import Image from 'next/image';
import OptinForm from '@/components/OptinForm';
import RoundedAvatar from '@/components/RoundedAvatar';
import LogoMarquee from '@/components/LogoMarquee';

const anton = Anton({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const revenueOptions = [
  { value: '0', label: '0€ - Je démarre' },
  { value: 'less-than-10k', label: 'Moins de 10k€' },
  { value: '10k-50k', label: '10k€ - 50k€' },
  { value: '50k-100k', label: '50k€ - 100k€' },
  { value: '100k-500k', label: '100k€ - 500k€' },
  { value: '500k-1m', label: '500k€ - 1M€' },
  { value: '1m-5m', label: '1M€ - 5M€' }
];

const testimonials = [
  {
    quote: "+20 000€ générés dès le premier lancement avec un système de vente entièrement délégué",
    detail: "Tout a été mis en place sans que j'aie à lever le petit doigt : tunnel, mails, pub, VSL, prise de rendez-vous, setting, closing.",
    name: "Yann Grosjean",
    role: "CEO de Lugus"
  },
  {
    quote: "+300 000€ générés en 75 jours via une stratégie de contenu LinkedIn",
    detail: "On a lancé 35 posts en 75 jours. Résultat : +1,7M de vues, 4 posts viraux, +4000 abonnés, et plus de 300 000€ générés.",
    name: "Anaïs R.",
    role: "CEO de A&C"
  },
  {
    quote: "+75% de rentabilité sur 6 mois sans recruter ni déléguer",
    detail: "Je voulais scaler sans sacrifier ma liberté. En quelques semaines, j'ai restructuré mes offres, internalisé l'acquisition, et lancé un système qui tourne.",
    name: "CEO anonyme",
    role: "prestataire B2B indépendant"
  }
];

const RoadmapPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessType: '',
    mainGoal: '',
    revenue: ''
  });
  const [loadingToForm, setLoadingToForm] = useState(false);
  const loadingTimeout = useRef<NodeJS.Timeout | null>(null);

  const businessTypes = [
    "Solopreneur",
    "CEO d'agence"
  ];

  const mainGoals = [
    "Générer plus de leads qualifiés",
    "Augmenter mon taux de conversion",
    "Structurer et optimiser mes offres",
    "Mettre en place mes systèmes et recruter",
    "Développer mes canaux d'acquisition"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Simuler un temps de chargement de 4 secondes
      setStep(5);
      setTimeout(() => {
        window.location.href = '/roadmap/merci';
      }, 4000);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#18162a] via-[#232046] to-[#18162a] text-white px-4 py-12 relative overflow-x-hidden">
      {/* Motif décoratif subtil en fond */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>

      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl mx-auto text-center space-y-4 mb-12"
      >
        <h1 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl text-[#FFF1DE] font-bold leading-tight max-w-full overflow-visible`}>
          Obtiens ta roadmap personnalisée pour scaler ton business en moins de 
          <span className="bg-gradient-to-r from-[#FFF1DE] to-[#9F99EB] text-transparent bg-clip-text block mt-2">2 minutes</span>
        </h1>
      </motion.div>

      {/* FORMULAIRE */}
      <div className="w-full max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10"
            >
              <div className="w-full text-center">
                <h2 className={`${anton.className} text-3xl md:text-4xl text-white mb-8`}>
                  Tu es <span className="text-[#9F99EB]">Solopreneur</span> ou <span className="text-[#9F99EB]">CEO d'agence</span> ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {businessTypes.map((type) => (
                    <motion.button
                      key={type}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setFormData({ ...formData, businessType: type });
                        setStep(2);
                      }}
                      className={`p-6 rounded-xl text-lg font-medium transition-all duration-300 ${
                        formData.businessType === type
                          ? 'bg-gradient-to-r from-[#9F99EB] to-[#8A84D9] text-white shadow-lg shadow-[#9F99EB]/20'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700/50'
                      }`}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10"
            >
              <div className="w-full">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: -5 }}
                  type="button"
                  onClick={handleBack}
                  className="flex items-center text-gray-400 hover:text-white transition-colors mb-6 group"
                >
                  <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Retour
                </motion.button>
                <div className="text-center">
                  <h2 className={`${anton.className} text-3xl md:text-4xl text-white mb-8`}>
                    Quel est ton <span className="text-[#9F99EB]">objectif principal</span> ?
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {mainGoals.map((goal) => (
                      <motion.button
                        key={goal}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, mainGoal: goal });
                          setStep(3);
                        }}
                        className={`p-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                          formData.mainGoal === goal
                            ? 'bg-gradient-to-r from-[#9F99EB] to-[#8A84D9] text-white shadow-lg shadow-[#9F99EB]/20'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700/50'
                        }`}
                      >
                        {goal}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && !loadingToForm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10"
            >
              <div className="w-full">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: -5 }}
                  type="button"
                  onClick={handleBack}
                  className="flex items-center text-gray-400 hover:text-white transition-colors mb-6 group"
                >
                  <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Retour
                </motion.button>
                <div className="text-center">
                  <h2 className={`${anton.className} text-3xl md:text-4xl text-white mb-8`}>
                    Quel est ton <span className="text-[#9F99EB]">C.A annuel</span> ?
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {revenueOptions.map((option) => (
                      <motion.button
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, revenue: option.value });
                          setLoadingToForm(true);
                          if (loadingTimeout.current) clearTimeout(loadingTimeout.current);
                          loadingTimeout.current = setTimeout(() => {
                            setLoadingToForm(false);
                            setStep(4);
                          }, 1100);
                        }}
                        className={`p-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                          formData.revenue === option.value
                            ? 'bg-gradient-to-r from-[#9F99EB] to-[#8A84D9] text-white shadow-lg shadow-[#9F99EB]/20'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700/50'
                        }`}
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && loadingToForm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-white/10 min-h-[260px]"
            >
              <div className="flex flex-col items-center gap-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-14 h-14 border-4 border-[#9F99EB] border-t-transparent rounded-full mb-2"
                />
                <div className="text-lg md:text-xl text-white font-semibold text-center">Préparation de ton formulaire personnalisé...</div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ x: -5 }}
                type="button"
                onClick={handleBack}
                className="flex items-center text-gray-400 hover:text-white transition-colors mb-6 group"
              >
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour
              </motion.button>
              <OptinForm
                title="Presque terminé !"
                subtitle="Laisse-nous tes coordonnées pour recevoir ta roadmap personnalisée"
                buttonText="Je veux ma roadmap gratuite"
                className="w-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10"
                defaultRevenue={formData.revenue}
                businessType={formData.businessType}
                mainGoal={formData.mainGoal}
              />
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10"
            >
              <div className="w-full text-center">
                <h2 className={`${anton.className} text-3xl md:text-4xl text-white mb-8`}>
                  Génération de ta roadmap en cours...
                </h2>
                <div className="flex justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-[#9F99EB] border-t-transparent rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* PREUVES SIMPLIFIÉES */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center mt-10 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-8 md:gap-16 text-white text-lg font-semibold w-full">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <svg className="w-7 h-7 text-[#9F99EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 14c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4 1.5 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              <span className="font-bold text-xl">2 min</span>
            </div>
            <span className="text-gray-400 text-base font-normal">Roadmap reçue</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <svg className="w-7 h-7 text-[#9F99EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-6V7a5 5 0 00-10 0v1a5 5 0 0010 0zm-5 8a5 5 0 01-5-5V7a5 5 0 0110 0v1a5 5 0 01-5 5z" /></svg>
              <span className="font-bold text-xl">+2.000</span>
            </div>
            <span className="text-gray-400 text-base font-normal">Entrepreneurs formés</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <svg className="w-7 h-7 text-[#9F99EB]" fill="none" stroke="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
              <span className="font-bold text-xl">98%</span>
            </div>
            <span className="text-gray-400 text-base font-normal">Satisfaction</span>
          </div>
        </div>
      </div>

      {/* CITATION EN BAS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-2xl mx-auto text-center mt-20"
      >
        <blockquote className="relative px-10 py-12 md:py-14 bg-gradient-to-br from-[#2d2a4f] via-[#232046] to-[#3a3470] rounded-3xl shadow-2xl border-2 border-[#9F99EB]/60 text-white text-2xl md:text-3xl font-bold leading-relaxed overflow-hidden flex flex-col items-center justify-center">
          {/* Double quote icons */}
          <svg className="absolute left-6 top-6 w-12 h-12 text-[#9F99EB]/70 opacity-70" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 002 11c0 2.21 1.79 4 4 4 .55 0 1 .45 1 1v2c0 .55-.45 1-1 1H4a1 1 0 01-1-1v-2c0-3.87 3.13-7 7-7h-2.83z" /></svg>
          <svg className="absolute right-6 bottom-6 w-12 h-12 text-[#9F99EB]/70 opacity-70 rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 002 11c0 2.21 1.79 4 4 4 .55 0 1 .45 1 1v2c0 .55-.45 1-1 1H4a1 1 0 01-1-1v-2c0-3.87 3.13-7 7-7h-2.83z" /></svg>
          {/* Light effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#9F99EB]/30 to-transparent blur-2xl opacity-70"></div>
          </div>
          <span className="block mb-6 z-10">« Cette roadmap n'est pas une simple méthode : elle a été testée, validée et utilisée par des entrepreneurs millionnaires pour scaler leur business. Aujourd'hui, elle est à ta portée. »</span>
          <div className="not-italic font-bold text-[#9F99EB] mt-2 text-lg md:text-xl z-10">— Baptiste Piocelle</div>
        </blockquote>
      </motion.div>
    </div>
  );
};

export default RoadmapPage; 