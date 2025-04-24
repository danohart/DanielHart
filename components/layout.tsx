import React, { useEffect, ReactNode } from 'react';
import ReactGA from 'react-ga4';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from './nav';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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

export default Layout;