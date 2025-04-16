'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Button from "@/components/Button";
import { motion } from "framer-motion";

interface Video {
  title: string;
  thumbnail: string;
  url: string;
}

const YOUTUBE_CHANNELS = {
  personal: {
    name: "Baptiste Piocelle",
    description: "Développement personnel & Business",
    avatar: "/founder1.jpg",
    url: "https://www.youtube.com/@baptistepiocelle",
    videos: [
      {
        title: "Vidéo 1",
        thumbnail: "https://img.youtube.com/vi/SBXKwFL2I3s/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=SBXKwFL2I3s"
      },
      {
        title: "Vidéo 2",
        thumbnail: "https://img.youtube.com/vi/iCOe4YV6640/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=iCOe4YV6640"
      },
      {
        title: "Vidéo 3",
        thumbnail: "https://img.youtube.com/vi/uczmlsJ6FqU/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=uczmlsJ6FqU"
      }
    ]
  },
  business: {
    name: "Baptiste Piocelle - Business",
    description: "Stratégies B2B & Marketing",
    avatar: "/Profil Business YT.jpg",
    url: "https://www.youtube.com/@BaptistePiocelle-Business",
    videos: [
      {
        title: "Comment créer une offre qui convertit en B2B",
        thumbnail: "https://img.youtube.com/vi/Es7A-FY0EyA/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=Es7A-FY0EyA"
      },
      {
        title: "Les secrets du closing en B2B",
        thumbnail: "https://img.youtube.com/vi/pRtCpiVmJCQ/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=pRtCpiVmJCQ"
      },
      {
        title: "Comment automatiser sa prospection B2B",
        thumbnail: "https://img.youtube.com/vi/uA9SVQDsSHw/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=uA9SVQDsSHw"
      }
    ]
  }
};

const LINKEDIN_PROFILES = [
  {
    name: "Baptiste Piocelle",
    title: "Fondateur BPC Group",
    avatar: "/Baptiste.jpg",
    url: "https://www.linkedin.com/in/baptiste-piocelle/",
    description: "Contenu sur l'entrepreneuriat, le business B2B et le développement personnel."
  },
  {
    name: "Rémi Bouder",
    title: "Co-fondateur BPC Group",
    avatar: "/Rémi.jpeg",
    url: "https://www.linkedin.com/in/remi-bouder/",
    description: "Expert en stratégie commerciale et développement business."
  }
];

// Animations variants
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const staggerChildren = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MediaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-primary via-primary/90 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-button/20 via-transparent to-primary/20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-button/30 rounded-full blur-[120px] opacity-50" />
        
        {/* Content */}
        <motion.div 
          className="container-custom relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-tight">
                Nos Médias
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Découvre nos contenus éducatifs, newsletters et présence sur les réseaux sociaux.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                href="#newsletter-section" 
                className="min-w-[200px] text-lg py-6 bg-button hover:bg-button/90 transform hover:scale-[1.02] transition-all duration-200"
              >
                Newsletter
              </Button>
              <Button 
                href="#youtube-section" 
                variant="outline"
                className="min-w-[200px] text-lg py-6 border-2 hover:bg-white/10 transform hover:scale-[1.02] transition-all duration-200"
              >
                Chaînes YouTube
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      </section>

      {/* Newsletter Section */}
      <section id="newsletter-section" className="section bg-primary relative min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-button/20 via-transparent to-primary/20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-button/30 rounded-full blur-[150px] opacity-50" />
        
        <div className="container-custom relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">Newsletter Quotidienne</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Rejoins notre communauté et reçois chaque jour des conseils concrets pour développer ton business B2B.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 mb-16 border border-gray-800 shadow-2xl shadow-button/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Inscription à la newsletter en cours de développement');
              }} 
              className="flex flex-col gap-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Ton prénom</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Ton email professionnel</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full py-4 text-lg font-medium transform hover:scale-[1.02] transition-all duration-200 shadow-xl shadow-button/20"
              >
                Recevoir la newsletter
              </Button>
              <p className="text-sm text-gray-400 text-center">
                Tu peux te désabonner à tout moment. Pas de spam.
              </p>
            </form>
          </motion.div>

          <div className="mt-24">
            <motion.h3 
              className="text-3xl text-center mb-12 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Archives Newsletter
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Passer de 0 à 1M€/an avec 99,99% de chances de succès",
                  date: "10 Mars 2025",
                  readTime: "6 min",
                },
                {
                  title: "Hack LinkedIn à 1M€ : comment exploser ton business avec 1 post par jour",
                  date: "14 Mars 2025",
                  readTime: "5 min",
                },
                {
                  title: "Le growth pour solopreneur, c'est quoi ?",
                  date: "14 Juin 2024",
                  readTime: "5 min",
                },
                {
                  title: "Comment créer un tunnel de vente qui convertit",
                  date: "15 Mars 2024",
                  readTime: "5 min",
                },
                {
                  title: "Les 3 erreurs fatales en prospection B2B",
                  date: "14 Mars 2024",
                  readTime: "4 min",
                },
                {
                  title: "Comment automatiser son business efficacement",
                  date: "13 Mars 2024",
                  readTime: "6 min",
                },
              ].map((newsletter, index) => (
                <motion.a
                  key={index}
                  variants={fadeInUp}
                  href="/newsletter"
                  className="group bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-button/10"
                >
                  <h4 className="text-xl font-bold mb-3 group-hover:text-button transition-colors">{newsletter.title}</h4>
                  <p className="text-sm text-gray-400">
                    {newsletter.date} • {newsletter.readTime} de lecture
                  </p>
                </motion.a>
              ))}
            </motion.div>
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button 
                href="/newsletter" 
                variant="outline" 
                className="px-8 py-4 text-lg hover:scale-[1.02] transition-all duration-200 hover:bg-gray-900/50"
              >
                Voir toutes les newsletters
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Channels Section */}
      <section id="youtube-section" className="section bg-gray-900 relative min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] opacity-50" />
        
        <div className="container-custom relative">
          <motion.div 
            className="text-center mb-24"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">Nos Chaînes YouTube</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Du contenu gratuit et de qualité sur deux chaînes complémentaires pour t'accompagner
            </p>
          </motion.div>

          {Object.entries(YOUTUBE_CHANNELS).map(([key, channel], channelIndex) => (
            <motion.div 
              key={key}
              className="mb-32 last:mb-0"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-8">
                <div className="flex items-center gap-6">
                  <div className="relative w-[120px] h-[120px] transform hover:scale-105 transition-all duration-300">
                    <Image
                      src={channel.avatar}
                      alt={channel.name}
                      fill
                      className="rounded-full ring-4 ring-button/20 object-cover"
                    />
                    <div className="absolute -inset-2 rounded-full bg-button/20 blur-xl -z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{channel.name}</h3>
                    <p className="text-lg text-gray-400 mt-2">{channel.description}</p>
                  </div>
                </div>
                <a 
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl text-base font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-12 px-8 py-2 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20"
                >
                  S&apos;abonner
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {channel.videos.map((video, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    viewport={{ once: true }}
                    className="group relative bg-gray-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10"
                  >
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <div className="relative aspect-video w-full">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="section bg-gray-900 relative min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-primary/10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] opacity-50" />
        
        <div className="container-custom relative">
          <motion.div 
            className="text-center mb-24"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">LinkedIn</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Suis-nous sur LinkedIn pour du contenu exclusif et du networking
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
          >
            {LINKEDIN_PROFILES.map((profile, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="group bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="relative w-[140px] h-[140px] transform hover:scale-105 transition-all duration-300">
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      fill
                      className="rounded-full ring-4 ring-blue-500/20 object-cover"
                    />
                    <div className="absolute -inset-2 rounded-full bg-blue-500/20 blur-xl -z-10" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-2">{profile.name}</h3>
                    <p className="text-lg text-gray-400">{profile.title}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {profile.description}
                </p>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl text-base font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-600 h-12 px-8 py-2 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  Suivre sur LinkedIn
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
} 