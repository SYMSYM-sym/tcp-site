import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/layout/PageTransition'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerChildren'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { pricingTiers, faq } from '../data/pricing'

export default function Pricing() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  return (
    <PageTransition>
      <main className="bg-dark-900 min-h-screen">
        {/* ============ HERO SECTION ============ */}
        <section className="section-padding pt-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none" />
          <div className="container-custom relative">
            <FadeIn direction="down">
              <span className="heading-line text-gold-500 text-sm font-semibold tracking-widest uppercase block mb-4">
                Pricing
              </span>
            </FadeIn>
            <FadeIn delay={0.1} direction="up">
              <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Invest in Creator-Led Growth
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                Transparent pricing designed for brands at every stage. Scale your creator marketing without hidden fees or surprises.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ============ PRICING CARDS ============ */}
        <section className="section-padding">
          <div className="container-custom">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
                {pricingTiers.map((tier, index) => (
                  <StaggerItem key={tier.id}>
                    <motion.div
                      className={`relative ${
                        tier.popular ? 'lg:scale-105 lg:z-10' : ''
                      }`}
                    >
                      <Card
                        hover={true}
                        className={`h-full flex flex-col ${
                          tier.popular
                            ? 'border-gold-500/50 bg-dark-800/80 shadow-2xl shadow-gold-500/10'
                            : ''
                        }`}
                      >
                        {/* Popular Badge */}
                        {tier.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                            <Badge variant="primary">Most Popular</Badge>
                          </div>
                        )}

                        {/* Tier Header */}
                        <div className="mb-8">
                          <h3 className="font-serif text-3xl font-bold text-white mb-2">
                            {tier.name}
                          </h3>
                          <p className="text-white/60 text-sm mb-4">{tier.subtitle}</p>

                          <div className="flex items-baseline gap-1 mb-2">
                            <span className="font-serif text-5xl font-bold text-white">
                              {tier.price}
                            </span>
                            {tier.period && (
                              <span className="text-white/60 text-sm">{tier.period}</span>
                            )}
                          </div>
                          <p className="text-white/50 text-sm">{tier.description}</p>
                        </div>

                        {/* Features List */}
                        <div className="mb-8 flex-1">
                          <div className="space-y-4 mb-6">
                            {tier.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                                <span className="text-white/80 text-sm leading-relaxed">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Not Included Items */}
                          {tier.notIncluded.length > 0 && (
                            <div className="space-y-3 pt-6 border-t border-white/10">
                              {tier.notIncluded.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  <X className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" />
                                  <span className="text-white/40 text-sm">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* CTA Button */}
                        <Button
                          variant={tier.popular ? 'primary' : 'outline'}
                          href="/contact"
                          className="w-full justify-center"
                        >
                          {tier.cta}
                        </Button>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* ============ FAQ SECTION ============ */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <SectionHeading
                  label="Frequently Asked"
                  title="Questions We Hear Often"
                />
              </FadeIn>

              <div className="mt-12 space-y-4">
                {faq.map((item, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                    <motion.div
                      className="border border-white/10 rounded-lg overflow-hidden"
                      layout
                    >
                      <button
                        onClick={() =>
                          setOpenFaqIndex(
                            openFaqIndex === index ? null : index
                          )
                        }
                        className="w-full px-6 py-5 flex items-center justify-between hover:bg-dark-800/50 transition-colors duration-300"
                      >
                        <span className="font-semibold text-white text-left">
                          {item.question}
                        </span>
                        <motion.div
                          animate={{
                            rotate: openFaqIndex === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gold-500 flex-shrink-0" />
                        </motion.div>
                      </button>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height:
                            openFaqIndex === index ? 'auto' : 0,
                          opacity: openFaqIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 border-t border-white/10 bg-dark-800/30">
                          <p className="text-white/70 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ CUSTOM SOLUTION CTA ============ */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5 pointer-events-none" />
          <div className="container-custom relative">
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  Every brand is unique. Let's talk about your specific needs and create a plan that drives real results.
                </p>
                <Link to="/contact">
                  <Button variant="primary" icon>
                    Get in Touch
                  </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
