import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { Global, css } from '@emotion/core';
import { Styles } from 'styles/global';

import orderBy from 'lodash/orderBy';
import { slugify } from 'utils/slugify';

import { Footer } from 'components/footer';
import { Container, Row, Col } from 'components/grid';
import { Header } from 'components/header';
import { StatusBar } from 'components/statusBar';

import { mixtapes } from 'data/mixtape';
import { frontMatter as entries } from 'pages/blog/**/*.mdx';

const sortedEntries = orderBy(entries, [(entry) => new Date(entry.publishDate)], 'desc').filter(
  (entry) => entry.published,
);

const propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  narrow: PropTypes.bool,
  offsetFooter: PropTypes.bool,
  seo: PropTypes.shape({
    title: PropTypes.string,
  }),
};

const defaultProps = {
  bgColor: 'white',
  narrow: false,
  offsetFooter: true,
  seo: null,
};

const Layout = (props) => {
  const { bgColor, children, narrow, offsetFooter, seo } = props;
  const recentBlogPost = sortedEntries[0];
  const recentMixtape = mixtapes[0];

  const updates = [
    `Recently wrote <NextLink href="/blog/${recentBlogPost.slug}">${recentBlogPost.title}</NextLink>`,
    `Currently playing <NextLink href="/mixtape/${slugify(recentMixtape.name)}">${
      recentMixtape.name
    }</NextLink>`,
    `This site is open source on <a href="https://github.com/jondotblack/jon.black" target="_blank" rel="noopener noreferrer">GitHub</a>`,
  ];

  return (
    <>
      <Global styles={Styles} />
      <Global
        styles={css`
          body {
            background-color: ${bgColor};
          }
        `}
      />

      {seo && <NextSeo {...seo} title={`jon.black | ${seo.title}`} />}

      <StatusBar bgColor={bgColor} updates={updates} />
      <Header bgColor={bgColor} />
      <Container pb={4}>
        {narrow ? (
          <Row justifyContent="center">
            <Col span={{ xs: 12, md: 10, lg: 8 }}>{children}</Col>
          </Row>
        ) : (
          <>{children}</>
        )}
      </Container>
      <Footer offsetFooter={offsetFooter} />
    </>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
