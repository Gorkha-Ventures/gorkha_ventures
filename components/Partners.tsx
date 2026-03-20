import Image from 'next/image'
import fs from 'node:fs'
import path from 'node:path'

export default function Partners() {
  const partnersDir = path.join(process.cwd(), 'public', 'partners')
  const partners = fs.existsSync(partnersDir)
    ? fs
        .readdirSync(partnersDir)
        .filter((fileName) => /\.(png|jpe?g|webp|svg)$/i.test(fileName))
        .sort((a, b) => a.localeCompare(b))
        .map((fileName) => {
          const nameFromFile = fileName.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ')
          const label = nameFromFile.charAt(0).toUpperCase() + nameFromFile.slice(1)
          const slug = nameFromFile.toLowerCase().replace(/\s+/g, '-')
          return {
            name: label,
            logo: `/partners/${fileName}`,
            slug,
          }
        })
    : []

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-logos">
          {partners.map((partner, index) => (
            <div key={index} className={`partner-logo partner-logo--${partner.slug}`}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={72}
                className="partner-logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
