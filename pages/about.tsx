import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import { Row, Col, Button, Card } from 'react-bootstrap';
import SEO from '../components/seo';
import YearsOfExperience from '../components/yearsOfExperience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faMobileAlt,
  faChartLine,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { GetStaticProps } from 'next';

interface ExpertiseArea {
  title: string;
  description: string;
  icon: IconDefinition;
}

interface AboutPageProps {
  yearsWorked: number;
  expertiseAreas: ExpertiseArea[];
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const currentYear = new Date().getFullYear();
  const yearsWorked = currentYear - 2010;

  const expertiseAreas: ExpertiseArea[] = [
    {
      title: 'Core Web Vitals & Mobile Revenue',
      description:
        'LCP, CLS, and INP are not abstract scores — they are measurable levers on mobile conversion and ad spend efficiency. I audit, prioritize, and fix the issues that move revenue.',
      icon: faTachometerAlt,
    },
    {
      title: 'Conversion-Focused Frontend Architecture',
      description:
        'Every architectural decision has a performance cost and a business consequence. I build and migrate frontends with checkout conversion and load time as first-class constraints — not afterthoughts.',
      icon: faMobileAlt,
    },
    {
      title: 'Analytics Integrity & Data Layer Ownership',
      description:
        'Broken event tracking means your team optimizes against bad data. I own the full data layer — from client-side pixel health to warehouse reconciliation — so your dashboards reflect what actually happened.',
      icon: faChartLine,
    },
  ];

  return {
    props: {
      yearsWorked,
      expertiseAreas,
    },
    revalidate: 60 * 60 * 24,
  };
};

const About: React.FC<AboutPageProps> = ({ yearsWorked, expertiseAreas }) => {
  return (
    <Layout>
      <SEO
        title="About Daniel Hart - Fractional Tech Partner"
        description="Fractional Tech Partner for eCommerce and growth-stage brands. I own frontend performance and analytics reliability so your team can trust the data and protect the funnel."
      />
      <Row className="mb-5 align-items-center">
        <Col xs={12} md={8}>
          <h1>Hello, I'm Daniel Hart</h1>
          <h2>Fractional Tech Partner — {yearsWorked}+ Years in Production</h2>

          <p className="lead mb-4">
            I work with eCommerce and growth-stage brands that have outgrown their
            initial tech stack. My job is to own frontend performance and data
            reliability — so your growth team can trust every dashboard number
            and protect every ad dollar.
          </p>

          <Button size="lg" className="mb-4">
            <Link href="/work">View Case Studies</Link>
          </Button>
        </Col>

        <Col xs={12} md={4}>
          <div className="profile-image-container">
            <Image
              src="/daniel hart black and white-hilo.png"
              alt="Daniel Hart, web developer"
              title="Daniel Hart, web developer"
              width={1200}
              height={900}
              className="img-fluid rounded"
            />
          </div>
        </Col>
      </Row>

      <h3 className="mb-3 text-center">Years of Experience in Numbers</h3>
      <YearsOfExperience />

      <Row className="mb-5">
        <Col>
          <h3 className="mb-4">Professional Background</h3>
          <p>
            With <strong>{yearsWorked}+ years in production</strong>, I&apos;ve worked
            with brands ranging from local subscription businesses to Fortune 500
            companies including Grainger and Yum! Brands. I&apos;ve operated at
            enterprise scale and I know the difference between infrastructure
            that holds up under load and infrastructure that looks fine until it
            doesn&apos;t.
          </p>
          <p>
            I don&apos;t sell hours. I own outcomes. Every engagement starts with
            identifying the specific technical friction costing your business
            the most — and ends with measurable proof that it&apos;s gone.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={12}>
          <h3>Areas of Expertise</h3>
        </Col>
        {expertiseAreas.map((area, index) => (
          <Col xs={12} md={6} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrapper me-3">
                    <FontAwesomeIcon icon={area.icon} size="2x" />
                  </div>
                  <Card.Title className="mb-0">{area.title}</Card.Title>
                </div>
                <Card.Text>{area.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-5 text-center">
        <Col>
          <h3>Ready to move the metrics that matter?</h3>
          <p className="lead">
            Tell me about the technical friction costing your team the most
            right now.
          </p>
          <Button size="lg">
            <Link href="/hire">Start the Conversation</Link>
          </Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default About;