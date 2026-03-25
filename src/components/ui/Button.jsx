import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Button({ children, variant = 'primary', href, onClick, icon = false, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 font-semibold transition-all duration-300 text-sm tracking-widest uppercase group'

  const variants = {
    primary: `${base} px-8 py-4 bg-gold-500 text-dark-900 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20`,
    outline: `${base} px-8 py-4 border border-white/20 text-white hover:border-gold-500 hover:text-gold-500`,
    ghost: `${base} text-gold-500 hover:text-gold-400`,
    dark: `${base} px-8 py-4 bg-dark-700 text-white hover:bg-dark-600 border border-white/10`,
  }

  const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:'))
  const Tag = href ? (isExternal ? 'a' : Link) : 'button'
  const linkProps = href ? (isExternal ? { href } : { to: href }) : {}

  return (
    <Tag
      {...linkProps}
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Tag>
  )
}
