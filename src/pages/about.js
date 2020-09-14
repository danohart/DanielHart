import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import { Row, Col, Button } from 'react-bootstrap';
import SEO from '../components/seo';

const currentYear = new Date().getFullYear();
const yearsWorked = currentYear - 2009;

const About = () => (
  <Layout>
    <SEO title="About" />
    <Row>
      <Col xs={12} sm={12} md={8} lg={8}>
        <h1>About Daniel</h1>
        <h2>Frontend Web Developer</h2>
        <p>
          With <strong>{yearsWorked}+ years experience</strong> in web
          development and design, working on a variety of projects ranging from
          start to finish website for small businesses like restaurants, retail
          stores, and coffee shops to working with in-house teams for large
          companies like HEB Grocery, Grainger, and Yum! Brands...I have
          collected knowledge and data on what it takes for your website to
          succeed in your business.
        </p>

        <p>
          <h3>With a focus on eCommerce and online stores...</h3> ...using data
          driven design to make sure your customers have a pleasant experience
          with spending their money with your company.
        </p>
        <Col xs={{ span: 6, offset: 3 }} className="text-center">
          <Button>
            <Link to="/work">See Work</Link>
          </Button>
        </Col>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4}>
        <img
          src="/about.jpg"
          alt="Daniel Hart, web developer"
          title="Daniel Hart, web developer"
        />
      </Col>
    </Row>
  </Layout>
);

export default About;
