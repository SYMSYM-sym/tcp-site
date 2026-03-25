export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-white/5 text-white/70 border-white/10',
    gold: 'bg-gold-500/10 text-gold-500 border-gold-500/20',
    cream: 'bg-cream-500/10 text-cream-500 border-cream-500/20',
    primary: 'bg-gold-500/10 text-gold-500 border-gold-500/20',
    outline: 'bg-transparent text-white/60 border-white/20',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase border ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
