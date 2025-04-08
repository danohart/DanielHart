import React from 'react';
import Layout from '../../components/layout';
import { Row, Col, Button } from 'react-bootstrap';
import SEO from '../../components/seo';
import Link from 'next/link';

export default function BlogHome() {
  const posts = [
    {
      id: 1,
      title: 'Sample Blog Post',
      slug: 'sample-blog-post',
      content: '<p>This is a sample blog post content.</p>',
    },
  ];
  function shortenExcerpt(text) {
    if (text.length > 330) return text.slice(0, -16) + '...';
    return text;
  }

  return (
    <Layout>
      <SEO title={'Blog'} />
      <Row className="blog-header">
        <Col>
          <h1 className="blog-header-title">Blog</h1>
          <h2 className="blog-header-subtitle">
            On topics of Web Design, Travel, And Public Transit
          </h2>
        </Col>
      </Row>

      <Row className="card-wrapper">
        {posts.map((post) => (
          <Col xs={12} sm={12} md={12} lg={12} className="card" key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            {/* <div
              className="card-excerpt"
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            /> */}
            <Row className="read-more">
              <Col>
                <Button>
                  <Link href={`/blog/${post.slug}`}>Go to post &raquo;</Link>
                </Button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

// export async function getStaticProps({ params }) {
//   const posts = await getSortedPostsData('posts');

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 10, // In seconds
//   };
// }
