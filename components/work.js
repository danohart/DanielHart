import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default function Work({ pages }) {
  function truncate(html) {
    let tmp = document.createElement('DIV');
    tmp.innerHTML = html;

    return tmp.textContent || tmp.innerText || '';
  }

  return (
    <Row className="card-wrapper">
      {pages.map((page) => (
        <Col xs={12} sm={12} md={6} lg={6} key={page.id}>
          <div className="card">
            <h2>{page.title.rendered}</h2>
            <div className="card-image">
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
            </div>
            {truncate(page.content.rendered)}
          </div>
        </Col>
      ))}
    </Row>
  );
}
