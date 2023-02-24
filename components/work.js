import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import Image from 'next/image';

export default function Work({ pages }) {
  return (
    <Row className="card-wrapper">
      {pages.map((page) => (
        <Col xs={12} sm={12} md={12} lg={12} key={page.title}>
          <div className="card">
            <h2>{page.title}</h2>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} className="card-image">
                <Image
                  width="600"
                  height="400"
                  style={{
                    maxHeight: 'calc(50vh - 6.5rem)',
                  }}
                  src={page.image}
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div
                  className="card-description"
                  dangerouslySetInnerHTML={{ __html: page.description }}
                ></div>
                <Row>
                  <Col>
                    <h4>This Project Features:</h4>
                    {page.tags.map((tag) => (
                      <Badge bg="primary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  );
}
