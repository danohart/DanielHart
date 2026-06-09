import React from 'react';
import Layout from '../components/layout';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import SEO from '../components/seo';

export default function Services() {
  const pillars = [
    {
      number: '01',
      title: 'Frontend Performance Optimization',
      tagline: 'Stop bleeding revenue to slow pages.',
      whoItsFor:
        'eCommerce brands and content-driven sites where mobile conversion underperforms desktop, ad spend efficiency has degraded, or Core Web Vitals scores are dragging down organic visibility.',
      whatIDo: [
        'Core Web Vitals audit (LCP, CLS, INP)',
        'Third-party script triage and deferral strategy',
        'Checkout funnel rendering optimization',
        'Image, font, and critical-path delivery improvements',
        'Ongoing performance regression monitoring',
      ],
      proofPoint:
        'Bump Boxes: 50% faster mobile load times and 40% checkout conversion lift after migrating off a degraded WordPress monolith to a custom React + GraphQL stack.',
    },
    {
      number: '02',
      title: 'Data Ingestion & Analytics Integrity',
      tagline: "Make sure your dashboards reflect reality — not what you wish were true.",
      whoItsFor:
        "Brands where Klaviyo, GA4, or platform event data doesn't reconcile with actual orders, or where dbt pipelines show unexplained gaps that your team can't trace back to a root cause.",
      whatIDo: [
        'Client-side tracker audit (pixel firing order, SPA lifecycle mismatches, race conditions)',
        'Tag manager hygiene and event schema documentation',
        'Warehouse-layer event reconciliation',
        'Attribution integrity review across ad platforms',
        'Ongoing data layer ownership and monitoring',
      ],
      proofPoint:
        'Discovery Education: Rebuilt the data ingestion layer to ensure reliable, complete event capture at enterprise scale — eliminating the gap between what happened and what the dashboards showed.',
    },
    {
      number: '03',
      title: 'Fractional Tech Leadership',
      tagline: 'Senior engineering judgment, without the full-time overhead.',
      whoItsFor:
        'Growth-stage companies with an expanding tech stack but no internal senior engineer to vet vendors, own migrations, enforce engineering standards, or protect performance as the team scales.',
      whatIDo: [
        'Monthly retainer engagement — I operate as an embedded tech lead',
        'App and plugin creep audit (performance cost vs. business value per integration)',
        'Platform migration planning and zero-downtime execution',
        'Engineering process setup (PR standards, deploy pipelines, QA checklists)',
        'Technical vetting for new vendors, tools, and third-party integrations',
      ],
      proofPoint:
        'Led end-to-end platform overhauls across multiple mid-market eCommerce and subscription brands. Mentored junior engineers and established standards that outlasted the engagement.',
    },
  ];

  const notFor = [
    'Founders who want to move fast and fix it later',
    'Projects where "good enough" is the actual standard',
    'Teams that treat performance as a launch-day checkbox',
  ];

  return (
    <Layout>
      <SEO
        title="Fractional Tech Services"
        description="Frontend performance engineering, analytics integrity, and fractional tech leadership for eCommerce and growth-stage brands. Three engagement pillars, zero fluff."
      />

      <Row className="mb-5">
        <Col>
          <h1>How I Work</h1>
          <p className="lead">
            I don&apos;t sell hours or deliverables. I own outcomes. Every engagement
            maps to one of three pillars — each one tied directly to a business
            metric your team already cares about.
          </p>
        </Col>
      </Row>

      {pillars.map((pillar, index) => (
        <Row className="mb-5" key={index}>
          <Col xs={12}>
            <Card className="service-card">
              <Card.Body>
                <Row>
                  <Col xs={12} md={8}>
                    <p className="process-number mb-1">{pillar.number}</p>
                    <Card.Title as="h2">{pillar.title}</Card.Title>
                    <p className="lead mb-3">
                      <em>{pillar.tagline}</em>
                    </p>
                    <p>
                      <strong>Who this is for:</strong> {pillar.whoItsFor}
                    </p>

                    <h4>What I do:</h4>
                    <ul>
                      {pillar.whatIDo.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Col>

                  <Col xs={12} md={4}>
                    <div className="service-meta p-3 rounded">
                      <p>
                        <strong>Proof point:</strong>
                      </p>
                      <p>{pillar.proofPoint}</p>

                      <Button variant="primary" className="w-100 mt-3">
                        <Link href="/hire">
                          <span className="text-white">Let&apos;s Scope It</span>
                        </Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}

      <Row className="mb-5">
        <Col xs={12}>
          <h2 className="mb-3">Who this is NOT for</h2>
          <p>
            I work best with teams that already believe performance and data
            quality are business priorities — not afterthoughts. This probably
            isn&apos;t a fit if:
          </p>
          <ul>
            {notFor.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>
            If that&apos;s not you,{' '}
            <Link href="/hire">let&apos;s talk.</Link>
          </p>
        </Col>
      </Row>

      <Row className="text-center py-5 rounded">
        <Col>
          <h2>Ready to move the metrics that matter?</h2>
          <p className="mb-4">
            Tell me about the technical friction costing your team the most
            right now.
          </p>
          <Button size="lg" variant="primary">
            <Link href="/hire">
              <span>Start the Conversation</span>
            </Link>
          </Button>
        </Col>
      </Row>
    </Layout>
  );
}
