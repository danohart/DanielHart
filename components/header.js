import Link from 'next/link';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import YearsOfExperience from './yearsOfExperience';

const Header = () => {
  return (
    <Row className="main-header-section">
      <Col xs={12}>
        <header className="main-header">
          <h1>
            <Link href="/">Daniel Hart</Link>
            <br />
            <Link href="/">Fractional Tech Partner</Link>
          </h1>
          <div className="subtext">
            I help eCommerce and growth-stage brands eliminate the frontend
            performance leaks and analytics blind spots that quietly drain ad
            spend, suppress mobile conversions, and skew every KPI dashboard
            your team relies on.
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
