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
    <Layout>
    <Component {...pageProps} isSSR={isSSR} />
    </Layout>
  )
}

export default MyApp
