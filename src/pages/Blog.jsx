import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Calendar, Send } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerChildren'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { blogPosts, blogCategories } from '../data/blog'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [email, setEmail] = useState('')

  const featuredPost = blogPosts.find(p => p.featured)
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts.slice(1)
    : blogPosts.filter(p => p.category === selectedCategory && !p.featured)

  return (
    <PageTransition>
      <main className="bg-dark-900 min-h-screen">
        {/* ============ HERO SECTION ============ */}
        <section className="section-padding pt-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none" />
          <div className="container-custom relative">
            <FadeIn direction="down">
              <span className="heading-line text-gold-500 text-sm font-semibold tracking-widest uppercase block mb-4">
                Insights
              </span>
            </FadeIn>
            <FadeIn delay={0.1} direction="up">
              <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Ideas That Move the Industry
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                Deep dives into creator strategy, data-driven insights, and case studies from campaigns that moved the needle.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ============ FEATURED POST ============ */}
        {featuredPost && (
          <section className="section-padding">
            <div className="container-custom">
              <FadeIn>
                <motion.div
                  whileHover={{ y: -12 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10" />
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="primary">{featuredPost.category}</Badge>
                      <span className="text-white/60 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="text-white/60 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-4xl font-bold text-white mb-2 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/70">By {featuredPost.author}</p>
                  </div>
                </motion.div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* ============ CATEGORY FILTER ============ */}
        <section className="section-padding py-8">
          <div className="container-custom">
            <FadeIn>
              <div className="flex flex-wrap gap-3 items-center">
                {blogCategories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 border ${
                      selectedCategory === category
                        ? 'bg-gold-500 text-dark-900 border-gold-500 shadow-lg shadow-gold-500/20'
                        : 'border-white/10 text-white/70 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============ BLOG GRID ============ */}
        <section className="section-padding">
          <div className="container-custom">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <StaggerItem key={post.id}>
                    <Card hover={true}>
                      <div className="relative h-48 -mx-8 -mt-8 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="pt-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline">{post.category}</Badge>
                          <span className="text-white/50 text-xs flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="w-4 h-4 text-white/50" />
                          <span className="text-white/50 text-sm">{post.readTime}</span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-white mb-3 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-6 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm hover:gap-3 transition-all duration-300 cursor-pointer">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* ============ NEWSLETTER CTA ============ */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5 pointer-events-none" />
          <div className="container-custom relative">
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                  Stay in the Loop
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  Get our best creator insights delivered to your inbox every two weeks.
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="flex-1 px-6 py-4 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold-500 focus:outline-none transition-colors duration-300"
                  />
                  <Button variant="primary" className="!px-6">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-white/40 mt-4">
                  We respect your inbox. Unsubscribe anytime.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
