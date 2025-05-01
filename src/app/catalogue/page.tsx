import Button from "@/components/Button";
import Image from "next/image";
import LogoMarquee from "@/components/LogoMarquee";
import Link from "next/link";
import Script from "next/script";

export default function CataloguePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-gray-900">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}></div>
        </div>

        <div className="container-custom relative z-10 px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30">
              <p className="text-sm md:text-base font-medium">
                Solutions B2B testées et approuvées
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nos solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
              Des programmes conçus pour accélérer ta croissance B2B et maximiser tes résultats.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Solutions Section */}
      <section className="section bg-primary py-12 md:py-16 px-4 md:px-0">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 font-title">Solutions directes</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nos formations et programmes clés en main, disponibles immédiatement pour aller plus vite dans ta croissance.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "STARTER",
                badge: "AUTONOMIE",
                description: "La méthode BPC, accessible en 24h. Tous les outils pour construire ton système de vente B2B, sans te perdre dans les vidéos YouTube ou les formations bullshit.",
                price: "99€",
                priceLabel: "INVESTISSEMENT MINIMAL",
                features: [
                  "Accès à tous les modules vidéo de la Masterclass",
                  "50+ templates Notion & GHL : offre, tunnel, scripts, CRM, roadmap",
                  "Workbook PDF complet avec exercices + checklist d'implémentation",
                  "Accès à vie aux mises à jour + accès communautaire Discord",
                  "Mini-audit de positionnement automatique",
                ],
                ctaText: "Commencer maintenant",
                popular: false,
                audience: "Les solopreneurs débrouillards qui veulent faire eux-mêmes, ceux qui veulent valider la méthode avant d'investir plus, ceux qui préfèrent avancer à leur rythme.",
                benefits: "Tu sais quoi vendre, à qui, comment, et sur quel canal. Tu gagnes des mois d'errance avec un système déjà structuré. Tu peux lancer ton tunnel en 7 jours chrono.",
                result: "Tu as une version opérationnelle de ton offre, ton positionnement, et ton système d'acquisition. Tu peux tout lancer en autonomie, avec une direction claire et un plan solide."
              },
              {
                title: "ACCÉLÉRATEUR",
                badge: "ACCOMPAGNEMENT",
                description: "Tu veux qu'on t'aide à bien appliquer la méthode ? On co-construit ton système avec toi : offre, tunnel, contenus, tout est challengé et validé par un expert BPC.",
                price: "987€",
                priceLabel: "RETOUR SUR INVESTISSEMENT RAPIDE",
                features: [
                  "Tout le contenu du Starter",
                  "Audit business complet (offre, cible, canal, positionnement)",
                  "4 sessions 1:1 avec un expert BPC (1h/séance)",
                  "Co-création de ton offre avec retours précis",
                  "Relecture et correction de ta landing page et séquences mails",
                ],
                ctaText: "Rejoindre le programme",
                popular: true,
                audience: "Les indépendants sérieux qui veulent exécuter rapidement, ceux qui veulent du feedback et des réponses, ceux qui ont déjà tenté des trucs sans résultat stable.",
                benefits: "Tu valides ton offre avec nous en 7 jours. Tu écris moins, tu testes plus, tu signes plus vite. Tu gagnes des mois de test avec un retour stratégique sur chaque étape.",
                result: "Tu passes de l'idée floue à un système qui vend. Tu clarifies tout, tu construis avec méthode, et tu démarres ta prospection sur des rails."
              },
              {
                title: "SCALE",
                badge: "DÉLÉGATION",
                description: "Tu n'as pas le temps ? Tu veux que ce soit fait pour toi, par une équipe qui l'a déjà fait pour des dizaines de clients B2B à 6 ou 7 chiffres ? On te livre un système d'acquisition prêt à scaler.",
                price: "4.500€",
                priceLabel: "INVESTISSEMENT STRATÉGIQUE",
                features: [
                  "Tout le contenu du Starter + Accélérateur",
                  "Workshop stratégique de 2h (vision, positionnement, objectif)",
                  "Création complète de ton offre et de ton tunnel",
                  "Pack de 20 posts LinkedIn + roadmap de contenu",
                  "3 vidéos tournées et scriptées (VSL, autorité, close)",
                ],
                ctaText: "Passer à l'échelle",
                popular: false,
                audience: "Les solopreneurs qui veulent s'extraire de l'opérationnel, ceux qui ont un business qui tourne et veulent passer à l'échelle, ceux qui veulent déployer un vrai tunnel de vente pro.",
                benefits: "Tu restes focus client, nous on exécute pour toi. Tu récupères un système clé en main testé et validé. Tu peux scaler dès le mois suivant, sans guesswork.",
                result: "Ton système tourne. Tu sais d'où viennent tes leads, ce qu'ils lisent, pourquoi ils achètent. Tu scales proprement, sans y passer tes soirées."
              },
            ].map((product, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-button/20 flex flex-col ${
                  product.popular ? 'border-2 border-button ring-4 ring-button ring-opacity-20' : 'border border-gray-800'
                }`}
              >
                {product.popular && (
                  <div className="bg-button text-primary text-center py-2 font-bold">
                    LE PLUS POPULAIRE
                  </div>
                )}
                <div className="p-8 bg-gray-900/80 backdrop-blur-sm flex-grow flex flex-col h-full">
                  <div>
                    <div className="inline-block bg-button/20 px-3 py-1 rounded-full text-xs font-medium mb-4">
                      {product.badge}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-6">{product.description}</p>
                    <div className="mb-6">
                      <div className="text-xs text-gray-400 mb-1">{product.priceLabel}</div>
                      <div className="text-4xl font-bold">{product.price}</div>
                    </div>
                    
                    {/* Pour qui section */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2 text-button flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Pour qui ?
                      </h4>
                      <p className="text-gray-300 text-sm">{product.audience}</p>
                    </div>
                    
                    {/* Bénéfices section */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-2 text-button flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Bénéfices
                      </h4>
                      <p className="text-gray-300 text-sm">{product.benefits}</p>
                    </div>
                    
                    {/* Ce que tu reçois */}
                    <h4 className="text-lg font-bold mb-3 text-button flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      Ce que tu reçois
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-button mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Résultat attendu */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-2 text-button flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Résultat attendu
                      </h4>
                      <p className="text-gray-300 text-sm">{product.result}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <Button 
                      variant={product.popular ? "primary" : "outline"} 
                      fullWidth
                      href={product.title === "STARTER" ? "/catalogue/starter" : product.title === "ACCÉLÉRATEUR" ? "/catalogue/accelerateur" : product.title === "SCALE" ? "/catalogue/scale" : `#${product.title.toLowerCase()}`}
                      className="group relative overflow-hidden"
                    >
                      <span className="relative z-10">{product.ctaText}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="section bg-gray-900 py-12 md:py-16 px-4 md:px-0">
        <div className="container-custom">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 font-title">Ils nous font confiance</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Des entrepreneurs B2B qui ont transformé leur activité grâce à nos programmes
            </p>
          </div>
          
          {/* Logos Marquee */}
          <div className="relative bg-primary/30 backdrop-blur-sm rounded-xl overflow-hidden mb-6 border border-gray-800/30">
            <div className="absolute top-0 left-0 w-10 sm:w-16 md:w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-10 sm:w-16 md:w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            <div className="py-5 sm:py-6 md:py-8">
              <LogoMarquee />
            </div>
          </div>
        </div>
      </section>

      {/* Incubator Section */}
      <section className="section bg-primary py-12 md:py-16 px-4 md:px-0">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">L&apos;Incubateur BPC</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8">
              Notre programme d&apos;élite sur revshare pour les entrepreneurs B2B ambitieux qui veulent 
              dépasser les 80k€/mois avec une équipe d&apos;associés à leurs côtés.
            </p>
          </div>
          
          <div className="bg-primary rounded-lg p-6 md:p-8 lg:p-12 border border-button mb-10 md:mb-12">
            <div className="md:flex items-start gap-8 lg:gap-12">
              <div className="md:w-7/12 mb-8 md:mb-0">
                <div className="mb-6">
                  <span className="inline-block bg-button text-primary px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm mb-3 md:mb-4">REVSHARE UNIQUEMENT</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Incubateur BPC</h3>
                  <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                    Un programme d'association avec notre équipe d'experts. 3 mois de test et de lancement, puis un partenariat durable où nous devenons de véritables associés dans ton business.
                  </p>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <h4 className="text-base md:text-lg font-bold mb-2 text-button">Pour qui ?</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    → Les entrepreneurs qui veulent se concentrer uniquement sur leur livraison<br />
                    → Ceux qui cherchent de véritables associés pour dépasser les 80k€/mois<br />
                    → Les experts qui excellent dans leur domaine mais pas dans le business
                  </p>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <h4 className="text-base md:text-lg font-bold mb-2 text-button">Ce que nous faisons pour toi</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    Nous prenons la pleine responsabilité de ton succès commercial<br />
                    Nous gérons tout : marketing, vente, opérations, recrutement<br />
                    Nous manageons ton équipe pour toi et optimisons chaque aspect
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  {[
                    {
                      title: "Partenariat complet",
                      description: "Nous devenons tes associés opérationnels et prenons en charge l'intégralité de ton business, sauf ta livraison client."
                    },
                    {
                      title: "Revshare avantageux",
                      description: "Un partenariat basé sur le revshare, alignant parfaitement nos intérêts : si tu gagnes, nous gagnons."
                    },
                    {
                      title: "Phase d'essai",
                      description: "3 mois de test et lancement pour valider la collaboration avant de concrétiser le partenariat à long terme."
                    },
                    {
                      title: "Tu restes le visage",
                      description: "Tu restes l'expert et le visage de ta marque, pendant que nous gérons tous les aspects business en coulisses."
                    },
                  ].map((feature, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-6">
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6 md:mb-8">
                  <h4 className="text-base md:text-lg font-bold mb-2 text-button">Résultat attendu</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    Tu dépasses les 80k€/mois en te concentrant uniquement sur ce que tu aimes faire.<br />
                    Tu bénéficies d'une équipe complète sans avoir à la gérer, la recruter ou la former.<br />
                    Tu construis un véritable actif à long terme, pas seulement un business qui tourne.
                  </p>
                </div>
                
                <Button size="lg" className="w-full md:w-auto" href="https://app.iclosed.io/e/baptistepiocelle/incubateur-bpc">
                  Postuler
                </Button>
              </div>
              
              <div className="md:w-5/12 bg-gray-900 rounded-lg overflow-hidden mt-6 md:mt-0">
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-4 text-button">Disponibilité</h4>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">Places restantes ce mois-ci</span>
                        <span className="text-button font-bold">2/2</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-button h-full rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold">Places prises cette année</span>
                        <span className="text-button font-bold">4/12</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-button h-full rounded-full transition-all duration-1000" style={{ width: '33.33%' }}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-300 mt-4">
                      <span>Phase de test: 3 mois</span>
                      <span>Ensuite: Partenariat</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-4 text-button">Notre engagement</h4>
                    <div className="space-y-4">
                      {[
                        {
                          icon: "🎯",
                          title: "Objectif 80k€/mois",
                          description: "Nous nous engageons à atteindre cet objectif en 6 mois"
                        },
                        {
                          icon: "⚡️",
                          title: "Résultats rapides",
                          description: "Premiers résultats visibles dès la phase de test"
                        },
                        {
                          icon: "🤝",
                          title: "Partenariat long terme",
                          description: "Nous investissons dans ton succès sur le long terme"
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                              <h5 className="font-bold mb-1">{item.title}</h5>
                              <p className="text-sm text-gray-300">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4 text-button">Prochaines étapes</h4>
                    <div className="space-y-3">
                      {[
                        "1. Entretien de qualification",
                        "2. Phase de test (3 mois)",
                        "3. Partenariat officiel",
                        "4. Scaling vers 80k€/mois"
                      ].map((step, index) => (
                        <div key={index} className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                          <div className="w-6 h-6 rounded-full bg-button/20 flex items-center justify-center">
                            <span className="text-button font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">L'incubateur accepte seulement 2 candidats par mois et 12 par an. 4 places ont déjà été prises cette année.</p>
            
            <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg p-4 md:p-6 border border-gray-800 mb-6 md:mb-8">
              <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-left">Critères de sélection</h4>
              
              <ul className="space-y-3 md:space-y-4 text-left">
                {[
                  "Tu génères au moins 10 à 15K€/mois de chiffre d'affaires stable.",
                  "Tu vises clairement le million d'euros par an et tu veux t'en donner les moyens.",
                  "Tu as une offre B2B vendable, même si elle mérite d'être retravaillée.",
                  "Tu veux construire un système de croissance structuré, pas juste signer plus au feeling.",
                  "Tu es prêt à être challengé sur ta stratégie, ton exécution et ton positionnement.",
                  "Tu es disponible pour implémenter chaque semaine (ou faire implémenter).",
                  "Tu es coachable et tu veux t'entourer d'experts.",
                  "Tu es capable de déléguer ou prêt à structurer une équipe efficace.",
                  "Tu cherches une vision long terme, pas une rustine court terme.",
                  "Tu es prêt à investir sérieusement pour scaler ton business B2B."
                ].map((critere, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-button mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{critere}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 md:mt-6 text-gray-300 text-xs md:text-sm">
                Si tu remplis ces critères, tu es probablement un excellent candidat pour notre programme Incubateur.
              </p>
            </div>
            
            <Button href="https://app.iclosed.io/e/baptistepiocelle/incubateur-bpc" size="lg" className="w-full sm:w-auto">
              Postuler maintenant
            </Button>
          </div>
        </div>
      </section>

      {/* BPC Private Scaling Lab Section */}
      <section className="section bg-gray-900 py-12 md:py-16 px-4 md:px-0">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">BPC Private Scaling Lab</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8">
              De 300k€ → 3M€/an. Bâtis un empire, pas juste un business.
            </p>
          </div>
          
          <div className="bg-primary rounded-lg p-6 md:p-8 lg:p-12 border-2 border-button mb-10 md:mb-12">
            <div className="md:flex items-start gap-8 lg:gap-12">
              <div className="md:w-7/12 mb-8 md:mb-0">
                <div className="mb-6">
                  <span className="inline-block bg-button text-primary px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm mb-3 md:mb-4">OFFRE EXCLUSIVE</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">BPC Private Scaling Lab</h3>
                  <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                    Un programme d&apos;accompagnement ultra-personnalisé pour les entrepreneurs B2B qui veulent passer de 300k€ à 3M€/an. Done With You + Done For You.
                  </p>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <h4 className="text-base md:text-lg font-bold mb-2 text-button">Pour qui ?</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    → Entrepreneurs B2B réalisant déjà entre 300k€ et 1M€/an<br />
                    → Dirigeants fatigués d&apos;être l&apos;homme-orchestre<br />
                    → Leaders qui savent qu&apos;atteindre 7 chiffres stables demande structure
                  </p>
                </div>

                <div className="mb-4 md:mb-6">
                  <h4 className="text-base md:text-lg font-bold mb-2 text-button">Investissement</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Cash</h5>
                      <p className="text-2xl font-bold">100 000 €</p>
                      <p className="text-sm text-gray-400">HT</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Plan 12 mois</h5>
                      <p className="text-2xl font-bold">120 000 €</p>
                      <p className="text-sm text-gray-400">10 000 €/mois</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Flex Plan</h5>
                      <p className="text-2xl font-bold">30% upfront</p>
                      <p className="text-sm text-gray-400">3 paliers de 30k€</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <h4 className="text-base md:text-lg font-bold mb-2 text-button">Contenu de l&apos;offre</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Écosystème Business</h5>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li>• (Re)création d&apos;une offre premium &gt;15k€/client</li>
                        <li>• Tunnel d&apos;acquisition complet</li>
                        <li>• CRM & process de closing structurés</li>
                        <li>• Machine de contenu pour 12 mois</li>
                        <li>• Copywriting complet de tous les assets</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Machine d&apos;Acquisition</h5>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li>• Campagnes LinkedIn Ads, Meta Ads, Google Ads</li>
                        <li>• Système outbound (ICP, scraping, cold messaging)</li>
                        <li>• Écosystème organique (SEO, LinkedIn, YouTube)</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Sales Ops & Team Building</h5>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li>• Recrutement de 3 profils clés (12 mois inclus)</li>
                        <li>• Création des SOPs</li>
                        <li>• Formation et intégration</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">Coaching & Advisory</h5>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li>• Call stratégique 1:1 hebdomadaire</li>
                        <li>• Accès WhatsApp direct (réponse &lt; 4h)</li>
                        <li>• Audit stratégique trimestriel</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <h4 className="text-base md:text-lg font-bold mb-2 text-button">Garantie inégalée</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    &quot;We Work Until You Double&quot; - On s&apos;engage à rester avec toi au-delà des 12 mois, sans supplément, tant que ton chiffre d&apos;affaires net n&apos;a pas au minimum doublé.
                  </p>
                </div>

                <div className="mb-4 md:mb-6">
                  <h4 className="text-base md:text-lg font-bold mb-2 text-button">Next Step</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    Candidature express (3 min) ➔ Call de sélection (30 min) ➔ Signature ➔ Onboarding
                  </p>
                  <p className="text-button text-sm mt-2">
                    ⚡️ Les candidatures 2025 sont strictement limitées à 5 nouveaux membres.
                  </p>
                </div>
              </div>

              <div className="md:w-5/12">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-4 text-button">Ce que tu économises</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-button mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Consultant acquisition: 40 000 €</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-button mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Agence contenu 12 mois: 20 000 €</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-button mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Copywriter senior: 15 000 €</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-button mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Coach exécutif: 30 000 €</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-button mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Recrutement & salaires: 60 000 €</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-button mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Retraites et masterminds: 15 000 €</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-lg font-bold">Total: ≈ 180 000 €</p>
                    <p className="text-sm text-gray-400">sans Codex ni garantie de résultats</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button 
                    variant="primary" 
                    fullWidth
                    href="#contact"
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10">Candidater maintenant</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section bg-gray-900 py-12 md:py-16 px-4 md:px-0 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4 border border-button/30">
              <p className="text-sm md:text-base font-medium">
                Résultats concrets
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 font-title bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Témoignages vidéo
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez les résultats obtenus par nos clients
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Yann Grosjean",
                role: "CEO de Lugus",
                title: "+20 000€ générés dès le premier lancement",
                videoId: "al1OJeYur9Y",
                timestamp: "691",
                profileImage: "/Yann Grosjean.jpeg"
              },
              {
                name: "Léon",
                role: "Entrepreneur B2B",
                title: "De 0 à 30k€/mois en 90 jours",
                videoId: "K2YsABjkRiE",
                timestamp: "42"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group bg-primary/30 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-button/20">
                <div className="relative aspect-video bg-graph">
                  {testimonial.videoId ? (
                    <a 
                      href={`https://www.youtube.com/watch?v=${testimonial.videoId}${testimonial.timestamp ? `&t=${testimonial.timestamp}s` : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <Image
                        src={`https://i.ytimg.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                        alt={`Témoignage de ${testimonial.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="inline-block bg-button/20 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    TÉMOIGNAGE CLIENT
                  </div>
                  <h3 className="font-bold text-lg mb-3">{testimonial.title}</h3>
                  <div className="flex items-center">
                    {testimonial.profileImage ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 relative">
                        <Image
                          src={testimonial.profileImage}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-button rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-bold text-sm">{testimonial.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="section bg-primary py-12 px-4">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 font-title">Témoignages écrits</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez les retours d'expérience de nos clients
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Testimonials Grid */}
            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    quote: "Le formateur : un vrai expert du sujet. Il a une très bonne connaissance de la plateforme LinkedIn et du fonctionnement de l'algo. Baptiste utilise le copywriting et quelques techniques de SEO pour optimiser les posts.\n\nLa dynamique de groupe : 10 personnes avec une entraide quotidienne. Chaque stagiaire échange sur les réussites et les échecs.",
                    name: "Jean-Michel LY",
                    role: "Entrepreneur B2B",
                  },
                  {
                    quote: "+300 000€ générés en 75 jours via une stratégie de contenu LinkedIn\n\nOn a lancé 35 posts en 75 jours. Résultat : +1,7M de vues, 4 posts viraux, +4000 abonnés, et plus de 300 000€ générés.\n\nCe n'est pas juste du contenu. C'est une stratégie testée, analysée, optimisée.\n\nOn savait quoi poster, à quel moment, et comment convertir.",
                    name: "Anaïs R.",
                    role: "CEO de A&C",
                  },
                  {
                    quote: "J'ai grandement apprécié le professionnalisme et l'efficacité de Baptiste. En gardant une trame générale de sa formation, il réussit aussi à s'adapter aux besoins et profils de chacun. Cela permet de se booster et de gagner en compétence avec une rapidité sans précédent ! ⚡",
                    name: "Joris Genty",
                    role: "Entrepreneur",
                  },
                  {
                    quote: "Si tu lis ça, c'est sûrement que t'es en train de zieuter la page de Baptiste et hésiter à rejoindre son programme.\n\nJ'ai été accompagnée par Baptiste pendant près de 3 mois. Résultat :\n– Des posts LinkedIn à +20k vues alors que j'avais même pas 100 contacts.\n– Création de ma newsletter La Taverne avec d'excellents retours.\n– Conversations riches suite à mes posts.",
                    name: "Axelle Guer",
                    role: "Entrepreneure",
                  },
                  {
                    quote: "+75% de rentabilité sur 6 mois sans recruter ni déléguer dans tous les sens\n\nJe voulais scaler sans sacrifier ma liberté. En quelques semaines, j'ai restructuré mes offres, internalisé l'acquisition, et lancé un système qui tourne.\n\nAujourd'hui, je sais exactement où va chaque euro, chaque heure. Je fais plus de cash, avec moins d'efforts et surtout, sans team à gérer.",
                    name: "CEO anonyme",
                    role: "Prestataire B2B indépendant",
                  },
                  {
                    quote: "Grâce à Baptiste j'ai réussi à préparer un nombre de posts LinkedIn que je n'aurais pas imaginé avant son coaching. Ses explications sont limpides, ses trames faciles à mettre en œuvre. Il est disponible et super cool.",
                    name: "Guillaume",
                    role: "Client B2B",
                  },
                  {
                    quote: "Je te trouve direct, tranché et brut, et c'est ça que je recherche dans les formats vidéos + des preuves à l'appui/démos etc...\n\nLa majorité des éléments sont pertinents et ont du sens, il y a une cohérence, c'est bien construit. J'ai beaucoup de clés pour tout déchirer maintenant !",
                    name: "Samantha Piat",
                    role: "Entrepreneure",
                  },
                  {
                    quote: "+20 000€ générés dès le premier lancement avec un système de vente entièrement délégué\n\nTout a été mis en place sans que j'aie à lever le petit doigt : tunnel, mails, pub, VSL, prise de rendez-vous, setting, closing.\n\nDe mon côté ? J'ai juste conçu un programme utile, fait les bons choix stratégiques avec eux… et livré l'accompagnement.",
                    name: "Yann Grosjean",
                    role: "CEO de Lugus",
                  },
                  {
                    quote: "Et pour se former au mieux >>> allez voir directement Baptiste Piocelle. Un super bootcamp que j'ai suivi : Simple, Complet, Actionnable, Résultats à la clef ❤️",
                    name: "Giacomo Genna",
                    role: "Entrepreneur",
                  },
                  {
                    quote: "Autant pour une personne expérimentée que pour un débutant, la formation de Baptiste est une vraie mine d'or. En quelques heures, j'ai radicalement changé ma façon de créer du contenu sur les plateformes.",
                    name: "Thierry Lorfils",
                    role: "Expert contenu",
                  },
                  {
                    quote: "Baptiste m'a aidé à y voir plus clair pour me lancer dans l'écriture sur LinkedIn. En 1h, j'ai eu un plan d'action efficace avec un ensemble d'outils pour m'aider dans l'écriture et la publication.",
                    name: "Mathieu",
                    role: "Entrepreneur B2B",
                  },
                  {
                    quote: "J'ai apprécié ton écoute et ta grande expertise. J'ai énormément appris, tu es objectif et nous avons eu un réel échange bénéfique. Tu m'as aidé à améliorer mon profil et le rendre plus efficient.",
                    name: "Rousset",
                    role: "Client",
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 relative hover:bg-gray-900/70 transition-colors duration-300">
                    <svg className="h-8 w-8 text-title opacity-20 absolute top-4 right-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-button rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-bold text-xs">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial.to Embed */}
            <div className="lg:w-1/3 h-[800px] bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden">
              <iframe
                src="https://embed.testimonial.to/w/baptiste-piocelle/?animated=on&theme=light&shadowColor=ffffff"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Témoignages en direct"
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-primary py-12 md:py-16 px-4 md:px-0">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4 border border-button/30">
              <p className="text-sm md:text-base font-medium">
                Tout savoir
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 font-title bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Questions fréquentes</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tu as des questions sur nos programmes ? Consulte notre FAQ ci-dessous.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {[
              {
                question: "Quelle solution est la plus adaptée pour moi?",
                answer: "Tout dépend de ta situation et de tes objectifs. STARTER (99€) est idéal pour démarrer avec la méthode BPC en autonomie. ACCÉLÉRATEUR (987€) convient si tu veux être guidé dans la mise en œuvre. SCALE (4.500€) est pour ceux qui veulent déléguer la création de leur système. L'INCUBATEUR est pour ceux qui veulent nous avoir comme associés et dépasser les 80k€/mois."
              },
              {
                question: "Puis-je évoluer d'un programme à l'autre?",
                answer: "Absolument! Nos programmes sont conçus pour évoluer avec tes besoins. Tu peux commencer par STARTER, puis passer à l'ACCÉLÉRATEUR ou SCALE, et ensuite candidater à l'INCUBATEUR lorsque tu veux passer à l'échelle avec nous comme associés. Nous déduisons toujours le montant déjà investi."
              },
              {
                question: "Quelle est la différence entre SCALE et l'INCUBATEUR?",
                answer: "SCALE est un service ponctuel où nous créons ton système d'acquisition pour toi, avec un support de 30 jours. L'INCUBATEUR est un véritable partenariat basé sur le revshare où nous devenons tes associés après une phase de test de 3 mois. Nous prenons en charge tous les aspects de ton business sauf ta livraison client."
              },
              {
                question: "Comment fonctionne le modèle de revshare de l'INCUBATEUR?",
                answer: "L'INCUBATEUR démarre par une phase de test de 3 mois, puis nous devenons officiellement tes associés. Nous partageons les revenus générés, ce qui aligne parfaitement nos intérêts. Les détails exacts du revshare sont discutés lors de l'entretien initial, car ils dépendent de ton business et de son potentiel."
              },
              {
                question: "Que se passe-t-il après les 3 mois de test de l'INCUBATEUR?",
                answer: "Si la phase de test est concluante, nous officialisons le partenariat et continuons à développer ton business ensemble sur le long terme. Nous nous occupons de tout l'aspect business pendant que tu te concentres sur ta livraison client et ton expertise."
              },
              {
                question: "Y a-t-il une garantie avec l'INCUBATEUR?",
                answer: "L'INCUBATEUR fonctionne avec une phase de test de 3 mois qui sert de période d'évaluation mutuelle. Notre rémunération étant basée sur le revshare, nous ne gagnons que si tu gagnes, ce qui constitue la meilleure garantie d'alignement possible. Nous sommes 100% investis dans ton succès."
              },
            ].map((item, index) => (
              <div key={index} className="group bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800/30 hover:border-button/30 transition-colors duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-xl font-bold group-hover:text-button transition-colors">{item.question}</h3>
                    <div className="w-8 h-8 rounded-full bg-button/20 flex items-center justify-center group-hover:bg-button/30 transition-all">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-button/20 to-primary">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container-custom relative z-10 px-4 md:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-button/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-button/30">
              <p className="text-sm md:text-base font-medium">
                Plus de 200 entrepreneurs B2B accompagnés
              </p>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Prêt à faire décoller ton business B2B ?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10">
              Que tu commences avec STARTER ou que tu sois prêt pour SCALE, nous avons la solution adaptée à ton niveau et à tes objectifs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-8 md:mb-10">
              <Button href="#" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 group relative overflow-hidden">
                <span className="relative z-10">Choisir mon programme</span>
                <div className="absolute inset-0 bg-gradient-to-r from-button/0 via-button/30 to-button/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              <Link href="https://app.iclosed.io/e/baptistepiocelle/diagnostic-b2b" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 group relative overflow-hidden">
                  <span className="relative z-10">Prendre RDV pour un diagnostic</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/0 via-gray-800/30 to-gray-800/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <p className="text-2xl md:text-3xl font-bold text-button mb-2">200+</p>
                <p className="text-sm text-gray-400">Clients satisfaits</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <p className="text-2xl md:text-3xl font-bold text-button mb-2">95%</p>
                <p className="text-sm text-gray-400">Taux de satisfaction</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <p className="text-2xl md:text-3xl font-bold text-button mb-2">24h</p>
                <p className="text-sm text-gray-400">Accès immédiat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 