import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Row, Col, Button } from 'react-bootstrap';
import ReactGA from 'react-ga4';

const ThankYou: React.FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.event({
        category: 'Contact',
        action: 'form_submit',
        label: 'hire_page',
      });
    }
  }, []);

  return (
    <Layout>
      <SEO
        title="Message Sent"
        description="Thanks for reaching out. I'll be in touch within one business day."
      />
      <Row className="text-center py-5">
        <Col xs={12} md={8} className="mx-auto">
          <h1>Message received.</h1>
          <p className="lead">
            I&apos;ll review what you&apos;ve sent and get back to you within one
            business day with an honest take on whether I&apos;m the right fit.
          </p>
          <p>
            In the meantime, feel free to look through some of the work I&apos;ve
            done for brands like yours.
          </p>
          <Button size="lg" className="mt-3">
            <Link href="/work">View Case Studies</Link>
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default ThankYou;
