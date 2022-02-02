import React from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from '../components/nav';
import Footer from '../components/footer';

if (process.env.NODE_ENV === 'production') {
  if (typeof window !== 'undefined') {
    ReactGA.initialize('UA-6570398-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

const Layout = ({ children }) => {
  return (
    <>
      <div className="morph3" />
      <div className="morph" />
      <div className="morph2" />
      <Container>
        <Nav />
        <Row>
          <Col>{children}</Col>
        </Row>

        <Footer />
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
