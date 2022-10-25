import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Work({ pages }) {
  return (
    <Row className="card-wrapper">
      {pages.map((page) => (
        <Col xs={12} sm={12} md={12} lg={12} key={page.title}>
          <div className="card">
            <h2>{page.title}</h2>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} className="card-image">
                <img
                  style={{
                    maxHeight: 'calc(50vh - 6.5rem)',
                  }}
                  src={page.image}
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div
                  dangerouslySetInnerHTML={{ __html: page.description }}
                ></div>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  );
}
