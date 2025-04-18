import Head from 'next/head';
import MainLayout from '../app/layouts/main-layout';

import '../app/global.css';

export default function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Head>
        <title>Vuji Store</title>
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
