import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const services: Record<string, {
  title: string
  subtitle: string
  description: string
  longDescription: string
  icon: string
  color: string
  highlights?: string[]
  ctaText: string
}> = {
  'offerings-for-founders': {
    title: 'Program for Founders',
    subtitle: 'Validation | Product strategy | GTM support',
    description: 'We partner with founders from idea to scale by helping validate business models, sharpen product strategy, and build repeatable go-to-market engines.',
    longDescription: 'We partner with founders from idea to scale by helping validate business models, sharpen product strategy, and build repeatable go-to-market engines.',
    icon: '🚀',
    color: '#73d8e0',
    highlights: [
      'Business model validation and market testing',
      'Product strategy to prioritize roadmap bets',
      'GTM planning for repeatable customer acquisition',
      'Hands-on support from idea to early scale'
    ],
    ctaText: 'Apply as a founder',
  },
  'msme-offerings': {
    title: 'Offerings For MSME',
    subtitle: 'Cash Flow Rescue  | Founder Freedom  | Revenue Engine ',
    description: 'We help micro, small and medium enterprises grow from first customer to Series A.',
    longDescription: 'Gorkha Ventures supports MSMEs with an end-to-end program: pre-seed incubation to validate and scale your idea, seed funding when you\'re ready to grow, and hands-on mentorship from operators who\'ve built companies. We focus on evidence-based execution and long-term partnership so you can go from first customer to Series A with clarity and support.',
    icon: '🏢',
    color: '#73d8e0',
    highlights: [
      'Pre-seed incubation with structured sprints',
      'Seed funding and follow-on capital',
      'Operator-led mentorship and advisory',
      'Access to network and resources'
    ],
    ctaText: 'Apply for MSME support'
  },
  'offerings-for-investors': {
    title: 'Program for Investors',
    subtitle: 'Deal flow | Portfolio support | Co-investment',
    description: 'Access curated early-stage opportunities and co-invest alongside Gorkha Ventures.',
    longDescription: 'Our investor program gives you access to our pipeline of vetted early-stage companies, portfolio company updates and support, and co-investment opportunities. Partner with us to participate in pre-seed and seed rounds in our focus sectors, with the same rigorous selection and operator-led approach we apply to our own investments.',
    icon: '📈',
    color: '#1a1a1a',
    highlights: [
      'Curated deal flow from our pipeline',
      'Portfolio company reporting and updates',
      'Co-investment in selected rounds',
      'Sector and stage alignment'
    ],
    ctaText: 'Explore investor opportunities'
  },
  'offerings-for-job-seekers': {
    title: 'Program for Job Seekers',
    subtitle: 'Portfolio careers | Startup roles',
    description: 'Join fast-growing portfolio companies and startups in the Gorkha network.',
    longDescription: 'We connect talented job seekers with roles at our portfolio companies and the broader startup ecosystem we support. Whether you\'re looking for your first startup role or a senior position, we help match you with teams that are building with ambition and rigour.',
    icon: '💼',
    color: '#4a4a4a',
    highlights: [
      'Roles at portfolio and partner startups',
      'Curated opportunities by stage and function',
      'Transparent process and feedback'
    ],
    ctaText: 'Find a role'
  }
}

const slugs = Object.keys(services)

function getService(slug: string) {
  return services[slug] ?? null
}

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: 'Service | Gorkha Ventures' }
  return {
    title: `${service.title} | Gorkha Ventures`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <>
      <Header />
      <main className="service-page">
        <div className="container">
          <Link href="/#services" className="service-page-back">
            ← Back to services
          </Link>
          <div className="service-page-hero">
            <div className="service-page-icon">{service.icon}</div>
            <p className="service-page-subtitle" style={{ color: service.color }}>{service.subtitle}</p>
            <h1 className="service-page-title">{service.title}</h1>
            <p className="service-page-lead">{service.description}</p>
          </div>
          <div className="service-page-body">
            <p className="service-page-description">{service.longDescription}</p>
            {service.highlights && service.highlights.length > 0 && (
              <ul className="service-page-highlights">
                {service.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="service-page-cta">
            <Link href="/contact" className="service-page-cta-button">{service.ctaText}</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
