import Link from 'next/link';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => (
  <Row>
    <Col>
      <footer className="main-footer">
        <Col className="copyright">
          © {new Date().getFullYear()} Daniel Hart Web Design
        </Col>
        <Row>
          <Col>
            <Link href="/hire">Work With Me</Link>
          </Col>
          <Col>
            <Link href="/work">See My Work</Link>
          </Col>
        </Row>
      </footer>
    </Col>
  </Row>
);

export default Footer;
