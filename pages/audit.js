import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const deliverables = [
  {
    number: '01',
    title: 'Live Screen-Share Audit',
    description:
      'We walk through your site together. I look at load time, mobile rendering, Core Web Vitals, security basics, and the friction points costing you conversions - while you watch.',
  },
  {
    number: '02',
    title: 'Written Follow-Up',
    description:
      'After the call you get a short, prioritized list of what to fix and why - sent the same day. No vague takeaways, no 40-page PDF.',
  },
  {
    number: '03',
    title: 'No Pitch, No Pressure',
    description:
      "This is not a sales call for a bigger engagement. You get the audit, the summary, and that's it. If you want to work together after, great - but there's zero expectation.",
  },
];

const faqs = [
  {
    q: "What if I don't have anything technical to show you?",
    a: "That's fine. The audit covers UX, conversion friction, and mobile experience too - you don't need a codebase. A live URL is enough.",
  },
  {
    q: 'Is this a sales pitch for more work?',
    a: "No. You get what you paid for - a 30-minute audit and a written summary. If you want to talk about next steps after that, I'm happy to, but there's no pitch baked into the call.",
  },
  {
    q: 'What do I need to prepare?',
    a: "Just a link to your site. That's it. No slides, no briefs, no prep work.",
  },
  {
    q: 'What if I need more than 30 minutes?',
    a: 'The 60-minute deep dive is available if you have a larger codebase or multiple flows you want to cover. Select it during booking.',
  },
];

const logos = [
  { src: '/images/proof/grainger.png', alt: 'Grainger' },
  { src: '/images/proof/yum-brands.png', alt: 'Yum Brands' },
  { src: '/images/proof/discovery-education.png', alt: 'Discovery Education' },
  { src: '/images/proof/bump-boxes.png', alt: 'Bump Boxes' },
];

export default function Audit() {
  return (
    <Layout>
      <SEO
        title="Book a Website Audit Call"
        description="A flat-rate 30-minute audit call for founders and small business owners who want to know what's actually slowing their site down. Load time, mobile UX, security basics, and conversion friction - reviewed live, with a written follow-up."
      />

      <Row className="mb-5">
        <Col
          xs={12}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
          className="text-center"
        >
          <h1 className="mb-3">
            Find out what&apos;s actually slowing your site down in 30 minutes.
          </h1>
          <p className="lead mb-4">
            For founders and small business owners whose site feels slow, dated,
            or just&nbsp;offm but who aren&apos;t sure where to start.
          </p>
          <Button size="lg" variant="secondary" href="#booking">
            Book a 30-Min Audit - $198
          </Button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={12}>
          <h2 className="mb-4">What&apos;s included</h2>
        </Col>
        {deliverables.map((item) => (
          <Col xs={12} md={4} key={item.number} className="mb-4">
            <Card className="service-card h-100">
              <Card.Body>
                <p className="process-number mb-1">{item.number}</p>
                <Card.Title as="h3">{item.title}</Card.Title>
                <p>{item.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-5">
        <Col xs={12}>
          <h2 className="mb-1">Brands I&apos;ve worked with</h2>
          <p className="mb-4">
            16+ years building production web apps for teams from solo founders
            to Fortune 500.
          </p>
        </Col>
        {logos.map((logo) => (
          <Col
            xs={6}
            sm={6}
            md={3}
            key={logo.alt}
            className="mb-3 d-flex justify-content-center align-items-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={300}
              height={200}
              sizes="(max-width: 767px) 50vw, 25vw"
            />
          </Col>
        ))}
      </Row>

      <Row className="mb-5">
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          <Card className="service-card">
            <Card.Body>
              <h2 className="mb-3">
                One option. One price. No surprise invoice.
              </h2>
              <Row>
                <Col xs={12} md={6} className="mb-4">
                  <p className="process-number mb-1">30-min</p>
                  <h3>Website Audit Call</h3>
                  <p>
                    Live screen-share review of your site&apos;s speed, mobile
                    experience, security basics, and conversion friction - plus
                    a written priority list sent after the call.
                  </p>
                  <p>
                    <strong>$198 flat rate, paid at booking.</strong>
                  </p>
                  <Button size="lg" variant="secondary" href="#booking">
                    Book the 30-Min Audit
                  </Button>
                </Col>
                <Col xs={12} md={6}>
                  <div className="service-meta p-3 rounded">
                    <p className="process-number mb-1">60-min</p>
                    <h3>Deep Dive Audit</h3>
                    <p>
                      Same live audit format but twice the time - right for
                      larger codebases, multi-flow sites, or founders who want
                      to dig into the technical detail.
                    </p>
                    <p>
                      <strong>$497 flat rate, paid at booking.</strong>
                    </p>
                    <Button size="lg" variant="secondary" href="#booking">
                      Book the 60-Min Deep Dive
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5" id="booking">
        <Col xs={12}>
          <h2 className="mb-3">Pick a time</h2>
          <p className="mb-4">
            Choose your slot below. Stripe payment is collected during booking -
            nothing else needed from you until the call.
          </p>
        </Col>
        <Col xs={12}>
          <div style={{ minHeight: '700px' }}>
            <iframe
              src="https://calendly.com/danielhartweb/"
              width="100%"
              height="700"
              frameBorder="0"
              title="Book a Website Audit with Daniel Hart"
              style={{ border: 'none', borderRadius: '8px' }}
            />
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={12}>
          <h2 className="mb-4">Common questions</h2>
        </Col>
        {faqs.map((faq, i) => (
          <Col xs={12} md={6} key={i} className="mb-4">
            <Card className="service-card h-100">
              <Card.Body>
                <Card.Title as="h3" className="h5">
                  {faq.q}
                </Card.Title>
                <p className="mb-0">{faq.a}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="text-center py-5 rounded mb-5">
        <Col>
          <h2 className="mb-3">
            Ready to see what&apos;s holding your site back?
          </h2>
          <Button size="lg" variant="secondary" href="#booking">
            Book a 30-Min Audit - $198
          </Button>
        </Col>
      </Row>
    </Layout>
  );
}
