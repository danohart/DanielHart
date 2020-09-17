import React from 'react';
import Layout from '../components/layout';
import { Row, Col, Button } from 'react-bootstrap';
import Seo from '../components/seo';
import { Link } from 'gatsby';

export default function BlogHome({ data }) {
  console.log(data.allWordpressPost.edges[2].node.excerpt.length);

  function shortenExcerpt(text) {
    if (text.length > 330) return text.slice(0, -16) + '...';
    return text;
  }
  return (
    <Layout>
      <Seo title={'Blog'} />
      <Row className="blog-header">
        <Col>
          <h1 className="blog-header-title">Blog</h1>
          <h2 className="blog-header-subtitle">
            On topics of Web Design, Travel, And Public Transit
          </h2>
        </Col>
      </Row>

      <Row className="card-wrapper">
        {data.allWordpressPost.edges.map(({ node }) => (
          <Col xs={12} sm={12} md={12} lg={12} className="card">
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.title}</Link>
            </h2>
            <div
              className="card-excerpt"
              dangerouslySetInnerHTML={{
                __html: shortenExcerpt(node.excerpt),
              }}
            />
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
