import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('G-B3KBWT41PX');
      ReactGA.send({
        hitType: 'pageview',
        page: window.location.pathname + window.location.search,
      });
    }
  }, []);

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
