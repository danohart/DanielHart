import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';

class Validators extends Component {
  render() {
    return (
      <Row className="validators">
        <Col>
          <Row>
            <h2>Brands I've Worked With</h2>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={4} lg={4}>
              <Image
                width="600"
                height="400"
                src="/images/proof/central-market.png"
                alt="Central Market Logo"
                sizes="(max-width: 767px) 50vw, 33vw"
              />
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
              <Image
                width="600"
                height="400"
                src="/images/proof/grainger.png"
                alt="Grainger Logo"
                sizes="(max-width: 767px) 50vw, 33vw"
              />
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
              <Image
                width="600"
                height="400"
                src="/images/proof/yum-brands.png"
                alt="Yum Brands Logo"
                sizes="(max-width: 767px) 50vw, 33vw"
              />
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
              <Image
                width="600"
                height="400"
                src="/images/proof/natural-music.png"
                alt="Natural Music Logo"
                sizes="(max-width: 767px) 50vw, 33vw"
              />
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
              <Image
                width="600"
                height="400"
                src="/images/proof/discovery-education.png"
                alt="Discovery Education Logo"
                sizes="(max-width: 767px) 50vw, 33vw"
              />
            </Col>
            <Col xs={6} sm={6} md={4} lg={4}>
              <Image
                width="600"
                height="400"
                src="/images/proof/bump-boxes.png"
                alt="Bump Boxes Logo"
                sizes="(max-width: 767px) 50vw, 33vw"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Validators;
