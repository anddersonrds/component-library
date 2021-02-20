import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Won Games</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta
          name="description"
          content="The best libray of components in the world!"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default App;
