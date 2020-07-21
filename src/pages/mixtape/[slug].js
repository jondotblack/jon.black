import React from 'react';
import PropTypes from 'prop-types';
import { theme } from 'styles/theme';

import { slugify } from 'utils/slugify';

import { Layout } from 'components/layout';
import { Mixtape } from 'components/mixtape';

import { mixtapes } from 'data/mixtape';

const propTypes = {
  description: PropTypes.string,
  spotifyId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const defaultProps = {
  description: null,
};

const MixtapeDetailedPage = (props) => {
  const { description, name, spotifyId } = props;

  return (
    <Layout bgColor={theme.colors.morado} seo={{ title: `Mixtape - ${name}` }}>
      <Mixtape description={description} name={name} spotifyId={spotifyId} />
    </Layout>
  );
};

MixtapeDetailedPage.getInitialProps = (ctx) => {
  const { slug = '' } = ctx.query;

  const post = mixtapes.filter((mixtape) => slug.toLowerCase() === slugify(mixtape.name));

  return { ...post[0] };
};

MixtapeDetailedPage.propTypes = propTypes;
MixtapeDetailedPage.defaultProps = defaultProps;

export default MixtapeDetailedPage;
