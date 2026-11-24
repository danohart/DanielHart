import Link from 'next/link';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { getYearsOfExperience } from '../utils/yearsOfExperience';

const Header = () => {
  const years = getYearsOfExperience();
  return (
    <Row className="main-header-section">
      <Col xs={12}>
        <header className="main-header">
          <h1>
            <Link href="/">
              Daniel Hart
              <br />
              <div className="header-role">
                Front-end developer for websites
                <br />
                and eCommerce brands. {years}+&nbsp;years.
              </div>
            </Link>
          </h1>
          <Row>
            <Col
              xs={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
            >
              <h2>
                Your store is making money. Slow mobile pages and broken
                tracking are costing you some of&nbsp;it.
              </h2>
              <div className="subtext">
                I find where mobile shoppers drop off and where your data stops
                matching reality, then fix it. On eCommerce sites I&apos;ve worked
                on, that meant 50% faster mobile loads and 40%
                more&nbsp;checkouts.
                <Row>
                  <Col>
                    <Button size="lg" variant="primary">
                      <Link href="/audit">Get a Store Audit</Link>
                    </Button>
                    <Button size="lg" variant="secondary inverse">
                      <Link href="/work">View Case Studies</Link>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </header>
      </Col>
    </Row>
  );
};

export default Header;
