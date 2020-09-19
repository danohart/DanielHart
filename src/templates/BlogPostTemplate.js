import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Row, Col, Button } from 'react-bootstrap';
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
    <Row className="post-cta">
      <Col xs={12} sm={12} md={4} lg={2}>
        <img
          src="/images/daniel-hart-web-developer.jpg"
          alt="Daniel Hart - web developer"
          title="Daniel Hart - web designer"
        />
      </Col>
      <Col>
        <h3 className="post-cta-title">Looking for a web developer?</h3>
        <Row>
          <Col>
            <p>
              Let me bring years of experience in web development and design to
              your team, let's chat about your current, or next, project.
            </p>
            <Button>
              <Link to="/hire">Contact Me</Link>
            </Button>
          </Col>
        </Row>
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
