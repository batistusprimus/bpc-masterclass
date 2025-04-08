'use client';

import Image from "next/image";
import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function BpcGroupPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-primary via-primary/90 to-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-button/20 via-transparent to-primary/20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-button/30 rounded-full blur-[120px] opacity-50" />
        
        {/* Content */}
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 leading-tight"
            >
              BPC GROUP
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              En mission pour aider les entrepreneurs B2B à bâtir des machines à cash solides, durables et prêtes à scaler.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      </section>

      {/* About Section */}
      <section className="section bg-primary relative overflow-hidden py-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[100px] opacity-30" />
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-2 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto lg:mr-[-25%] lg:ml-[25%]">
                <Image
                  src="/93A62779-936C-436F-9F09-E08260E57209.JPG"
                  alt="Baptiste Piocelle - Fondateur de BPC GROUP"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                <div className="absolute -inset-4 rounded-2xl bg-button/20 blur-2xl -z-10" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-button/30 to-transparent rounded-full blur-2xl" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:pl-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">Notre Histoire</h2>
              
              <div className="space-y-6 text-gray-300">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg leading-relaxed"
                >
                  En 2020, j&apos;étais freelance en copywriting.
                  J&apos;aidais des entrepreneurs à structurer leurs offres, leurs tunnels, leurs contenus.
                  Et très vite, j&apos;ai vu le vrai problème : les indépendants B2B n&apos;ont pas besoin de motivation ou d&apos;inspiration. Ils ont besoin d&apos;un système qui fait rentrer du cash.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg leading-relaxed"
                >
                  J&apos;ai commencé à poser ce système.
                  Je l&apos;ai testé sur moi, puis sur mes clients.
                  <span className="text-button font-medium"> Résultat : des freelances qui passaient de 5K à 20K/mois, des agences qui doublaient leur rentabilité, des consultants qui signaient sans dépendre du bouche-à-oreille.</span>
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg leading-relaxed"
                >
                  Alors j&apos;ai structuré l&apos;approche.
                  J&apos;ai recruté une équipe. J&apos;ai transformé une méthode artisanale en un vrai cadre de croissance.
                  Et j&apos;ai monté BPC GROUP : un studio de croissance pour solopreneurs et entrepreneurs B2B ambitieux.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30"
                >
                  <p className="text-lg leading-relaxed">
                    Aujourd&apos;hui, on a accompagné plus de <span className="text-button font-medium">200 fondateurs</span> et formés <span className="text-button font-medium">+2.000 entrepreneurs</span>.
                    On a généré plus des millions d&apos;euros cumulés avec nos clients.
                    Et on continue de bosser chaque jour sur une seule mission :
                    <span className="block mt-4 text-xl font-medium text-white">T&apos;aider à construire un business stable, rentable, et taillé pour durer.</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="section bg-gray-900 relative overflow-hidden py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[100px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">Nos Valeurs</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Les principes qui guident nos actions et notre vision au quotidien.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "Nous nous engageons à fournir des formations et des ressources de la plus haute qualité, constamment mises à jour et améliorées.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: "Pragmatisme",
                description: "Nous privilégions toujours les solutions concrètes et applicables immédiatement, plutôt que les concepts théoriques complexes.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Intégrité",
                description: "Nous agissons avec honnêteté et transparence dans toutes nos interactions, en mettant toujours les intérêts de nos clients en premier.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:bg-gray-800/40 hover:border-button/30 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="absolute -inset-2 rounded-full bg-button/20 blur-xl -z-10" />
                  <div className="relative">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-primary relative overflow-hidden py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[100px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">Notre Équipe</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Une équipe d&apos;experts dédiée à la réussite de nos clients.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Baptiste Piocelle",
                role: "CEO",
                image: "/Baptiste.jpg"
              },
              {
                name: "Rémi Bouder",
                role: "COO",
                image: "/Rémi.jpeg"
              },
              {
                name: "Etienne Debien",
                role: "CCO",
                image: "/WhatsApp Image 2025-04-07 at 13.14.58.jpeg"
              },
              {
                name: "Hugo Martinez",
                role: "Spécialiste Ads",
                image: "/2230058-hugo-martinez-766x438.jpg"
              },
              {
                name: "Léon Mulmann",
                role: "Responsable Copywriting",
                image: "/1728625826972.jpeg"
              },
              {
                name: "Bryan Alvites",
                role: "Intégrateur technique",
                image: "/1730449304405.jpeg"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-button/30 transition-all duration-500">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/0 to-gray-900/80" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {member.name}
                    </h3>
                    <p className="text-button font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="absolute -inset-2 bg-button/20 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-primary overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[100px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-button/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/30">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 text-center"
                >
                  "Notre mission est de créer une nouvelle génération d&apos;entrepreneurs B2B, armés des connaissances et des outils pour bâtir des entreprises florissantes et pérennes."
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-button font-medium text-center"
                >
                  - Baptiste Piocelle, Fondateur de BPC GROUP
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section bg-primary relative overflow-hidden py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-button/5 via-transparent to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-button/10 rounded-full blur-[100px] opacity-30" />
        
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">Nos Réalisations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des chiffres qui témoignent de notre impact dans l&apos;écosystème entrepreneurial B2B.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "200+",
                label: "Clients B2B",
              },
              {
                number: "150+",
                label: "Équipes sales construites",
              },
              {
                number: "2000+",
                label: "Entrepreneurs formés",
              },
              {
                number: "35M+",
                label: "Vues sur les réseaux",
              },
              {
                number: "175k+",
                label: "Abonnés réunis",
              },
              {
                number: "17M€+",
                label: "de C.A générés",
              },
              {
                number: "5",
                label: "Années d'expérience en growth",
              },
              {
                number: "100%",
                label: "Passion & Engagement",
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-button/30 transition-all duration-500">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-button to-button/80"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-lg text-gray-300 font-medium">{stat.label}</p>
                  <div className="absolute -inset-2 bg-button/20 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl mb-6">Contacte-nous</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Tu souhaites en savoir plus sur BPC GROUP ou explorer des opportunités de collaboration ? Contacte-nous dès maintenant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Nous contacter
            </Button>
            <Button href="/masterclass" variant="outline" size="lg">
              Découvrir la Masterclass
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 