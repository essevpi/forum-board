import Providers from '@/context/context';
import Layout from '@/components/layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';

import '@/styles/globals.css';

const font = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps, router }) {
  return (
    <Providers>
      <div className={`${font.variable} font-sans`}>
        <Layout>
          {/* <AnimatePresence mode='exit'> */}
            {/* <motion.div
              id='test'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              key={router.asPath}
            > */}
              <Component {...pageProps}  />
            {/* </motion.div> */}
          {/* </AnimatePresence> */}
        </Layout>
      </div>
    </Providers>
  );
}
