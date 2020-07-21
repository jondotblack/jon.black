import React from 'react';
import { useRouter } from 'next/router';
import orderBy from 'lodash/orderBy';
import isEmpty from 'lodash/isEmpty';

import { theme } from 'styles/theme';

import { Row, Col } from 'components/grid';
import { Layout } from 'components/layout';
import { List } from 'components/list';
import { NextLink } from 'components/nextLink';
import { Text } from 'components/typography';

import { frontMatter as entries } from '../**/*.mdx';

const BlogIndexPage = () => {
  const router = useRouter();
  const { tag } = router.query;

  const sortedEntries = orderBy(entries, [(entry) => new Date(entry.publishDate)], 'desc').filter(
    (entry) => entry.published && entry.tags.includes(tag),
  );

  return (
    <Layout bgColor={theme.colors.rojo} seo={{ title: 'Blog' }}>
      <Row mb={5}>
        <Col span={{ xs: 12, lg: 3 }} mb={{ xs: 4, lg: 0 }}>
          <Text as="h3">Entries</Text>
          <Text small>tagged with #{tag}</Text>
        </Col>
        <Col>
          <List>
            {isEmpty(sortedEntries) ? (
              <List.Item>
                <Text>No entries found.</Text>
              </List.Item>
            ) : (
              sortedEntries.map((entry) => (
                <List.Item key={`entry_${entry.slug}`}>
                  <NextLink href={`/blog/${entry.slug}`}>{entry.title}</NextLink>
                </List.Item>
              ))
            )}
          </List>
        </Col>
      </Row>
    </Layout>
  );
};

export default BlogIndexPage;
