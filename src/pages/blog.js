import React from 'react';
import Layout from '../components/layout';
import { Row, Col, Button } from 'react-bootstrap';
import Seo from '../components/seo';
import { Link } from 'gatsby';

export default function BlogHome({ data }) {
  return (
    <Layout>
      <Seo title={'Blog'} />
      <h1>Blog</h1>
      <h2>
        On topics of{' '}
        {data.allWordpressPost.edges.map(({ node }) => (
          <div>{node.tags}</div>
        ))}
      </h2>
      <Row className="card-wrapper">
        {data.allWordpressPost.edges.map(({ node }) => (
          <Col xs={12} sm={12} md={12} lg={12} className="card">
            <h2>{node.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <Row>
              <Col
                xs={{ span: 10, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 2, offset: 0 }}
                lg={{ span: 2, offset: 0 }}
              >
                <Button>
                  <Link to={`/blog/${node.slug}`}>Read More</Link>
                </Button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          status
          tags
        }
      }
    }
  }
`;
