import './globals.css'
import type { Metadata } from 'next'
import { Crimson_Text } from 'next/font/google'

const crimson = Crimson_Text({ 
	display: 'swap',
	subsets: ['latin'],
	style: ['normal', 'italic'],
	weight: '400'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={crimson.className}>{children}</body>
    </html>
  )
}
