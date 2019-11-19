import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>Portfolio</h1>
      <div className="card-wrapper">
        {data.allWordpressPage.edges.map(({ node }) => (
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
        ))}
      </div>
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
