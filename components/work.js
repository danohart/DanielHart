import React, { useState } from 'react';
import { Row, Col, Badge, ButtonGroup, Button } from 'react-bootstrap';
import { workContent } from '../content/work';
import Image from 'next/image';

export default function Work() {
  const [toggleContent, setToggleContent] = useState(true);

  let content = toggleContent ? workContent.sites : workContent.projects;

  return (
    <>
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
          lg={{ span: 6, offset: 3 }}
        >
          <ButtonGroup size="lg" className="d-flex mt-4 mb-4">
            <Button
              variant="primary"
              onClick={() => setToggleContent(!toggleContent)}
              className={!toggleContent ? 'selected' : null}
            >
              Work
            </Button>
            <Button
              variant="primary"
              onClick={() => setToggleContent(!toggleContent)}
              className={toggleContent ? 'selected' : null}
            >
              Projects
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="card-wrapper">
        {content.map((page) => (
          <Col xs={12} sm={12} md={12} lg={12} key={page.title}>
            <div className="card">
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} className="card-image">
                  <img
                    src={page.image}
                    alt={'Screenshot of ' + page.title + ' website'}
                    width="600px"
                    height="500px"
                  />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                  <h3>{page.title}</h3>
                  <div
                    className="card-description"
                    dangerouslySetInnerHTML={{ __html: page.description }}
                  ></div>
                  {page.url ? (
                    <Row>
                      <Col>
                        <a href={page.url} target="_blank">
                          Visit Site
                        </a>
                      </Col>
                    </Row>
                  ) : null}
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
    </>
  );
}
