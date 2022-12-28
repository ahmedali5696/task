import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Tajawal } from '@next/font/google'

import Layout from '../components/Layout'
import '../styles/globals.css'


const tajawal = Tajawal({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
})


export default function App({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <>
      <Head>
        <title>Admin Dashboard Test</title>
        <meta name="description" content="Assisment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <style jsx global>{`
         body {
           font-family: ${tajawal.style.fontFamily};
         }
       `}</style> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
