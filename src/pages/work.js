import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Row, Col } from 'react-bootstrap';

// export const pageQuery = graphql`
//   query {
//     allWordpressPage {
//       edges {
//         node {
//           id
//           title
//           featured_media {
//             localFile {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid_withWebp
//                 }
//               }
//             }
//           }
//           excerpt
//           status
//         }
//       }
//     }
//   }
// `;

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Work" />
      <Row className="card-wrapper">
        {/* {data.allWordpressPage.edges.map(({ node }) => (
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
        ))} */}
      </Row>
    </Layout>
  );
};
