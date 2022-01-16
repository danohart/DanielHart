import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from '../components/nav';
import Footer from '../components/footer';

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
      </Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
