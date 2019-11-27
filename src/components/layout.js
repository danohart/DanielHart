/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './header';
import '../css/bootstrap.min.css';
import '../css/layout.scss';
import '../css/card.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="morph3" />
      <div className="morph" />
      <div className="morph2" />
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Row>
          <Col>{children}</Col>
        </Row>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
