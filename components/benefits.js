import React from 'react';
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
          <img src="../../mobile.jpg" alt="Mobile Design Development Online" />
        </Col>
      </Row>
      {benefitsIcon(faBarcode)}
      <Col className="benefits-description">
        <h3>Mobile Friendly</h3>
        <p>
          In 2019, Black Friday through Cyber Monday, 49% of online orders came
          from a mobile phone. The best mobile experience for your customer is
          vital for growth and is always kept in mind with any of
          our&nbsp;clients.
        </p>
      </Col>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} className="benefits-card">
      <Row>
        <Col>
          <img src="../../data.jpg" alt="Data Driven Web Design" />
        </Col>
      </Row>
      {benefitsIcon(faCodeBranch)}
      <Col className="benefits-description">
        <h3>Data Driven</h3>
        <p>
          Through years of experience and testing, making design decisions based
          on what your customer expects from your website, increasing sales and
          brand loyalty that keeps people coming back to&nbsp;you.
        </p>
      </Col>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} className="benefits-card">
      <Row>
        <Col>
          <img src="../../speed.jpg" alt="Fast Website Web Development" />
        </Col>
      </Row>
      {benefitsIcon(faCode)}
      <Col className="benefits-description">
        <h3>Optimal Speed</h3>
        <p>
          Your website has roughly 4 seconds before a customer decides to go
          elsewhere if what they see isn't interesting to them. Creating snappy,
          quick to use websites is important to keeping your customer on
          your&nbsp;site.
        </p>
      </Col>
    </Col>
  </Row>
);

export default Benefits;
