'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Image from 'next/image';
import Testimonials from '@/components/Testimonials';
import LoadingScreen from '@/components/LoadingScreen';

export default function RoadmapThankYou() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero Section with Confirmation */}
        <section className="relative overflow-hidden min-h-[25vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 opacity-80"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 py-8 relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block p-2 px-4 rounded-full bg-white/10 text-accent mb-4 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-semibold">Opportunité exclusive</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight max-w-5xl mx-auto">
                <span className="block">Important, avant de regarder tes emails</span>
                <span className="block">regarde cette vidéo sur le scale B2B</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto font-medium">
                Et débloque l'opportunité de parler de tes problématiques avec un expert de l'équipe BPC
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#video-section" className="text-white hover:text-accent transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Video Section with Gradient Overlay */}
        <section id="video-section" className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Félicitations, tu vas découvrir comment résoudre les problèmes qui t'empêche de collecter plus de cash
                </h2>
              </div>
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30"></div>
                {/* Replace with your actual video embed code */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xl text-white">Vidéo sur le scale B2B</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8 space-y-4">
                <div>
                  <Button href="#calendly" size="lg" className="bg-accent hover:bg-accent/90">
                    Débloquer mon business
                  </Button>
                  <p className="text-gray-300 mt-2">En parlant avec un expert BPC</p>
                </div>
                <div>
                  <a href="/masterclass" className="text-gray-400 hover:text-accent transition-colors inline-flex items-center">
                    <span>Retourner à la masterclass</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block p-2 px-4 rounded-full bg-accent/20 text-accent mb-4 backdrop-blur-sm border border-accent/30">
                  <span className="text-sm font-semibold">Pendant que tu attends ta roadmap...</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-white leading-tight">
                  Est-ce que tu veux débloquer ton business avec nous lors d'un atelier 1-1 ?
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Note : Cet atelier n'est PAS nécessaire pour recevoir ta roadmap, prends rdv uniquement si tu penses que c'est utile pour toi d'échanger sur tes problématiques de scale avec notre équipe lors d'un call d'analyse en 1-1.
                </p>
              </div>
              <div id="calendly" className="bg-gray-800/50 rounded-2xl border border-primary/30 p-8 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Réserve ton créneau</h3>
                </div>
                {/* Replace with your actual Calendly embed code */}
                <div className="aspect-[3/4] bg-gray-700/50 rounded-xl flex items-center justify-center border border-primary/20">
                  <p className="text-gray-400">Calendly Embed</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <a href="/masterclass" className="text-gray-400 hover:text-accent transition-colors inline-flex items-center group">
                  <span>Retourner à la masterclass</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
      </main>
    </>
  );
} 