
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs';
import {Inter,Space_Grotesk}  from 'next/font/google';
import  type { Metadata } from 'next';
import  './globals.css';

 
export const metadata:Metadata = {
  title: 'DEVFLOW',
  description:'A community driven platform for answering question its free for all anyone can question and answer question',
  icons:{
    icon:'public/assets/images/site-logo.svg'
  }
}
 const inter=Inter({
   subsets:['latin'],
    weight:['100','200','300','400','500','600','700','800','900'],
    variable:'--font-inter'
 })
 const SpaceGrotesk=Space_Grotesk({
  subsets:['latin'],
   weight:['300','400','500','600','700'],
   variable:'--font-SpaceGrotesk'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
       elements:{
        formButtonPrimary:'primary-button-gradient',
         footerActionLink:'primary-text-gradient hover:primary-text-500'
       }
    }}>
      <html lang="en">
        <body className={`${inter.variable} ${SpaceGrotesk.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}