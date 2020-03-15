import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
    <p>
      <Link to="/">Go back to the homepage</Link> and try another page.
    </p>
  </Layout>
);

export default NotFoundPage;
