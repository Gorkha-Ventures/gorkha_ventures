import fs from 'node:fs'
import path from 'node:path'

import PartnersCarousel, { type PartnerLogo } from './PartnersCarousel'

export default function Partners() {
  const partnersDir = path.join(process.cwd(), 'public', 'partners')
  const partners: PartnerLogo[] = fs.existsSync(partnersDir)
    ? fs
        .readdirSync(partnersDir)
        .filter((fileName) => /\.(png|jpe?g|webp|svg)$/i.test(fileName))
        .sort((a, b) => a.localeCompare(b))
        .map((fileName) => {
          const nameFromFile = fileName.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ')
          const label = nameFromFile.charAt(0).toUpperCase() + nameFromFile.slice(1)
          const slug = fileName
            .replace(/\.[^/.]+$/, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
          return {
            name: label,
            logo: `/partners/${fileName}`,
            slug,
          }
        })
    : []

  if (partners.length === 0) return null

  return (
    <section className="partners-section">
      <div className="container">
        <PartnersCarousel partners={partners} />
      </div>
    </section>
  )
}
