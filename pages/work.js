import React from 'react';
import Layout from '../components/layout';
import Work from '../components/work';
import SEO from '../components/seo';
import { getPages } from '../utils/wordpress';

export default ({ pages }) => {
  return (
    <Layout>
      <SEO title="Work" />
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
