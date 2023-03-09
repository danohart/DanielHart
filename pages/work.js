import React from 'react';
import Layout from '../components/layout';
import Work from '../components/work';
import SEO from '../components/seo';

export default () => {
  return (
    <Layout>
      <SEO title="Work" />
      <Work />
    </Layout>
  );
};
