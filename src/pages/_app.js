'use client'
import DynamicLayout from "@/components/Layout";
import { Montserrat  } from 'next/font/google'

import "@/styles/globals.css";

const montserrat  = Montserrat ({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
    <DynamicLayout  className={montserrat.className}>
      <Component {...pageProps} />
    </DynamicLayout>
  )
}
