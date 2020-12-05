import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

import { DefaultSeo } from 'next-seo';
import { AppProvider } from 'components/appProvider';

import * as gtag from 'utils/gtag';
import SEO from '../../next-seo.config';

import 'highlight.js/styles/github.css';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  const canonical = `${SEO.canonical}${router.pathname}`;

  return (
    <AppProvider>
      <DefaultSeo {...SEO} canonical={canonical} openGraph={{ url: canonical }} />
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
