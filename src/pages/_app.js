'use client'
import DynamicLayout from "@/components/Layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DynamicLayout>
      <Component {...pageProps} />
    </DynamicLayout>
  )
}
