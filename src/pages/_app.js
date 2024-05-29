'use client'
import DynamicLayout from "@/components/Layout";
import { Montserrat } from 'next/font/google'

import "@/styles/globals.css";

const montserrat = Montserrat(
  {
    subsets: ['latin'],
    variable: '--font-montserrat'
  }
)
export default function App({ Component, pageProps }) {
  return (
    <div className={`${montserrat.variable} font-sans`}>
      <DynamicLayout  >
        <Component {...pageProps} />
      </DynamicLayout>
    </div>
  )
}
