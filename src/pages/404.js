import React from 'react';

import { Layout } from 'components/layout';
import { NextLink } from 'components/nextLink';
import { Text } from 'components/typography';

const ErrorPage = () => (
  <Layout seo={{ title: 'Error' }}>
    <Text as="h2" mb={4}>
      Error
    </Text>
    <Text mb={0}>Looks like something went wrong.</Text>
    <Text>
      Go <NextLink href="/">home</NextLink> or{' '}
      <NextLink href="/mixtape">listen to some music</NextLink> to calm your nerves.
    </Text>
  </Layout>
);

export default ErrorPage;
