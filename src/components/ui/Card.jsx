import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`bg-dark-800 border border-white/5 p-8 transition-all duration-300
        ${hover ? 'hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/5' : ''}
        ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
