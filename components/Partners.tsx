import Image from 'next/image'

export default function Partners() {
  const partners: { name: string; logo: string }[] = []

  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-logos">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="partner-logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
