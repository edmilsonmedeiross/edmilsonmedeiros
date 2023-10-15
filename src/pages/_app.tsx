import { Lato } from '@next/font/google';
import type { AppProps } from 'next/app';

import { AppContextProvider } from 'context/AppContext';

import '../styles/globals.sass';

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </main>
  );
}
//test
// test 2
