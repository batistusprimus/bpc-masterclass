'use client';

import { motion } from 'framer-motion';
import Testimonials from '@/components/Testimonials';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[100px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Prenons le temps d'échanger
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Découvre comment nous pouvons t'aider à développer ton business B2B
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi prendre un appel Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                Pourquoi prendre un appel ?
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Un appel de 30 minutes pour :
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-button">•</span>
                    <span>Comprendre tes objectifs et tes challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-button">•</span>
                    <span>Identifier tes opportunités de croissance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-button">•</span>
                    <span>Définir une stratégie personnalisée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-button">•</span>
                    <span>Découvrir comment nos solutions peuvent t'aider</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
                <iframe
                  src="https://calendly.com/baptistepiocelle/diagnostic"
                  className="w-full h-[600px] rounded-lg"
                  title="Calendrier de rendez-vous"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-primary">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Prêt à transformer ton business ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Réserve ton appel gratuit et découvre comment nous pouvons t'aider à atteindre tes objectifs.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/baptistepiocelle/diagnostic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-button text-white rounded-xl font-medium hover:bg-button/90 transition-all duration-200"
              >
                Réserver mon appel gratuit
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 