import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import { Row, Col, Button } from 'react-bootstrap';
import SEO from '../../components/seo';
import { getPost, getSlugs } from '../../utils/wordpress';
import { getDate } from '../../utils/date';
import getOgImage from '../../utils/getOgImage';
import { renderApostrophe } from '../../utils/stringFormat';

const BlogPostTemplate = ({ post, ogImage }) => (
  <Layout>
    <SEO
      title={renderApostrophe(post.title.rendered)}
      description={post.excerpt.rendered}
      image={ogImage}
    />
    <Row className="post">
      <Col>
        <h1
          className="post-title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <Row>
          <Col className="post-date">
            Written on <strong>{getDate(post.modified)}</strong>
          </Col>
        </Row>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
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
              <Link href="/hire">Contact Me</Link>
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Layout>
);

export default BlogPostTemplate;

export async function getStaticPaths() {
  const paths = await getSlugs('posts');

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  const ogImage = await getOgImage(
    `/ogimage?title=${renderApostrophe(
      post.title.rendered
    )}&excerpt=${renderApostrophe(post.excerpt.rendered)}`
  );

  return {
    props: {
      post,
      ogImage,
    },
    revalidate: 10, // In seconds
  };
}
