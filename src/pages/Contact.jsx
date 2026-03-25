import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Instagram } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerChildren'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    monthlyBudget: '',
    serviceInterest: '',
    message: '',
  })

  const budgetOptions = ['Under $5K', '$5K-$15K', '$15K-$50K', '$50K+']
  const serviceOptions = [
    'Creator Management',
    'UGC Production',
    'Content Strategy',
    'Paid Amplification',
    'Full Service',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      company: '',
      monthlyBudget: '',
      serviceInterest: '',
      message: '',
    })
  }

  return (
    <PageTransition>
      <main className="bg-dark-900 min-h-screen">
        {/* ============ HERO SECTION ============ */}
        <section className="section-padding pt-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none" />
          <div className="container-custom relative">
            <FadeIn direction="down">
              <span className="heading-line text-gold-500 text-sm font-semibold tracking-widest uppercase block mb-4">
                Contact
              </span>
            </FadeIn>
            <FadeIn delay={0.1} direction="up">
              <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Let's Build Something Extraordinary
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                Ready to transform your creator marketing strategy? We'd love to hear about your goals and discuss how we can help.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ============ CONTACT FORM & INFO ============ */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column: Form */}
              <div className="lg:col-span-2">
                <FadeIn>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold-500 focus:outline-none transition-colors duration-300"
                        placeholder="Your Name"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold-500 focus:outline-none transition-colors duration-300"
                        placeholder="you@yourcompany.com"
                      />
                    </motion.div>

                    {/* Company */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold-500 focus:outline-none transition-colors duration-300"
                        placeholder="Your Company"
                      />
                    </motion.div>

                    {/* Monthly Budget */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        Monthly Budget
                      </label>
                      <select
                        name="monthlyBudget"
                        value={formData.monthlyBudget}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-dark-800 border border-white/10 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select a budget range</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    {/* Service Interest */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        Service Interest
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-dark-800 border border-white/10 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">What services interest you?</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label className="block text-white font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-6 py-4 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold-500 focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell us about your goals, challenges, or questions..."
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Button
                        variant="primary"
                        className="w-full justify-center"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </FadeIn>
              </div>

              {/* Right Column: Contact Info */}
              <div className="lg:col-span-1">
                <StaggerContainer>

                  {/* Social Links Card */}
                  <StaggerItem>
                    <Card hover={false}>
                      <div className="space-y-4">
                        <p className="text-white/60 text-sm">
                          Typically responds within 24 hours
                        </p>
                        <div className="flex gap-3">
                          <a
                            href="#"
                            aria-label="LinkedIn"
                            className="p-2 bg-dark-700 rounded-lg hover:bg-gold-500/20 transition-colors duration-300"
                          >
                            <Linkedin className="w-5 h-5 text-white hover:text-gold-500" />
                          </a>
                          <a
                            href="#"
                            aria-label="Twitter"
                            className="p-2 bg-dark-700 rounded-lg hover:bg-gold-500/20 transition-colors duration-300"
                          >
                            <Twitter className="w-5 h-5 text-white hover:text-gold-500" />
                          </a>
                          <a
                            href="#"
                            aria-label="Instagram"
                            className="p-2 bg-dark-700 rounded-lg hover:bg-gold-500/20 transition-colors duration-300"
                          >
                            <Instagram className="w-5 h-5 text-white hover:text-gold-500" />
                          </a>
                        </div>
                      </div>
                    </Card>
                  </StaggerItem>

                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
