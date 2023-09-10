import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipeasy: AI-Powered Recipe Generator - Create Easy, Delicious Meals',
  description: 'Unleash your inner chef with Recipeasy, the AI-powered recipe generator. Create quick, delicious meals tailored to your preferences and dietary needs. Try it now!',
  keywords: [
    'AI recipe generator',
    'Recipeasy',
    'quick meals',
    'easy recipes',
    'dietary restrictions',
    'customizable recipes',
    'artificial intelligence',
    'cooking',
    'food'
  ]
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}