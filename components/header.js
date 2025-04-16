import Link from 'next/link';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import YearsOfExperience from './yearsOfExperience';

const Header = () => {
  const yearsWorked = new Date().getFullYear() - 2010;

  return (
    <Row className="main-header-section">
      <Col xs={12}>
        <header className="main-header">
          <h1>
            <Link href="/">Daniel Hart</Link>
            <br />
            <Link href="/">Web Design</Link>
          </h1>
          <div className="subtext">
            Providing web development &amp; design to trusting clients in a
            creative environment. Helping them feel motivated about their
            business and increase revenue by always learning and adapting.
            <Row>
              <Col>
                <Button>
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button variant="secondary inverse">
                  <Link href="/work">See Work</Link>
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
            <span className="badge bg-primary">React</span>
            <span className="badge bg-secondary">Next.js</span>
            <span className="badge bg-info">JavaScript</span>
            <span className="badge bg-warning">E-Commerce</span>
            <span className="badge bg-success">Performance</span>
            <span className="badge bg-danger">HTML/CSS</span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
