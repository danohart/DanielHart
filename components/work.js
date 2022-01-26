import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Work({ pages }) {
  return (
    <Row className="card-wrapper">
      {pages.map((page) => (
        <Col xs={12} sm={12} md={12} lg={12} key={page.id}>
          <div className="card">
            <h2>{page.title.rendered}</h2>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} className="card-image">
                {!page.featured_media ? (
                  <img
                    src={`https://via.placeholder.com/728x120.png?text=Photo`}
                  />
                ) : (
                  <img
                    style={{
                      maxHeight: 'calc(50vh - 6.5rem)',
                    }}
                    src={page._embedded['wp:featuredmedia'][0].link}
                  />
                )}
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                ></div>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  );
}
