import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GV Admin Panel',
  description: 'Admin dashboard for submissions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
