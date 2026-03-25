import {
  Users, Video, Sparkles, TrendingUp, Megaphone, BarChart3,
  ArrowRight, CheckCircle2
} from 'lucide-react'
import FadeIn from '../components/animations/FadeIn'
import CountUp from '../components/animations/CountUp'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerChildren'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import PageTransition from '../components/layout/PageTransition'
import { services, serviceHighlights } from '../data/services'

const iconMap = {
  Users,
  Video,
  Sparkles,
  TrendingUp,
  Megaphone,
  BarChart3,
}

const processSteps = [
  {
    number: '01',
    title: 'Strategy',
    description: 'We analyze your goals, audience, and market to craft a data-backed creator strategy.',
  },
  {
    number: '02',
    title: 'Match',
    description: 'Our team identifies and vets the perfect creators for your brand voice and values.',
  },
  {
    number: '03',
    title: 'Create',
    description: 'We guide creators through every step, ensuring premium quality and brand alignment.',
  },
  {
    number: '04',
    title: 'Amplify',
    description: 'Multi-channel distribution and paid optimization maximize reach and ROI.',
  },
]

export default function Services() {
  return (
    <PageTransition>
      <main className="bg-dark-900 min-h-screen">
        {/* Hero Section */}
        <section className="section-padding pt-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none" />
          <div className="container-custom relative">
            <FadeIn direction="down">
              <span className="heading-line text-gold-500 text-sm font-semibold tracking-widest uppercase block mb-4">
                Services
              </span>
            </FadeIn>
            <FadeIn delay={0.1} direction="up">
              <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Everything You Need to Win with Creators
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                From talent management to paid amplification, we offer a complete suite of creator marketing services designed to move the needle for your brand.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Overview Stats */}
        <section className="section-padding bg-dark-800/30">
          <div className="container-custom">
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceHighlights.map((highlight, index) => (
                <StaggerItem key={index} className="text-center">
                  <div className="mb-4">
                    <p className="text-4xl md:text-5xl font-serif font-bold text-gold-500">
                      <CountUp end={highlight.number} />
                    </p>
                  </div>
                  <p className="text-white/60 font-semibold tracking-wide text-sm md:text-base">
                    {highlight.label}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              label="Our Expertise"
              title="Six Core Services to Scale Your Brand"
              align="center"
            />
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon]
                return (
                  <StaggerItem key={service.id}>
                    <Card className="h-full flex flex-col group">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                            <IconComponent className="w-7 h-7 text-gold-500" />
                          </div>
                          <h3 className="font-serif text-2xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gold-500 text-sm font-semibold">{service.subtitle}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/70 text-base leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                            <span className="text-white/60 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stat */}
                      <div className="border-t border-white/5 pt-6 flex items-baseline justify-between">
                        <div>
                          <p className="text-3xl md:text-4xl font-serif font-bold text-gold-500 mb-1">
                            <CountUp end={service.stat} suffix={service.stat.includes('%') ? '%' : '+'} />
                          </p>
                          <p className="text-white/40 text-xs uppercase tracking-widest">
                            {service.statLabel}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gold-500/40 group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Card>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-dark-800/30">
          <div className="container-custom">
            <SectionHeading
              label="Our Process"
              title="How We Work"
              description="A proven four-step framework that turns strategy into results."
              align="center"
            />

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {processSteps.map((step, index) => (
                <StaggerItem key={index} className="relative">
                  {/* Connecting line for desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-[calc(100%+8px)] w-[calc(100%-16px)] h-1 bg-gradient-to-r from-gold-500/30 to-transparent" />
                  )}

                  <Card className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-500/20 to-gold-500/5 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="font-serif text-4xl font-bold text-gold-500">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why Choose Us - Brief */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn direction="left">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    Vetted Network
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    2,500+ creators across every niche, platform, and demographic. Every creator is personally vetted for quality and authenticity.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    Data Intelligence
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Real-time dashboards. Deep performance insights. Monthly strategic reviews. You always know exactly what's working.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    Full-Service Ops
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    We handle contracts, briefs, revisions, payments, and compliance. You focus on strategy. We handle the rest.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-gold-500/10 via-dark-800 to-dark-900">
          <div className="container-custom">
            <FadeIn>
              <div className="text-center">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto">
                  Let's talk about your creator marketing goals and find the perfect service package for your brand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" href="/contact" icon>
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" href="/#work">
                    See Our Work
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
