import { Link } from 'gatsby';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Header = () => (
  <Row>
    <Col>
      <header className="main-header">
        <h1>
          <Link to="/">
            Daniel Hart
            <br />
            Web Design
          </Link>
        </h1>
        <div className="subtext">
          Providing web development &amp; design to trusting clients in a
          creative environment. Helping them feel motivated about their business
          and increase revenue by always learning and adapting.
          <Row>
            <Col>
              <Button>
                <Link to="/about">Learn More</Link>
              </Button>
              <Button variant="secondary inverse">
                <Link to="/work">See Work</Link>
              </Button>
            </Col>
          </Row>
        </div>
      </header>
    </Col>
  </Row>
);

export default Header;
