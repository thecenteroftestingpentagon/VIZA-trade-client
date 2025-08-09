import type { Metadata } from 'next'
import './globals.css'
import ClientWrapper from '@/components/client-wrapper'

export const metadata: Metadata = {
  title: 'VIZA TRADE - Global Trade Simplified Visas',
  description: 'End-to-End Visa and Immigration Services',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png', // Use the PNG favicon from public
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <ClientWrapper />
      </body>
    </html>
  )
}
