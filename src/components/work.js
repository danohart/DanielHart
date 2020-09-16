import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-bootstrap';

export default function Work() {
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
                <div className="card-image">
                  {!node.featured_media ? (
                    <Img
                      fluid={`https://via.placeholder.com/728x120.png?text=Photo`}
                    />
                  ) : (
                    <Img
                      style={{
                        maxHeight: 'calc(50vh - 6.5rem)',
                      }}
                      imgStyle={{ objectPosition: 'top' }}
                      fluid={
                        node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    />
  );
}
