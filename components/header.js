import Link from 'next/link';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Header = () => (
  <Row>
    <Col>
      <header className="main-header">
        <h1>
          <Link href="/">Daniel Hart Web Design</Link>
        </h1>
        <p className="subtext">
          Providing web development &amp; design to trusting clients in a
          creative environment. Helping them feel motivated about their business
          and increase revenue by always learning and adapting.
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
        </p>
      </header>
    </Col>
  </Row>
);

export default Header;
