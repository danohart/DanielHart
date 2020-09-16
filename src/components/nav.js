import { Link } from 'gatsby';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Nav = () => (
  <Row className="navigation">
    <Col>
      <Link to="/">Home</Link>
    </Col>
    <Col>
      <Link to="/work">Work</Link>
    </Col>
    <Col>
      <Link to="/about">About</Link>
    </Col>
    <Col>
      <Link to="/hire">Hire</Link>
    </Col>
    <Col>
      <Link to="/blog">Blog</Link>
    </Col>
  </Row>
);

export default Nav;
