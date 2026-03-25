import FadeIn from '../animations/FadeIn'

export default function SectionHeading({ label, title, description, align = 'left', light = false }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`max-w-3xl mb-16 ${alignClass}`}>
      {label && (
        <FadeIn>
          <span className="heading-line text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className={`font-serif text-display-sm md:text-display font-bold mb-6 ${light ? 'text-dark-900' : 'text-white'}`}>
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className={`text-lg leading-relaxed ${light ? 'text-dark-800/70' : 'text-white/60'}`}>
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
