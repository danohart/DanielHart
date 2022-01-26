import React from 'react';
import Head from 'next/head';
// import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, meta, title }) {
  const site = { siteMetadata: { title: 'Daniel Hart Web Design' } };
  const metaTitle = title + ' - ' + site.siteMetadata.title;
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://danielhart.co/" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://danielhart.co/images/daniel-hart-web-design.png"
      />
    </Head>
  );
}

export default SEO;
