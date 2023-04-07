import Providers from '@/context/context';
import Layout from '@/components/layout';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
