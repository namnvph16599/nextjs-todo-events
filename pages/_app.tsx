import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Head>
      <title>My Event App</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
    </Head>
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp
