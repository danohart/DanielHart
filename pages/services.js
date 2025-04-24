import React from 'react';
import Layout from '../components/layout';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import SEO from '../components/seo';

export default function Services() {
  const services = [
    {
      title: 'Custom Website Development',
      description:
        'Fully custom, high-performance websites built from scratch to meet your specific business goals.',
      deliverables: [
        'Responsive, mobile-first design',
        'SEO optimization',
        'Fast loading times',
        'Custom functionality',
        'Content management system',
      ],
      idealFor:
        'Businesses needing a unique online presence with specific functionality requirements.',
      priceRange: '$4,000-$10,000',
      timeframe: '4-8 weeks',
    },
    {
      title: 'E-Commerce Development',
      description:
        'Custom online stores designed to showcase your products and maximize conversions.',
      deliverables: [
        'Secure payment processing',
        'Inventory management',
        'Customer account functionality',
        'Order processing and fulfillment',
        'Product filtering and search',
      ],
      idealFor: 'Retailers looking to expand their reach through online sales.',
      priceRange: '$7,000-$15,000',
      timeframe: '6-12 weeks',
    },
    {
      title: 'Website Optimization',
      description:
        'Performance improvements for existing websites to enhance speed, usability, and conversion rates.',
      deliverables: [
        'Performance audit',
        'Speed optimization',
        'Mobile responsiveness improvements',
        'Conversion rate optimization',
        'SEO enhancements',
      ],
      idealFor:
        "Businesses with existing websites that aren't performing to their potential.",
      priceRange: '$2,000-$5,000',
      timeframe: '2-4 weeks',
    },
    {
      title: 'Ongoing Website Maintenance',
      description:
        'Regular updates and support to keep your website secure, up-to-date, and running smoothly.',
      deliverables: [
        'Security updates',
        'Performance monitoring',
        'Content updates',
        'Technical support',
        'Monthly reporting',
      ],
      idealFor:
        'All businesses wanting to protect their investment and keep their website current.',
      priceRange: '$200-$500/month',
      timeframe: 'Ongoing',
    },
  ];

  return (
    <Layout>
      <SEO
        title="Web Development Services"
        description="Professional web development services for businesses looking to increase their online presence and revenue."
      />

      <Row className="mb-5">
        <Col>
          <h1>Web Development Services</h1>
          <p>
            Leveraging over a decade of experience to deliver websites that
            drive business growth
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        {services.map((service, index) => (
          <Col xs={12} className="mb-4" key={index}>
            <Card className="service-card">
              <Card.Body>
                <Row>
                  <Col xs={12} md={8}>
                    <Card.Title as="h2">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>

                    <h4>What's Included:</h4>
                    <ul>
                      {service.deliverables.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Col>

                  <Col xs={12} md={4}>
                    <div className="service-meta p-3 rounded">
                      <p>
                        <strong>Ideal for:</strong> {service.idealFor}
                      </p>
                      <p>
                        <strong>Investment:</strong> {service.priceRange}
                      </p>
                      <p>
                        <strong>Timeframe:</strong> {service.timeframe}
                      </p>

                      <Button variant="primary" className="w-100 mt-3">
                        <Link href="/hire">
                          <span className="text-white">
                            Discuss This Service
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-5">
        <Col xs={12}>
          <h2 className="mb-4">My Development Process</h2>
        </Col>

        <Col xs={12} md={3} className="mb-3">
          <Card className="h-100 process-card">
            <Card.Body>
              <Card.Title>
                <span className="process-number">1. </span>
                Discovery
              </Card.Title>
              <Card.Text>
                Understanding your business goals, target audience, and project
                requirements.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={3} className="mb-3">
          <Card className="h-100 process-card">
            <Card.Body>
              <Card.Title>
                <span className="process-number">2. </span>
                Planning
              </Card.Title>
              <Card.Text>
                Creating a detailed roadmap with timelines, deliverables, and
                technical specifications.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={3} className="mb-3">
          <Card className="h-100 process-card">
            <Card.Body>
              <Card.Title>
                <span className="process-number">3. </span>
                Development
              </Card.Title>
              <Card.Text>
                Building your website with a focus on performance, usability,
                and achieving your business goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={3} className="mb-3">
          <Card className="h-100 process-card">
            <Card.Body>
              <Card.Title>
                <span className="process-number">4. </span>
                Launch & Support
              </Card.Title>
              <Card.Text>
                Deploying your website and providing ongoing support to ensure
                continued success.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={12}>
          <h2 className="mb-4">Frequently Asked Questions</h2>
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title as="h4">
                How long does it take to build a website?
              </Card.Title>
              <Card.Text>
                Most projects take 4-12 weeks depending on complexity.
                E-commerce sites typically take longer than informational
                websites due to additional functionality requirements.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title as="h4">Do you provide website hosting?</Card.Title>
              <Card.Text>
                Yes, I can recommend and set up hosting solutions based on your
                website's needs, or work with your existing hosting provider if
                you prefer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title as="h4">
                Will my website be mobile-friendly?
              </Card.Title>
              <Card.Text>
                Absolutely. All websites I build are fully responsive and
                optimized for all devices, from desktop computers to
                smartphones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title as="h4">How do we get started?</Card.Title>
              <Card.Text>
                The process begins with a consultation to discuss your goals and
                requirements. After this, I'll provide a detailed proposal
                outlining the scope, timeline, and investment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center py-5 rounded">
        <Col>
          <h2>Ready to elevate your online presence?</h2>
          <p className="mb-4">
            Let's discuss how my expertise can help your business grow.
          </p>
          <Button size="lg" variant="primary">
            <Link href="/hire">
              <span>Get in Touch</span>
            </Link>
          </Button>
        </Col>
      </Row>
    </Layout>
  );
}
