import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Curio | Space Robotics Enthusiast',
  description: 'Portfolio of Curio - IIT Mandi student passionate about Space Robotics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}