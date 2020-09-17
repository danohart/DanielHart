import { Link } from 'gatsby';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Nav = () => (
  <Row className="navigation justify-content-center">
    <Col xs={4} sm={2} md={2} lg={2}>
      <Link to="/">Home</Link>
    </Col>
    <Col xs={4} sm={2} md={2} lg={2}>
      <Link to="/work">Work</Link>
    </Col>
    <Col xs={4} sm={2} md={2} lg={2}>
      <Link to="/about">About</Link>
    </Col>
    <Col xs={4} sm={2} md={2} lg={2}>
      <Link to="/hire">Hire</Link>
    </Col>
    <Col xs={4} sm={2} md={2} lg={2}>
      <Link to="/blog">Blog</Link>
    </Col>
  </Row>
);

export default Nav;
