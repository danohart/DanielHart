import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBarcode,
  faCodeBranch,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

const Benefits = () => (
  <Row className="benefits">
    <Col xs={12} sm={12} md={4} lg={4} className="benefits-card">
      <Row>
        <Col>
          <img src="https://source.unsplash.com/600x600/?mobile" alt="Skills" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="benefits-icon">
            <div className="icon-background">
              <FontAwesomeIcon icon={faBarcode} size="2x" />
            </div>
          </div>
        </Col>
      </Row>
      <Col className="benefits-description">
        <h3>Mobile Friendly</h3>
        In 2019, Black Friday through Cyber Monday, 49% of online orders came
        from a mobile phone. The best mobile experience for your customer is not
        only important, but vital for growth and is always kept in mind with any
        of our&nbsp;clients.
      </Col>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} className="benefits-card">
      <Row>
        <Col>
          <img src="https://source.unsplash.com/600x600/?speed" alt="Skills" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="benefits-icon">
            <div className="icon-background">
              <FontAwesomeIcon icon={faCodeBranch} size="2x" />
            </div>
          </div>
        </Col>
      </Row>
      <Col className="benefits-description">
        <h3>Data Driven</h3>
        Through years of experience and testing, making design decisions based
        on what your customer expects from your website, increasing sales and
        brand loyalty that keeps people coming back to&nbsp;you.
      </Col>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} className="benefits-card">
      <Row>
        <Col>
          <img
            src="https://source.unsplash.com/600x600/?macbook"
            alt="Skills"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="benefits-icon">
            <div className="icon-background">
              <FontAwesomeIcon icon={faCode} size="2x" />
            </div>
          </div>
        </Col>
      </Row>
      <Col className="benefits-description">
        <h3>Optimal Speed</h3>
        Your website has roughly 4 seconds before a customer decides to go
        elsewhere if what they see isn't interesting to them. Creating snappy,
        quick to use websites is important to keeping your customer on
        your&nbsp;site.
      </Col>
    </Col>
  </Row>
);

export default Benefits;
