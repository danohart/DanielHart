import Link from 'next/link';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => (
  <Row>
    <Col className="main-footer">
      <Row>
        <Col className="copyright">
          © {new Date().getFullYear()} Daniel Hart Web Design
        </Col>
      </Row>
      <Row>
        <Col>
          <Link href="/hire">Work With Me</Link>
        </Col>
        <Col>
          <Link href="/work">See My Work</Link>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Footer;
