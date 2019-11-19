import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <Container>
    <Row>
      <Col>
        <header className="main-header">
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </header>
      </Col>
    </Row>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
