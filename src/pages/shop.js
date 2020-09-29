import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Row, Col } from 'react-bootstrap';

import Checkout from '../components/checkout';

export default function Shop() {
  return (
    <Layout>
      <SEO title={'Shop'} />
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>Shop</h1>
        </Col>
        <Col>
          <Checkout item={'price_1HW5uw2RyYBIOmAGPkLorkvd'} />
        </Col>
      </Row>
    </Layout>
  );
}
