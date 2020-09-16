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
      <Row>
        {data.allWordpressPost.edges.map(({ node }) => (
          <Col xs={12} sm={12} md={12} lg={12}>
            <h2>{node.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.content }} />
            {node.slug}
            <Button>
              <Link href={{ pathname: '/article', query: { slug: node.slug } }}>
                Read More
              </Link>
            </Button>
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
        }
      }
    }
  }
`;
