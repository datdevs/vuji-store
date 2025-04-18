import Head from 'next/head';
import MainLayout from '../app/layouts/main-layout';

import '../app/global.css';

export default function MyApp({ Component, pageProps }) {
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
