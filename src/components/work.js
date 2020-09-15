import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-bootstrap';

export default function Work({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressPage {
            edges {
              node {
                id
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
      `}
      render={data => (
        <Row className="card-wrapper">
          {data.allWordpressPage.edges.map(({ node }) => (
            <Col xs={12} sm={12} md={6} lg={6} key={node.id}>
              <div className="card">
                <h2>{node.title}</h2>
                {!node.featured_media ? (
                  <Img
                    fluid={`https://via.placeholder.com/728x120.png?text=Photo`}
                  />
                ) : (
                  <Img
                    fluid={node.featured_media.localFile.childImageSharp.fluid}
                  />
                )}
              </div>
            </Col>
          ))}
        </Row>
      )}
    />
  );
}
