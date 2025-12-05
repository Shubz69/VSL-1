import type { Metadata } from 'next'
import './globals.css'
import MetaPixel from '@/components/MetaPixel'

export const metadata: Metadata = {
  title: 'Transform Your Life with Psychology | Expert Courses & 1-to-1 Sessions',
  description: 'Discover powerful psychology courses and personalized 1-to-1 sessions designed to transform your life. Learn from expert psychologists and unlock your potential.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  )
}


