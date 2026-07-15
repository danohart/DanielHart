import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { Row, Col, Button } from 'react-bootstrap';
import Header from '../components/header';
import Validators from '../components/validators';
import Benefits from '../components/benefits';
import Work from '../components/work';
import SEO from '../components/seo';
import { workContent } from '../content/work';
import { GetStaticProps } from 'next';

interface HomePageProps {
  featuredWork: typeof workContent.sites;
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      featuredWork: workContent.sites,
    },
    revalidate: 60 * 60 * 24 * 7,
  };
};

const Home: React.FC<HomePageProps> = ({ featuredWork }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Hart',
    jobTitle: 'Fractional Tech Partner',
    description:
      'Frontend performance engineering and analytics reliability for eCommerce and growth-stage brands.',
    url: 'https://danielhart.co',
    knowsAbout: [
      'eCommerce',
      'Core Web Vitals',
      'Frontend Performance',
      'Analytics Reliability',
      'Platform Migration',
      'Subscription Architecture',
    ],
  };

  const CTA = (
    <Row>
      <Col className="text-center m-4">
        <h3>Ready to eliminate the technical friction costing you conversions?</h3>
        <Button variant="primary" size="lg">
          <Link href="/hire">Start the Conversation</Link>
        </Button>
      </Col>
    </Row>
  );

  return (
    <Layout>
      <SEO
        title="Fractional Tech Partner for eCommerce & Growth Brands"
        description="Frontend performance engineering and analytics reliability for eCommerce and growth-stage brands. I eliminate the technical friction leaking mobile conversions and corrupting your data."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <Validators />
      {CTA}
      <Benefits />
      <Work pages={featuredWork} />
      {CTA}
    </Layout>
  );
};

export default Home;