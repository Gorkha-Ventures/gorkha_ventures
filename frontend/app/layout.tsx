import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gorkha Ventures',
  description: 'We help serious founders turn ideas into scalable business and raise capital when it really matters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
