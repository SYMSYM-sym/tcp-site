import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Instagram, Youtube, Music2, Zap, Users, Flame } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerChildren'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import CountUp from '../components/animations/CountUp'
import { creators, creatorCategories } from '../data/creators'

const platformIcons = {
  Instagram: Instagram,
  TikTok: Music2,
  YouTube: Youtube,
}

const stats = [
  { label: 'Creators', end: 2500, suffix: '+' },
  { label: 'Categories', end: 8 },
  { label: 'Avg. Engagement', end: 7.2, suffix: '%' },
  { label: 'Platforms', end: 3 },
]

export default function Creators() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredCreators = activeFilter === 'All'
    ? creators
    : creators.filter(creator => creator.category === activeFilter)

  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-900">
        {/* ============ HERO SECTION ============ */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-radial from-gold-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-radial from-gold-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container-custom text-center max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge variant="gold">CREATOR NETWORK</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              2,500+ Vetted Creators Ready to <span className="text-gold-500">Elevate Your Brand</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/60 mb-12 leading-relaxed"
            >
              Discover authentic voices across lifestyle, beauty, fitness, tech, food, fashion, and travel.
              Find your perfect creator match and launch campaigns that resonate.
            </motion.p>
          </div>
        </section>

        {/* ============ STATS STRIP ============ */}
        <section className="section-padding border-b border-white/5 bg-dark-800/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="text-center">
                    <div className="font-serif text-3xl md:text-4xl font-bold text-gold-500 mb-2">
                      <CountUp end={stat.end} prefix={stat.prefix || ''} suffix={stat.suffix || ''} />
                    </div>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CATEGORY FILTER ============ */}
        <section className="section-padding border-b border-white/5">
          <div className="container-custom">
            <FadeIn>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {creatorCategories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    layout
                    className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 border ${
                      activeFilter === category
                        ? 'bg-gold-500 text-dark-900 border-gold-500 shadow-lg shadow-gold-500/20'
                        : 'border-white/10 text-white/70 hover:text-white hover:border-white/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============ CREATORS GRID ============ */}
        <section className="section-padding">
          <div className="container-custom">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {filteredCreators.map((creator) => (
                  <StaggerItem key={creator.id}>
                    <Card className="flex flex-col h-full">
                      {/* Avatar */}
                      <div className="relative -mx-8 -mt-8 mb-4">
                        <div className="w-full h-48 overflow-hidden">
                          <motion.img
                            src={creator.image}
                            alt={creator.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                          <div className="w-24 h-24 rounded-full border-4 border-dark-800 overflow-hidden bg-dark-700">
                            <img
                              src={creator.image}
                              alt={creator.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col pt-8">
                        <Badge variant="gold" className="mb-3 w-fit">
                          {creator.category}
                        </Badge>

                        <h3 className="font-serif text-lg font-bold text-white">
                          {creator.name}
                        </h3>
                        <p className="text-white/60 text-sm mb-4">{creator.handle}</p>

                        {/* Followers & Engagement */}
                        <div className="grid grid-cols-2 gap-3 mb-5 pb-5 border-b border-white/5">
                          <div>
                            <p className="text-gold-500 font-bold">{creator.followers}</p>
                            <p className="text-white/50 text-xs">Followers</p>
                          </div>
                          <div>
                            <p className="text-gold-500 font-bold">{creator.engagement}</p>
                            <p className="text-white/50 text-xs">Engagement</p>
                          </div>
                        </div>

                        {/* Platform Icons */}
                        <div className="flex gap-2 mb-5">
                          {creator.platforms.map((platform) => {
                            const Icon = platformIcons[platform] || Zap
                            return (
                              <motion.div
                                key={platform}
                                whileHover={{ scale: 1.2 }}
                                className="p-2 bg-white/5 rounded-lg border border-white/10"
                                title={platform}
                              >
                                <Icon className="w-4 h-4 text-gold-500" />
                              </motion.div>
                            )
                          })}
                        </div>

                        {/* Specialties */}
                        <div className="flex-1">
                          <p className="text-white/70 text-xs font-semibold mb-2">Specialties</p>
                          <div className="flex flex-wrap gap-2">
                            {creator.specialties.slice(0, 2).map((specialty) => (
                              <span
                                key={specialty}
                                className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded"
                              >
                                {specialty}
                              </span>
                            ))}
                            {creator.specialties.length > 2 && (
                              <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded">
                                +{creator.specialties.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.button
                          whileHover={{ y: -2 }}
                          className="mt-4 w-full py-2.5 bg-gold-500/10 text-gold-500 border border-gold-500/20 rounded-lg font-semibold text-sm hover:bg-gold-500/20 transition-colors"
                        >
                          Collaborate
                        </motion.button>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ============ JOIN CTA SECTION ============ */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-radial from-gold-500/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 -left-40 w-80 h-80 bg-gradient-radial from-gold-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <FadeIn direction="left">
                <div>
                  <Badge variant="gold" className="mb-4">
                    JOIN US
                  </Badge>

                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                    Are you a creator?
                  </h2>

                  <p className="text-lg text-white/60 mb-8 leading-relaxed">
                    Join our network of 2,500+ vetted creators and unlock premium brand partnerships,
                    guaranteed pay rates, and unlimited earning potential. We handle everything from
                    negotiations to payments.
                  </p>

                  <ul className="space-y-4 mb-10">
                    {[
                      'Vetted brand partnerships only',
                      'Competitive rates and guaranteed pay',
                      'Flexible campaign terms',
                      'Dedicated creator support',
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 text-white/80"
                      >
                        <Flame className="w-5 h-5 text-gold-500 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <Button variant="primary" href="/contact" icon={true}>
                    Apply Now
                  </Button>
                </div>
              </FadeIn>

              {/* Right side - Visual */}
              <FadeIn direction="right" delay={0.2}>
                <div className="relative h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-gold-500/5 rounded-2xl border border-gold-500/20 flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-center"
                    >
                      <Flame className="w-20 h-20 text-gold-500/30 mx-auto mb-4" />
                      <p className="text-white/40 font-serif text-xl">
                        Ready to grow your audience and earnings?
                      </p>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
