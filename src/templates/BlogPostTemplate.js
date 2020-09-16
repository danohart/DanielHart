import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Row, Col } from 'react-bootstrap';
import SEO from '../components/seo';

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <Row className="post">
      <Col>
        <h1 className="post-title">{data.wordpressPost.title}</h1>
        <Row>
          <Col className="post-date">
            Written on <strong>{data.wordpressPost.date}</strong>
          </Col>
        </Row>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
        />
      </Col>
    </Row>
  </Layout>
);

export default BlogPostTemplate;

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      id
      slug
      date(formatString: "MMMM DD, YYYY")
      title
      content
      excerpt
      status
    }
  }
`;
