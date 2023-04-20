import Providers from '@/context/context';
import Layout from '@/components/layout';
import { Montserrat } from 'next/font/google';

import '@/styles/globals.css';

const font = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <div className={`${font.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Providers>
  );
}
