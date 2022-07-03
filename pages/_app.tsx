import { NextUIProvider } from '@nextui-org/react';
import '../scss/globals.scss'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) =>{
  const [isSSR, setIsSSR] = useState(true)
  useEffect(() => {
    setIsSSR(false)
  }, []);
  if (isSSR) {
    return null
  }
  return (
    <NextUIProvider>
      <Layout>
       <Component {...pageProps} isSSR={isSSR} />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp
