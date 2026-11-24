import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBarcode,
  faCodeBranch,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

const benefitsIcon = (icon) => (
  <Row>
    <Col>
      <div className="benefits-icon">
        <div className="icon-background">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
    </Col>
  </Row>
);

const Benefits = () => (
  <Row className="benefits">
    <Col xs={12} sm={12} md={4} lg={4} className="benefits-card">
      <Row>
        <Col>
          <Image
            src="/mobile.jpg"
            alt="Mobile Design Development Online"
            width="300"
            height="300"
          />
        </Col>
      </Row>
      {/* {benefitsIcon(faBarcode)} */}
      <Col className="benefits-description">
        <h3>Faster Mobile Checkout</h3>
        <p>
          I audit and cut the client-side bloat slowing down your product pages
          and&nbsp;checkout.
        </p>
      </Col>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} className="benefits-card">
      <Row>
        <Col>
          <Image
            src="/data.jpg"
            alt="Analytics data integrity"
            width="300"
            height="300"
          />
        </Col>
      </Row>
      {/* {benefitsIcon(faCodeBranch)} */}
      <Col className="benefits-description">
        <h3>Tracking You Can Trust</h3>
        <p>
          I fix GA4, Klaviyo, and attribution gaps so your ad and email
          decisions are based on real&nbsp;numbers.
        </p>
      </Col>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} className="benefits-card">
      <Row>
        <Col>
          <Image
            src="/speed.jpg"
            alt="Tech debt elimination"
            width="300"
            height="300"
          />
        </Col>
      </Row>
      {/* {benefitsIcon(faCode)} */}
      <Col className="benefits-description">
        <h3>A Leaner Stack</h3>
        <p>
          Extra apps and plugins add weight. I cut the ones that aren&apos;t
          earning their&nbsp;keep.
        </p>
      </Col>
    </Col>
  </Row>
);

export default Benefits;
