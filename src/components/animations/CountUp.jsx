import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ end, duration = 2000, suffix = '', prefix = '', className = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const numericEnd = parseFloat(String(end).replace(/[^0-9.]/g, ''))
    const isDecimal = String(end).includes('.')
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * numericEnd

      setCount(isDecimal ? current.toFixed(1) : Math.floor(current))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
