import Typography from 'typography';
//@ts-ignore
import Wordpress2016 from 'typography-theme-wordpress-2016';

import Layout from '@/components/Layout';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import '../styles/styles.css';
import styles from '@/styles/style.module.scss';
import { ChakraBaseProvider } from '@chakra-ui/react';

type AppOwnProps = { example: string };

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Output CSS as string.
typography.toString();

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

export default function MyApp({
  Component,
  pageProps,
}: AppProps & AppOwnProps) {
  return (
    <div className={styles.wrapper}>
      <ChakraBaseProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraBaseProvider>
    </div>
  );
}

MyApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx, example: 'data' };
};
