import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_URL = 'https://danielhart.co';

interface SEOProps {
  description?: string;
  title: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ description, title, image, url }) => {
  const router = useRouter();
  const site = {
    title: 'Daniel Hart — Front End Developer',
    description:
      'Frontend performance engineering and analytics reliability for eCommerce and growth-stage brands. I eliminate the technical friction leaking mobile conversions and corrupting your data.',
  };

  const metaTitle = title + ' - ' + site.title;
  const metaDescription = description || site.description;
  const metaImage = image || `${SITE_URL}/images/daniel-hart-web-design.png`;
  const path = router.asPath.split('?')[0].split('#')[0];
  const canonicalUrl = url || `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
