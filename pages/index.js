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

export default function Home() {
  const CTA = (
    <Row>
      <Col className="text-center m-4">
        <h3>Need a web developer for your next project?</h3>
        <Button variant="primary" size="lg">
          <Link href="/hire">Contact Me</Link>
        </Button>
      </Col>
    </Row>
  );

  return (
    <Layout>
      <SEO title="Custom Web Development" />

      <Header />
      <Validators />
      {CTA}
      <Benefits />
      <Work pages={workContent.sites} />
      {CTA}
    </Layout>
  );
}
