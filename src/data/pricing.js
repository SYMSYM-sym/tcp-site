export const pricingTiers = [
  {
    id: 1,
    name: 'Starter',
    subtitle: 'For growing brands',
    price: '$5,000',
    period: '/month',
    description: 'Perfect for brands beginning their creator marketing journey with curated content and managed partnerships.',
    features: [
      'Up to 10 creators per month',
      'UGC content production',
      'Basic campaign strategy',
      'Monthly performance reports',
      'Dedicated account manager',
      'Platform: TikTok or Instagram',
    ],
    notIncluded: [
      'Paid amplification',
      'Multi-platform campaigns',
      'Custom analytics dashboard',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 2,
    name: 'Growth',
    subtitle: 'For scaling brands',
    price: '$15,000',
    period: '/month',
    description: 'Full-service creator management with paid amplification and multi-platform execution for brands ready to scale.',
    features: [
      'Up to 40 creators per month',
      'UGC + Influencer campaigns',
      'Advanced content strategy',
      'Paid media management',
      'Real-time analytics dashboard',
      'Multi-platform execution',
      'A/B creative testing',
      'Bi-weekly strategy calls',
    ],
    notIncluded: [
      'Custom integrations',
    ],
    cta: 'Scale Now',
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    subtitle: 'For industry leaders',
    price: 'Custom',
    period: '',
    description: 'Bespoke creator programs with white-glove service, custom integrations, and dedicated team allocation.',
    features: [
      'Unlimited creators',
      'Full-service management',
      'Custom content strategy',
      'Dedicated creative team',
      'Custom analytics & integrations',
      'All platforms supported',
      'Priority creator access',
      'Weekly executive reviews',
      'Brand safety monitoring',
      'Exclusive creator partnerships',
    ],
    notIncluded: [],
    cta: 'Contact Us',
    popular: false,
  },
]

export const faq = [
  {
    question: 'How do you vet and select creators?',
    answer: 'Our proprietary vetting process evaluates creators across 15+ data points including audience authenticity, engagement quality, brand safety scores, and content consistency. Only the top 3% of applicants make it into our network.',
  },
  {
    question: 'What is the typical turnaround for content?',
    answer: 'Standard UGC content is delivered within 7-10 business days from brief approval. Influencer campaigns typically launch within 2-3 weeks. Rush delivery is available for Growth and Enterprise tiers.',
  },
  {
    question: 'Do you handle content rights and licensing?',
    answer: 'Yes, all content produced through our platform includes full commercial usage rights. We handle creator contracts, licensing, and ensure you have perpetual rights to use the content across all channels.',
  },
  {
    question: 'Can I choose specific creators for my campaigns?',
    answer: 'Absolutely. We provide curated creator recommendations based on your brief, but you have final approval on every creator. Enterprise clients get priority access to our top-tier talent.',
  },
  {
    question: 'What platforms do you support?',
    answer: 'We execute campaigns across TikTok, Instagram, YouTube, Pinterest, X (Twitter), and emerging platforms. Our Growth and Enterprise tiers include multi-platform strategies.',
  },
  {
    question: 'How do you measure campaign success?',
    answer: 'We track comprehensive KPIs including views, engagement rate, click-through rate, conversion rate, ROAS, and brand lift. All clients receive detailed reporting through our analytics dashboard.',
  },
]
