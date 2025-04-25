'use client'

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface ExtendedTeamMember {
  name: string;
  achievement: string;
  image?: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
}

const cardVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  }
}

const textGradient = "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"

const serviceCategories = [
  {
    icon: "🎯",
    title: "Strategy & Offer Building",
    items: [
      "Positioning Blueprint (ICP, messaging, differentiation)",
      "Offer Architecture",
      "Value Ladder Mapping"
    ]
  },
  {
    icon: "⚙️",
    title: "Acquisition Systems",
    items: [
      "Outbound Machine (LinkedIn & email)",
      "Inbound Content System (YouTube, LinkedIn, Newsletter, Telegram)",
      "Paid Ads Frameworks (Meta & Google Ads, VSL-based)"
    ]
  },
  {
    icon: "🧠",
    title: "Conversion & Automation",
    items: [
      "Funnel Architecture (Notion + GHL)",
      "Evergreen VSL Systems",
      "AI-Driven Lead Nurturing"
    ]
  },
  {
    icon: "🧩",
    title: "Delivery Optimization",
    items: [
      "Async Client Onboarding (Notion, Loom, SOPs)",
      "AI Delivery Agents",
      "Modular Productization of Services"
    ]
  },
  {
    icon: "🛠",
    title: "Digital Products & Assets",
    items: [
      "Starter Kit (99€)",
      "Accélérateur (987€)",
      "Scale Program (4.500€)"
    ]
  },
  {
    icon: "🧨",
    title: "Premium Programs",
    items: [
      "BPC Incubator (10k€ setup + 2k€/month)",
      "Thérapreneur (10k€ DWY / 20k€ DFY)",
      "Boost ton Cab (3.400€)"
    ]
  },
  {
    icon: "🔁",
    title: "Recurring Leverage",
    items: [
      "Equity Partnerships",
      "Performance Deals",
      "Community Coaching & Support"
    ],
    highlight: true
  }
]

const metrics = [
  { title: "Revenue Generated", value: "17M€+", subtitle: "for our clients", priority: true },
  { title: "Content Views", value: "35M+", subtitle: "across platforms", priority: true },
  { title: "Growth Experience", value: "5", subtitle: "years in business", priority: true },
  { title: "B2B Clients", value: "200+", subtitle: "since 2021" },
  { title: "Sales Teams Built", value: "150+", subtitle: "€14M+ generated" },
  { title: "Trained Entrepreneurs", value: "2000+", subtitle: "across programs" },
  { title: "Community Members", value: "175k+", subtitle: "engaged followers" },
  { title: "Commitment", value: "100%", subtitle: "passion & engagement" }
]

const caseStudies = [
  {
    title: "B2B Agency Case Study",
    result: "+75k€ Revenue Increase",
    timeframe: "in 2 weeks with new funnel implementation"
  }
]

const teamMembers: TeamMember[] = [
  {
    name: "Baptiste Piocelle",
    role: "Founder & CEO",
    image: "/founder1.jpg"
  },
  {
    name: "Rémi Bouder",
    role: "COO (Tech, Systems, Productization)",
    image: "/Rémi.jpeg"
  },
  {
    name: "Bryan Alvites",
    role: "CSM (Delivery & Support)",
    image: "/1730449304405.jpeg"
  },
  {
    name: "Etienne Debien",
    role: "Head of Business Content",
    image: "/WhatsApp Image 2025-04-07 at 13.14.58.jpeg"
  },
  {
    name: "Zacharie Piocelle",
    role: "Creative Director (Main YouTube)",
    image: "/Zacharie Piocelle.jpeg"
  },
  {
    name: "Hugo Martinez",
    role: "Head of Paid Acquisition",
    image: "/2230058-hugo-martinez-766x438.jpg"
  },
  {
    name: "Léon Mullman",
    role: "Head of Copy",
    image: "/1728625826972.jpeg"
  }
]

const extendedTeam: ExtendedTeamMember[] = [
  {
    name: "AI Engineers",
    achievement: "Internal agent design for acquisition/delivery"
  },
  {
    name: "Sales Ops",
    achievement: "150+ sales teams deployed"
  },
  {
    name: "Ops Experts",
    achievement: "50+ Notion & GHL growth systems delivered"
  }
]

// Update the clientJourney constant
const clientJourney = [
  {
    step: 1,
    title: "Discovery",
    description: "Discovers our masterclass",
    icon: "🔍",
    color: "from-blue-500 to-blue-600"
  },
  {
    step: 2,
    title: "Training",
    description: "Completes the training program",
    icon: "📚",
    color: "from-purple-500 to-purple-600"
  },
  {
    step: 3,
    title: "Consulting",
    description: "Invests €20k in personalized consulting",
    icon: "💎",
    color: "from-pink-500 to-pink-600"
  },
  {
    step: 4,
    title: "Rev Share",
    description: "We develop their acquisition with revenue sharing",
    icon: "🚀",
    color: "from-blue-500 to-blue-600"
  },
  {
    step: 5,
    title: "Equity",
    description: "We partner to structure their business",
    icon: "🤝",
    color: "from-purple-500 to-purple-600"
  }
]

export default function InternationalPresentation() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const springY = useSpring(backgroundY, { 
    stiffness: 50, 
    damping: 20,
    restSpeed: 0.5
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: springY, willChange: "transform" }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        ></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center relative"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container mx-auto px-4 z-10 text-center"
        >
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-8xl md:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
            >
              BPC Group
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-4xl mt-8 text-gray-300 font-light tracking-wider"
          >
            Shaping the Future of Business
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-3xl mt-4 text-gray-400 font-light"
          >
            Building Powerful Connections
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <div className="w-24 h-24 border-2 border-white/20 rounded-full mx-auto relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-blue-500 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-purple-500 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-pink-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Company Overview */}
        <motion.section 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
        >
          {/* Background Elements */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Founder Section */}
              <motion.div 
                variants={itemVariants} 
                className="space-y-12"
              >
                <h2 className={`text-6xl font-bold ${textGradient} text-center md:text-left`}>
                  Founder
                </h2>
                <div className="space-y-8">
                  <div className="relative w-72 h-72 mx-auto md:mx-0">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/founder1.jpg" 
                        alt="Baptiste Piocelle" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left space-y-4">
                    <h3 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                      Baptiste Piocelle
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Serial entrepreneur, growth strategist, copywriter, and advisor to B2B founders.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Platform Section */}
              <motion.div 
                variants={itemVariants} 
                className="space-y-12"
              >
                <h2 className={`text-6xl font-bold ${textGradient} text-center md:text-left`}>
                  Our Platform
                </h2>
                <div className="space-y-8">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300">
                    <a 
                      href="https://masterclass.bpcorp.eu" 
                      className="inline-block text-3xl text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      masterclass.bpcorp.eu
                      <span className="block text-sm text-gray-400 mt-2">(currently in French, English version in progress)</span>
                    </a>
                  </div>
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl leading-relaxed">
                      Our masterclass platform is a comprehensive learning ecosystem designed to empower B2B founders and entrepreneurs with cutting-edge strategies and tools.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>
                          <span>Access to exclusive training modules and resources</span>
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <span className="w-3 h-3 bg-purple-500 rounded-full mt-2"></span>
                          <span>Live sessions with industry experts and successful entrepreneurs</span>
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <span className="w-3 h-3 bg-pink-500 rounded-full mt-2"></span>
                          <span>Practical tools and templates for immediate implementation</span>
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>
                          <span>Community support and networking opportunities</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
        >
          {/* Background Elements */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              variants={itemVariants} 
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className={`text-7xl font-bold ${textGradient} mb-8`}>
                  Mission
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Mission Statement */}
                <motion.div
                  variants={itemVariants}
                  className="md:col-span-3 p-12 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300"
                >
                  <p className="text-3xl text-gray-300 leading-relaxed text-center">
                    To revolutionize the business landscape by creating powerful connections and delivering innovative solutions that drive sustainable growth and success.
                  </p>
                </motion.div>

                {/* Key Pillars */}
                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                  <p className="text-gray-300">
                    Pushing boundaries and embracing cutting-edge technologies to create transformative solutions.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-2xl font-semibold mb-4">Connection</h3>
                  <p className="text-gray-300">
                    Building powerful networks and fostering meaningful relationships in the business ecosystem.
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-2xl font-semibold mb-4">Growth</h3>
                  <p className="text-gray-300">
                    Driving sustainable success through strategic planning and execution excellence.
                  </p>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.1, 0.2]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Service Ecosystem */}
        <motion.section 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
        >
          {/* Background Elements */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              variants={itemVariants}
              className={`text-5xl md:text-7xl font-bold text-center mb-12 md:mb-16 ${textGradient}`}
            >
              Full Service Ecosystem
            </motion.h2>

            {/* Client Journey */}
            <motion.div
              variants={itemVariants}
              className="max-w-6xl mx-auto mb-12 md:mb-20 px-4"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Client Journey
              </h3>
              <div className="relative">
                {/* Connection Line - Hidden on mobile */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2"></div>
                
                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 lg:gap-8 relative">
                  {clientJourney.map((step, index) => (
                    <motion.div
                      key={step.step}
                      variants={itemVariants}
                      className="relative group"
                    >
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${step.color} p-1 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-2xl md:text-3xl">
                          {step.icon}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl md:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                          {step.title}
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gray-800 border-2 border-white/10 flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className={`p-6 md:p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300 group ${
                    category.highlight ? 'md:col-span-2 lg:col-span-3 relative overflow-hidden' : ''
                  }`}
                >
                  {category.highlight && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                      animate={{
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                      {category.title}
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start text-sm md:text-base">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {category.highlight && (
                      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
                        <p className="text-gray-300 text-sm md:text-base italic">
                          Our most valuable offering, designed to create long-term partnerships and sustainable growth.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements - Hidden on mobile */}
            <motion.div
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-white/5"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.1, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.section>

        {/* Success Metrics */}
        <motion.section 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-transparent via-gray-800/20 to-transparent"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              variants={itemVariants}
              className={`text-5xl font-bold text-center mb-16 ${textGradient}`}
            >
              Success Metrics & Impact
            </motion.h2>

            {/* All Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Priority Metrics - Full Width */}
              {metrics.filter(m => m.priority).map((metric, index) => (
                <motion.div
                  key={metric.title}
                  variants={itemVariants}
                  className="lg:col-span-4/3 p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/20 text-center hover:from-gray-800/40 hover:to-gray-900/40 transition-all duration-300 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-300">{metric.title}</h3>
                    <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-2">{metric.value}</p>
                    <p className="text-sm md:text-base text-gray-400">{metric.subtitle}</p>
                  </div>
                </motion.div>
              ))}

              {/* Secondary Metrics */}
              {metrics.filter(m => !m.priority).map((metric, index) => (
                <motion.div
                  key={metric.title}
                  variants={itemVariants}
                  className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 text-center hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300 group"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-300">{metric.title}</h3>
                  <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-1">{metric.value}</p>
                  <p className="text-sm md:text-base text-gray-400">{metric.subtitle}</p>
                </motion.div>
              ))}

              {/* Case Study */}
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300 group"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-300">{study.title}</h3>
                  <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{study.result}</p>
                  <p className="text-sm md:text-base text-gray-400">{study.timeframe}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Operational Edge */}
        <motion.section 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
        >
          {/* Background Elements */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <div className="container mx-auto px-4">
            <motion.h2 
              variants={itemVariants}
              className={`text-5xl md:text-6xl font-bold text-center mb-16 ${textGradient}`}
            >
              Operational Edge
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Left Column - Main Features */}
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        AI-Powered Delivery
                      </h3>
                      <p className="text-gray-300">
                        100% async, remote, and AI-powered delivery system ensuring consistent quality and scalability
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Elite Network
                      </h3>
                      <p className="text-gray-300">
                        No employees – exclusively working with elite freelancers & automation agents
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Additional Features */}
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Proprietary Systems
                      </h3>
                      <p className="text-gray-300">
                        Custom-built tools & playbooks in Notion + GHL for maximum efficiency
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        24/7 Scalable Systems
                      </h3>
                      <p className="text-gray-300">
                        Integrated CRM, onboarding, coaching, and VSL systems running round the clock
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Feature - Highlight */}
            <motion.div
              variants={itemVariants}
              className="mt-12 max-w-4xl mx-auto"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/20 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10 flex items-center justify-center text-center">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl">💫</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                      Future-Ready Infrastructure
                    </h3>
                    <p className="text-xl text-gray-300">
                      Built for scale, optimized for growth, ready for tomorrow
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why We're Looking for Capital */}
        <motion.section 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
        >
          {/* Background Elements */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <div className="container mx-auto px-4">
            <motion.h2 
              variants={itemVariants}
              className={`text-5xl md:text-6xl font-bold text-center mb-16 ${textGradient}`}
            >
              Why We're Looking for Capital
            </motion.h2>

            <div className="max-w-6xl mx-auto">
              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Left Column - Main Message */}
                <div className="space-y-8">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                      Scaling a Proven Engine
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      We're not raising money to survive — we're scaling a proven engine.
                    </p>
                  </div>
                </div>

                {/* Right Column - Goals */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">We're looking to unlock:</h3>
                  <div className="space-y-4">
                    {[
                      "Credit leverage via local backers or guarantees",
                      "Scale AI systems and acquisition channels",
                      "Expand to international markets (EN-speaking)"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 flex items-center space-x-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                          <span className="text-lg">→</span>
                        </div>
                        <p className="text-gray-300">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Bottom Message */}
              <motion.div
                variants={itemVariants}
                className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/20 text-center relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-300">
                    Traditional banks don't understand our structure.<br />
                    We're looking for smart financial partners who do.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Vision & Opportunity */}
        <motion.section 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              variants={itemVariants}
              className={`text-5xl md:text-6xl font-bold text-center mb-16 ${textGradient}`}
            >
              Vision & Opportunity
            </motion.h2>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Market Context */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-8"
                >
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-2xl">🌍</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Market Context
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        "AI + hiring crisis = perfect moment for lean, automated companies",
                        "Explosion of B2B solopreneurs lacking structure",
                        "BPC is among the first to deliver full-stack business systems async"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                          <p className="text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Roadmap 2025 */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-8"
                >
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-2xl">📅</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Roadmap 2025
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Internal SaaS agents (copy, CRM, delivery, content)",
                        "International expansion (UK, US, DACH)",
                        "White-label Notion + GHL system licensing",
                        "100M+ content views",
                        "Launch of private equity arm for founders"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                          <p className="text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Vision Statement */}
              <motion.div
                variants={itemVariants}
                className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/20 text-center relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    Our Vision
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-300">
                    Building the future of business automation and growth infrastructure
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Team & Contact */}
        <motion.section 
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
        >
          {/* Background Elements */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <div className="container mx-auto px-4">
            <motion.h2 
              variants={itemVariants}
              className={`text-5xl md:text-6xl font-bold text-center mb-16 ${textGradient}`}
            >
              Team & Contact
            </motion.h2>

            {/* Core Team */}
            <div className="max-w-7xl mx-auto mb-16">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              >
                Core Team
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    variants={itemVariants}
                    className="p-6 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300 group"
                  >
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        {member.name}
                      </h4>
                      <p className="text-gray-400">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Extended Team */}
            <div className="max-w-7xl mx-auto mb-16">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              >
                Extended Team
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {extendedTeam.map((member, index) => (
                  <motion.div
                    key={member.name}
                    variants={itemVariants}
                    className="p-6 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-white/10 hover:from-gray-800/30 hover:to-gray-900/30 transition-all duration-300 group"
                  >
                    {member.image ? (
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">⚡</span>
                      </div>
                    )}
                    <div className="text-center">
                      <h4 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        {member.name}
                      </h4>
                      <p className="text-gray-400">{member.achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <motion.div
              variants={itemVariants}
              className="max-w-4xl mx-auto"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/20 text-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    Get in Touch
                  </h3>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <a 
                      href="mailto:hello@bpcorp.eu" 
                      className="flex items-center space-x-3 text-xl text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="text-2xl">📩</span>
                      <span>hello@bpcorp.eu</span>
                    </a>
                    <a 
                      href="tel:+33695529781" 
                      className="flex items-center space-x-3 text-xl text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="text-2xl">📞</span>
                      <span>+33 6 95 52 97 81</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
} 