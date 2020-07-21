import React from 'react';
import { theme } from 'styles/theme';

import orderBy from 'lodash/orderBy';

import { Row, Col } from 'components/grid';
import { Layout } from 'components/layout';
import { List } from 'components/list';
import { NextLink } from 'components/nextLink';
import { Text } from 'components/typography';

import { frontMatter as entries } from './**/*.mdx';

const sortedEntries = orderBy(entries, [(entry) => new Date(entry.publishDate)], 'desc').filter(
  (entry) => entry.published,
);

const BlogIndexPage = () => {
  return (
    <Layout bgColor={theme.colors.rojo} seo={{ title: 'Blog' }}>
      <Row mb={5}>
        <Col offset={{ lg: 3 }}>
          <Text lead mb={4}>
            I&apos;ve learned a lot over the years and want to share valuable lessons with those who
            are interested and can benefit. For this kind of thing, I prefer a bit more room than
            socials. Posts will generally revolve around front-end development, business strategy,
            art, and food technology.
          </Text>
          <Text lead>
            If that sounds good to you, sign up for the monthly newsletter or follow me on{' '}
            <a href="https://medium.com/@jon.black" target="_blank" rel="noreferrer">
              medium
            </a>
            .
          </Text>
        </Col>
      </Row>

      <Row mb={5}>
        <Col span={{ xs: 12, lg: 3 }} mb={{ xs: 4, lg: 0 }}>
          <Text as="h3">Entries</Text>
        </Col>
        <Col>
          <List>
            {sortedEntries.map((entry) => (
              <List.Item key={`entry_${entry.slug}`}>
                <NextLink href={`/blog/${entry.slug}`}>{entry.title}</NextLink>
              </List.Item>
            ))}
          </List>
        </Col>
      </Row>
    </Layout>
  );
};

export default BlogIndexPage;
