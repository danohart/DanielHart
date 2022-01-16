import Link from 'next/link';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Nav = () => (
  <Row className="navigation justify-content-center">
    <Col xs={4} sm={2} md={2} lg={2}>
      <Link href="/">Home</Link>
    </Col>
    <Col xs={4} sm={2} md={2} lg={2}>
      <Link href="/work">Work</Link>
    </Col>
    <Col xs={4} sm={2} md={2} lg={2}>
      <Link href="/about">About</Link>
    </Col>
    <Col xs={4} sm={2} md={2} lg={2}>
      <Link href="/hire">Hire</Link>
    </Col>
    <Col xs={4} sm={2} md={2} lg={2}>
      <Link href="/blog">Blog</Link>
    </Col>
  </Row>
);

export default Nav;
