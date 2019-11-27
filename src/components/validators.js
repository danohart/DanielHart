import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Validators extends Component {
  render() {
    return (
      <Row className="validators">
        <Col xs={4} sm={4} md={4} lg={2}>
          <img
            src="static/proof/central-market.png"
            alt="Central Market Logo"
          />
        </Col>
        <Col xs={4} sm={4} md={4} lg={2}>
          <img src="static/proof/grainger.png" alt="Grainger Logo" />
        </Col>
        <Col xs={4} sm={4} md={4} lg={2}>
          <img src="static/proof/yum-brands.png" alt="Yum Brands Logo" />
        </Col>
        <Col xs={4} sm={4} md={4} lg={2}>
          <img src="static/proof/natural-music.png" alt="Natural Music Logo" />
        </Col>
        <Col xs={4} sm={4} md={4} lg={2}>
          <img src="static/proof/rambler.png" alt="Rambler Logo" />
        </Col>
        <Col xs={4} sm={4} md={4} lg={2}>
          <img src="static/proof/bump-boxes.png" alt="Bump Boxes Logo" />
        </Col>
      </Row>
    );
  }
}

export default Validators;
