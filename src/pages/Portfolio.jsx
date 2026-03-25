import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, ExternalLink, Zap, Users, TrendingUp } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerChildren'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { portfolio, categories } from '../data/portfolio'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredPortfolio = activeFilter === 'All'
    ? portfolio
    : portfolio.filter(item => item.category === activeFilter)

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
              <Badge variant="gold">OUR WORK</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              Results That Speak for <span className="text-gold-500">Themselves</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/60 mb-12 leading-relaxed"
            >
              Discover how we've scaled brands across beauty, fitness, tech, and more with creator-led campaigns.
            </motion.p>
          </div>
        </section>

        {/* ============ FILTER BAR ============ */}
        <section className="section-padding border-b border-white/5">
          <div className="container-custom">
            <FadeIn>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {categories.map((category) => (
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

        {/* ============ PORTFOLIO GRID ============ */}
        <section className="section-padding">
          <div className="container-custom">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPortfolio.map((item, idx) => (
                  <StaggerItem key={item.id}>
                    <motion.div
                      layoutId={`portfolio-${item.id}`}
                      onClick={() => setSelectedItem(item)}
                      className="group cursor-pointer"
                    >
                      <Card className="h-full flex flex-col overflow-hidden">
                        {/* Image with overlay */}
                        <div className="relative overflow-hidden h-48 mb-6">
                          <motion.img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                          />
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent flex items-end p-4"
                          >
                            <div className="w-full">
                              <p className="text-white/70 text-sm mb-2">View Case Study</p>
                              <div className="grid grid-cols-2 gap-3 text-xs text-white/60">
                                <div>
                                  <p className="text-gold-500 font-bold">{item.results.views}</p>
                                  <p>Views</p>
                                </div>
                                <div>
                                  <p className="text-gold-500 font-bold">{item.results.engagement}</p>
                                  <p>Engagement</p>
                                </div>
                                <div>
                                  <p className="text-gold-500 font-bold">{item.results.roas}</p>
                                  <p>ROAS</p>
                                </div>
                                <div>
                                  <p className="text-gold-500 font-bold">{item.results.conversions}</p>
                                  <p>Conversions</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <Badge variant="gold" className="mb-4 w-fit">
                            {item.category}
                          </Badge>
                          <h3 className="font-serif text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-white/60 text-sm mb-4 flex-1">
                            {item.client}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ============ CASE STUDY DETAIL MODAL ============ */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                layoutId={`portfolio-${selectedItem.id}`}
                onClick={(e) => e.stopPropagation()}
                className="bg-dark-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              >
                {/* Close button */}
                <div className="sticky top-0 bg-dark-800 border-b border-white/10 p-6 flex justify-between items-center">
                  <h2 className="font-serif text-2xl font-bold text-white">Case Study</h2>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Image */}
                  <div className="w-full h-64 overflow-hidden rounded-lg">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Header */}
                  <div>
                    <Badge variant="gold" className="mb-4">
                      {selectedItem.category}
                    </Badge>
                    <h3 className="font-serif text-3xl font-bold text-white mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-white/60 text-lg">{selectedItem.client}</p>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-gold-500" />
                      Overview
                    </h4>
                    <p className="text-white/70 leading-relaxed">{selectedItem.description}</p>
                  </div>

                  {/* Results Grid */}
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-gold-500" />
                      Results
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(selectedItem.results).map(([key, value]) => (
                        <div key={key} className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <p className="text-gold-500 font-bold text-lg">{value}</p>
                          <p className="text-white/60 text-sm capitalize mt-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-gold-500" />
                      Channels & Strategy
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag) => (
                        <Badge key={tag} variant="gold">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-white/10">
                    <Button
                      variant="primary"
                      href="/contact"
                      icon={true}
                      className="w-full justify-center"
                    >
                      Let's Discuss Your Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============ CTA SECTION ============ */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-radial from-gold-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
            <FadeIn direction="up">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                Have a project in mind?
              </h2>
            </FadeIn>

            <FadeIn delay={0.1} direction="up">
              <p className="text-lg text-white/60 mb-10">
                Let's talk about how our creator network can transform your brand. From UGC to influencer partnerships, we've got you covered.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <Button variant="primary" href="/contact" icon={true}>
                Get In Touch
              </Button>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
