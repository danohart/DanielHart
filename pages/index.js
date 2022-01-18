import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Validators from '../components/validators';
import Benefits from '../components/benefits';
import Work from '../components/work';
import { getPages } from '../utils/wordpress';

export default ({ pages }) => {
  return (
    <Layout>
      {/* <SEO title="Custom Web Development" /> */}

      <Header />
      <Validators />
      <Benefits />
      <Work pages={pages} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const pages = await getPages();
  return {
    props: {
      pages,
    },
  };
}
