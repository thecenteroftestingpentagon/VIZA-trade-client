import type { Metadata } from 'next'
import '../styles/globals.css'
import ClientWrapper from '@/components/client-wrapper'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'

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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <ClientWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}
