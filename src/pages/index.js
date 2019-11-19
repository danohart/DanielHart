import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Row, Col } from 'react-bootstrap';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>Portfolio</h1>
      <Row className="card-wrapper">
        {data.allWordpressPage.edges.map(({ node }) => (
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="card">
              <h2>{node.title}</h2>
              {!node.featured_media ? (
                <Img fluid="https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide" />
              ) : (
                <Img
                  fluid={node.featured_media.localFile.childImageSharp.fluid}
                />
              )}
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          title
          featured_media {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
          status
        }
      }
    }
  }
`;
