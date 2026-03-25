import { ArrowRight, Zap, Users, Target, Award } from 'lucide-react'
import { useState } from 'react'
import FadeIn from '../components/animations/FadeIn'
import CountUp from '../components/animations/CountUp'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerChildren'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import PageTransition from '../components/layout/PageTransition'
import { team, values } from '../data/team'

const stats = [
  { number: '2500', suffix: '+', label: 'Creators' },
  { number: '800', suffix: '+', label: 'Campaigns' },
  { number: '50', prefix: '$', suffix: 'M+', label: 'Managed' },
  { number: '99', suffix: '%', label: 'Retention' },
]

const valueIcons = [Zap, Users, Target, Award]

export default function About() {
  const [expandedTeam, setExpandedTeam] = useState(null)

  return (
    <PageTransition>
      <main className="bg-dark-900 min-h-screen">
        {/* Hero Section */}
        <section className="section-padding pt-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none" />
          <div className="container-custom relative">
            <FadeIn direction="down">
              <span className="heading-line text-gold-500 text-sm font-semibold tracking-widest uppercase block mb-4">
                About Us
              </span>
            </FadeIn>
            <FadeIn delay={0.1} direction="up">
              <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                The Agency Built for the Creator Economy
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                We bridge premium creator talent with world-class brands, creating authentic campaigns that convert. Since day one, we've been obsessed with one thing: making both creators and brands incredibly successful.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-dark-800/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <FadeIn direction="left">
                <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-transparent to-dark-900 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gold-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-gold-500" />
                      </div>
                      <p className="text-white/40 text-sm">Visual Story Coming Soon</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Story Text */}
              <FadeIn direction="right" delay={0.1}>
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-4xl font-bold text-white mb-4">Our Story</h2>
                    <p className="text-white/70 leading-relaxed text-lg">
                      This agency was founded on a simple belief: the creator economy deserves a world-class partner. In 2019, our founder left a top-5 talent agency with one mission—to build an agency where creators were treated like the superstars they are, and brands got authentic content that actually moved the needle.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">Our Mission</h3>
                    <p className="text-white/70 leading-relaxed">
                      We're not just a middleman. We're architects of authentic connection. Every campaign, every partnership, every piece of content is built on genuine relationships, rigorous data, and obsessive attention to quality.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">Our Approach</h3>
                    <p className="text-white/70 leading-relaxed">
                      We combine the intimacy of a boutique agency with the firepower of an enterprise operation. Our team of strategists, producers, and creator relations experts work together to deliver campaigns that drive real business results.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              label="Core Values"
              title="What Drives Everything We Do"
              align="center"
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = valueIcons[index]
                return (
                  <StaggerItem key={value.title}>
                    <Card className="relative h-full flex flex-col">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gold-500" />
                      </div>
                      <div className="flex-1">
                        <div className="h-1 w-12 bg-gold-500 rounded-full mb-4 mt-4" />
                        <h3 className="font-serif text-xl font-bold text-white mb-3">{value.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </Card>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-dark-800/30">
          <div className="container-custom">
            <SectionHeading
              label="Leadership"
              title="Meet the Team"
              description="Industry veterans united by a singular passion: making creators and brands legendary together."
              align="center"
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <StaggerItem key={member.id}>
                  <div
                    className="cursor-pointer h-full"
                    onMouseEnter={() => setExpandedTeam(member.id)}
                    onMouseLeave={() => setExpandedTeam(null)}
                  >
                    <Card className="h-full flex flex-col overflow-hidden relative group" hover={true}>
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden -mx-8 -mt-8 mb-6">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-60" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-serif text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-gold-500 text-sm font-semibold mb-4">{member.role}</p>

                        {/* Bio - visible on hover or expanded */}
                        <div
                          className={`text-white/60 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                            expandedTeam === member.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          {member.bio}
                        </div>

                        {/* Hover hint */}
                        {expandedTeam !== member.id && (
                          <p className="text-white/40 text-xs mt-auto group-hover:text-gold-500/60 transition-colors">
                            Hover to learn more
                          </p>
                        )}
                      </div>
                    </Card>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Stats Bar Section */}
        <section className="section-padding bg-gradient-to-r from-gold-500/10 via-dark-800 to-dark-900">
          <div className="container-custom">
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StaggerItem key={index} className="text-center">
                  <div className="mb-4">
                    <p className="text-4xl md:text-5xl font-serif font-bold text-gold-500">
                      <CountUp
                        end={stat.number}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </p>
                  </div>
                  <p className="text-white/60 font-semibold tracking-wide">{stat.label}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <FadeIn>
              <div className="bg-gradient-to-r from-dark-800 to-dark-700 border border-white/10 rounded-2xl p-12 md:p-16 text-center">
                <h2 className="font-serif text-4xl font-bold text-white mb-6">
                  Join the Brands That Trust Us
                </h2>
                <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                  Whether you're a brand ready to scale with creators or a creator looking for your big break, let's build something legendary together.
                </p>
                <Button variant="primary" href="/contact" icon>
                  Get in Touch
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
