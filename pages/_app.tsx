import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { JSX } from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

