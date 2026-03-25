import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
  Company: [
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '#' },
    { name: 'Lab Stories', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ],
  Services: [
    { name: 'Creator Management', path: '/services' },
    { name: 'UGC Production', path: '/services' },
    { name: 'Content Strategy', path: '/services' },
    { name: 'Paid Amplification', path: '/services' },
  ],
  Resources: [
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Creator Network', path: '/creators' },
    { name: 'FAQ', path: '/pricing' },
  ],
}

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5">
      {/* CTA Section */}
      <div className="container-custom py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Ready to elevate your brand?
            </p>
            <h2 className="font-serif text-display-sm md:text-display font-bold text-white max-w-2xl">
              Let's create something{' '}
              <span className="italic text-gold-500">extraordinary</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gold-500 text-dark-900 font-semibold text-sm tracking-widest uppercase hover:bg-gold-400 transition-all duration-300 group"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo-icon.svg" alt="CreatorLabCo" className="w-10 h-10" />
              <span className="text-white font-semibold text-sm tracking-wider">
                CREATOR<span className="text-gold-500">LAB</span>CO
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Premium creator agency delivering world-class content and talent to the world's most ambitious brands.
            </p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/40 text-sm hover:text-gold-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} CreatorLabCo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
