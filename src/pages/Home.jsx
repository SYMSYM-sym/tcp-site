import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Video, Sparkles, TrendingUp, Quote, ChevronRight, ArrowRight } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import FadeIn from '../components/animations/FadeIn'
import CountUp from '../components/animations/CountUp'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerChildren'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { services } from '../data/services'
import { portfolio } from '../data/portfolio'
import { testimonials, clientLogos } from '../data/testimonials'

// Hero Stats Data
const heroStats = [
  { end: 2500, suffix: '+', label: 'Creators' },
  { end: 50, prefix: '$', suffix: 'M+', label: 'Ad Spend' },
  { end: 15, suffix: 'K+', label: 'Videos' },
  { end: 340, suffix: '%', label: 'Avg. Lift' },
]

// Icon mapping
const iconMap = {
  Users,
  Video,
  Sparkles,
  TrendingUp,
}

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-dark-900">
        {/* ============ HERO SECTION ============ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
          {/* Animated gradient background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-radial from-gold-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-radial from-gold-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container-custom text-center max-w-4xl mx-auto px-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge variant="gold">CREATOR ECONOMY EXPERTS</Badge>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            >
              We Connect{' '}
              <span className="text-gold-500">Premium Brands</span> with{' '}
              <span className="text-gradient">World-Class Creators</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed"
            >
              From sourcing to delivery, we handle everything. Our network of 2,500+ vetted creators
              produces scroll-stopping content that converts at scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button variant="primary" href="/portfolio" icon={true}>
                View Our Work
              </Button>
              <Button variant="outline" href="/services" icon={true}>
                Our Services
              </Button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
            >
              {heroStats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gold-500 mb-2">
                    <CountUp end={stat.end} prefix={stat.prefix || ''} suffix={stat.suffix || ''} />
                  </div>
                  <p className="text-xs md:text-sm text-white/50 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ============ TRUSTED BY / LOGO BAR ============ */}
        <section className="section-padding border-y border-white/5 bg-dark-800/50">
          <div className="container-custom">
            <p className="text-center text-white/50 text-sm uppercase tracking-widest mb-8">
              Trusted by Leading Brands
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
              {clientLogos.map((client) => (
                <FadeIn key={client.id} delay={client.id * 0.05}>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-white/40 hover:text-white/80 transition-colors">
                      {client.name}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICES PREVIEW ============ */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              label="What We Do"
              title="Our Core Services"
              description="End-to-end creator marketing that drives measurable results across every stage of the funnel."
            />

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.slice(0, 4).map((service) => {
                const IconComponent = iconMap[service.icon]
                return (
                  <StaggerItem key={service.id}>
                    <Card>
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-500/20 to-gold-500/5 flex items-center justify-center mb-4">
                          {IconComponent && <IconComponent className="w-6 h-6 text-gold-500" />}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gold-500/80 font-semibold tracking-widest uppercase">
                          {service.subtitle}
                        </p>
                      </div>

                      <p className="text-white/60 text-sm leading-relaxed mb-6">{service.description}</p>

                      <div className="pt-6 border-t border-white/5">
                        <div className="text-3xl font-bold text-gold-500 mb-1">
                          <CountUp end={service.statNum} prefix={service.statPrefix || ''} suffix={service.statSuffix || ''} />
                        </div>
                        <p className="text-xs text-white/40 uppercase tracking-widest">{service.statLabel}</p>
                      </div>
                    </Card>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="ghost">
                  View All Services
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ FEATURED WORK ============ */}
        <section className="section-padding bg-dark-800/50">
          <div className="container-custom">
            <SectionHeading
              label="Our Work"
              title="Featured Campaigns"
              description="Showcasing our most impactful creator campaigns and the results they delivered."
            />

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {portfolio.slice(0, 3).map((project, idx) => (
                <StaggerItem key={project.id}>
                  <motion.div whileHover={{ y: -8 }} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-6 h-80">
                      {/* Image */}
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <p className="text-sm text-gold-500 mb-2 uppercase tracking-widest">
                            {project.client}
                          </p>
                          <h3 className="font-serif text-2xl font-bold mb-3">{project.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                              <span key={i} className="text-xs bg-white/10 px-3 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gold-500 font-bold text-lg">
                          <CountUp end={project.results.viewsNum} suffix={project.results.viewsSuffix || ''} />
                        </p>
                        <p className="text-xs text-white/40 uppercase tracking-widest">Views</p>
                      </div>
                      <div>
                        <p className="text-gold-500 font-bold text-lg">{project.results.roas}</p>
                        <p className="text-xs text-white/40 uppercase tracking-widest">ROAS</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="text-center mt-12">
              <Link to="/portfolio">
                <Button variant="ghost">
                  Explore All Projects
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              label="Results"
              title="What Our Clients Say"
              description="Real feedback from brands we've partnered with."
              align="center"
            />

            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial) => (
                <StaggerItem key={testimonial.id}>
                  <Card>
                    {/* Quote mark */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-gold-500/40" />
                    </div>

                    {/* Quote */}
                    <p className="text-white/80 text-lg leading-relaxed mb-8 font-serif italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Divider */}
                    <div className="border-t border-white/5 pt-6">
                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-bold text-white text-sm">{testimonial.author}</p>
                          <p className="text-xs text-white/50">
                            {testimonial.role} · {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mt-3">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <span key={i} className="text-gold-500 text-xs">★</span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="relative section-padding overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-gold-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container-custom">
            <FadeIn>
              <div className="bg-dark-800 border border-white/5 rounded-2xl p-12 md:p-20 text-center max-w-3xl mx-auto">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Brand?
                </h2>

                <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                  Join the leading brands working with our creator network. Let's build something extraordinary together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" href="/contact" icon={true}>
                    Start Your Campaign
                  </Button>
                  <Button variant="outline" href="/services">
                    Learn More
                  </Button>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
