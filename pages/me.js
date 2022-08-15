import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { Row, Col, Button } from 'react-bootstrap';
import SEO from '../components/seo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => (
  <Layout>
    <SEO title="How To Find Me" />
    <Row>
      <Col xs={12} sm={12} md={8} lg={8}>
        <h1>Daniel Hart</h1>
        <Row>
          <Col xs={12} sm={12} md={4} lg={12} className="mb-4">
            <img
              src="/images/Daniel Hart - Small Business Owner.png"
              alt="Daniel Hart, web developer"
              title="Daniel Hart, web developer"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Frontend Web Development</h2>
          </Col>
        </Row>
        <Row className="no-gutters">
          👨🏼‍💼 Small business owner. 🖥️ Web designer. 🚵🏼‍♀️ Aging hipster. 🏢
          Friendly neighborhood friend. 🚆 🚍 Public transportation advocate.
        </Row>

        <Row>
          <Col xs={{ span: 6, offset: 3 }} className="mt-4 mb-4">
            <Row>
              <Col xs={6}>
                <a href="https://www.instagram.com/danohart/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} size="sm" />
                </a>
              </Col>
              <Col xs={6}>
                <a href="https://www.linkedin.com/in/danohart/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col xs={12} sm={12} md={4} lg={12} className="text-center">
          <Button>
            <Link href="/work">See examples of my work</Link>
          </Button>
        </Col>
      </Col>
    </Row>
  </Layout>
);

export default About;
