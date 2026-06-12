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
        <h3>Mobile Revenue Protection</h3>
        <p>
          Every 100ms of LCP improvement drives measurable checkout lift. I
          audit and eliminate the client-side bloat silently killing your mobile
          funnel — before it shows up as a&nbsp;miss.
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
        <h3>Analytics You Can Trust</h3>
        <p>
          Klaviyo drops, GA4 gaps, and mismatched attribution mean your team is
          optimizing against fiction. I ensure 0% event packet loss between your
          storefront and your data&nbsp;warehouse.
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
        <h3>Tech Debt That Pays Off</h3>
        <p>
          App and plugin creep costs brands 8–12 Lighthouse points and seconds
          of load time per install. I cut the dead weight, show the P&amp;L
          impact, and keep your stack&nbsp;lean.
        </p>
      </Col>
    </Col>
  </Row>
);

export default Benefits;
