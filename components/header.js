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
                    <Button size="lg" variant="primary">
                      <Link href="/services">See How I Work</Link>
                    </Button>
                    <Button size="lg" variant="secondary inverse">
                      <Link href="/work">View Case Studies</Link>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </header>
      </Col>
    </Row>
  );
};

export default Header;
