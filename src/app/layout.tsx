import '@/styles/globals.css';

import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

import type { Metadata } from "next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Untitled UI",
  description: "Untitled UI Free Figma UI Kit",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, "antialiased")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
