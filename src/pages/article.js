import React from 'react';
import Layout from '../components/layout';
import { Row, Col } from 'react-bootstrap';
import Seo from '../components/seo';

export default function BlogPost({ data }) {
  const post = data.wordpressPost;
  console.log('post', post);
  return (
    <Layout>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Col>
      </Row>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String) {
    wordpressPost(slug: { eq: $slug }) {
      slug
      title
      content
      excerpt
      status
    }
  }
`;
