import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import { Row, Col, Button } from 'react-bootstrap';
import SEO from '../components/seo';
import YearsOfExperience from '../components/YearsOfExperience';

function About() {
  const currentYear = new Date().getFullYear();
  const yearsWorked = currentYear - 2010;

  return (
    <Layout>
      <SEO title="About" />
      <Row>
        <Col xs={12} sm={12} md={8} lg={8}>
          <h1>About Daniel</h1>
          <h2>Frontend Web Developer</h2>
          <YearsOfExperience />
          <p>
            With <strong>{yearsWorked}+ years experience</strong> in web
            development and design, working on a variety of projects ranging
            from start to finish website for small businesses like restaurants,
            retail stores, and coffee shops to working with in-house teams for
            large companies like HEB Grocery, Grainger, and Yum! Brands...I have
            collected knowledge and data on what it takes for your website to
            succeed in your business.
          </p>
          <h3>With a focus on eCommerce and online stores...</h3>
          <p>
            ...using data driven design to make sure your customers have a
            pleasant experience with spending their money with your company.
          </p>
          <Col xs={{ span: 6, offset: 3 }} className="text-center">
            <Button>
              <Link href="/work">See Work</Link>
            </Button>
          </Col>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Image
            src="/about.jpg"
            alt="Daniel Hart, web developer"
            title="Daniel Hart, web developer"
            width="1200"
            height="900"
          />
        </Col>
      </Row>
    </Layout>
  );
}

export default About;
