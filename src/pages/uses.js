import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';

// Content
import { usesContent } from '../content/usesContent';

export default function Uses() {
  return (
    <Layout>
      <SEO
        title="Uses"
        description="List of software and hardware for web development and travel"
      />
      <Row>
        <Col>
          <h1>What I Use</h1>
          <h2>as a frontend web developer &amp; designer</h2>
          {usesContent.category.map(content => (
            <Row key={content.title}>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h3>{content.title}</h3>
              </Col>
              <Col>
                {content.items.map(item => (
                  <ul key={item.name}>
                    <li>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>{' '}
                      - {item.description}
                      {item.subItem ? (
                        <ul>
                          <li>
                            {item.subItem.name} -
                            <a
                              href={item.subItem.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              &nbsp;{item.subItem.description}
                            </a>
                          </li>
                        </ul>
                      ) : null}
                    </li>
                  </ul>
                ))}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Layout>
  );
}
