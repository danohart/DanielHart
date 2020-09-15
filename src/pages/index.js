import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Validators from '../components/validators';
import Benefits from '../components/benefits';
import SEO from '../components/seo';
import Work from '../components/work';

export default () => {
  return (
    <Layout>
      <SEO title="Custom Web Development" />

      <Header />
      <Validators />
      <Benefits />
      <Work />
    </Layout>
  );
};
