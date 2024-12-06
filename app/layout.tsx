import { Guitar } from 'lucide-react'
import type { MetadataRoute } from 'next/server'
import type { ReactNode } from 'react'

export const metadata: MetadataRoute = {
  title: 'ControlTab',
  description: 'Collaborate, Organize, Perform – All in One Place',
  icons: {
    icon: ({ size }) => (
      <Guitar size={size} strokeWidth={1.5} />
    ),
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

