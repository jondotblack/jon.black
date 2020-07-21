import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import { Col } from 'components/grid';
import { NextLink } from 'components/nextLink';
import { Text } from 'components/typography';
import { Layout } from '.';

import * as Styled from './Layout.styled';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const BlogLayout = (frontMatter) => {
  const MDX = (props) => {
    const { children } = props;
    const { description, publishDate, published, readingTime, tags, title } = frontMatter;

    useEffect(() => {
      if (!published) {
        Router.push('/blog');
      }
    }, []);

    return (
      <Layout
        offsetFooter={false}
        seo={{ title: `Blog - ${title}`, description, openGraph: { description } }}
      >
        {published && (
          <Styled.Blog>
            <Col>
              <Text as="h1">{title}</Text>
              {children}
            </Col>

            <Col span={{ xs: 12, lg: 3 }} mt={{ xs: 5, lg: 0 }}>
              <Text small>
                Published on <b>{publishDate}</b>
              </Text>
              <Text small>
                Word count <b>{readingTime.words}</b>
              </Text>
              <Text small>
                Read time <b>{Math.ceil(readingTime.minutes)} minutes</b>
              </Text>
              {tags &&
                tags.map((tag) => (
                  <span key={`tag_${tag}`}>
                    <NextLink href={`/blog/tags/${tag}`}>#{tag}</NextLink>,{' '}
                  </span>
                ))}
            </Col>
          </Styled.Blog>
        )}
      </Layout>
    );
  };

  MDX.displayName = 'BlogLayout';
  MDX.propTypes = propTypes;

  return MDX;
};

export default BlogLayout;
