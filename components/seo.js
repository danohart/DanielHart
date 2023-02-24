import React from 'react';
import Head from 'next/head';

function SEO({ description, title, image }) {
  const site = {
    title: 'Daniel Hart :: Freelance Web Designer & Development',
    description:
      'Feel motivated about your business and increase revenue with custom web design and development.',
  };

  const metaTitle = title + ' - ' + site.title;
  const metaDescription = description ? description : site.description;
  const metaImage = image
    ? image
    : 'https://danielhart.co/images/daniel-hart-web-design.png';
  const currentUrl = null;
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
    </Head>
  );
}

export default SEO;
