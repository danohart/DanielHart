import Link from 'next/link';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Row className="main-header-section">
      <Col xs={12}>
        <header className="main-header">
          <h1>
            <Link href="/">
              Daniel Hart
              <br />
              <div className="header-role">
                Frontend Developer &amp; Tech Partner
              </div>
            </Link>
          </h1>
          <Row>
            <Col
              xs={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
            >
              <h2>
                I fix the technical friction that leaks mobile conversions and
                corrupts your data.
              </h2>
              <div className="subtext">
                Whether you&apos;re losing ad spend to slow pages or your team
                is optimizing against broken analytics — I find it, fix it, and
                show you the impact.
                <Row>
                  <Col>
                    <Button>
                      <Link href="/services">See How I Work</Link>
                    </Button>
                    <Button variant="secondary inverse">
                      <Link href="/work">View Case Studies</Link>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </header>
      </Col>

      <Col
        xs={12}
        className="d-flex align-items-center justify-content-center mb-4"
      >
        <div className="header-graphic">
          <div className="expertise-badges d-flex flex-wrap justify-content-center">
            <span className="badge bg-primary">Core Web Vitals</span>
            <span className="badge bg-secondary">Checkout Conversion</span>
            <span className="badge bg-info">Event Tracking Integrity</span>
            <span className="badge bg-warning">App Creep Elimination</span>
            <span className="badge bg-success">Zero-Downtime Migration</span>
            <span className="badge bg-danger">Subscription Architecture</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
