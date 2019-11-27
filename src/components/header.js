import { Link } from 'gatsby';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Header = () => (
  <Row>
    <Col>
      <header className="main-header">
        <h1>
          <Link to="/">Daniel Hart Web Design</Link>
        </h1>
        <p className="subtext">
          Providing web development &amp; design to trusting clients in a
          creative environment with a knowledgeable approach. Helping them feel
          motivated about their business and increase revenue by always learning
          and adapting.
          <Button>This is a button</Button>
        </p>
      </header>
    </Col>
  </Row>
);

export default Header;
