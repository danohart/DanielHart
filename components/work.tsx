import React from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import Image from 'next/image';

export interface WorkItem {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}

interface WorkProps {
  pages: WorkItem[];
}

const Work: React.FC<WorkProps> = ({ pages }) => {
  return (
    <Row className="card-wrapper">
      {pages.map((page) => (
        <Col xs={12} sm={12} md={12} lg={12} key={page.title}>
          <div className="card">
            <h2>{page.title}</h2>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} className="card-image">
                <Image
                  width={600}
                  height={400}
                  style={{
                    maxHeight: 'calc(50vh - 6.5rem)',
                  }}
                  src={page.image}
                  alt={page.title}
                />
                {page.url && (
                  <Row className="card-button">
                    <Col className=' d-flex justify-content-center'>
                      <Button className="btn btn-primary">
                        <a href={page.url} target="_blank" rel="noopener noreferrer">View Project</a>
                      </Button>
                    </Col>
                  </Row>
                )}
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div
                  className="card-description"
                  dangerouslySetInnerHTML={{ __html: page.description }}
                ></div>
                <Row>
                  <Col>
                    <h4>This Project Features:</h4>
                    {page.tags.map((tag, index) => (
                      <Badge bg="primary" key={`${page.title}-${tag}-${index}`}>
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
};

export default Work;