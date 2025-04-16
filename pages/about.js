import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import { Row, Col, Button, Card } from 'react-bootstrap';
import SEO from '../components/seo';
import YearsOfExperience from '../components/yearsOfExperience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faMobileAlt,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

function About() {
  const currentYear = new Date().getFullYear();
  const yearsWorked = currentYear - 2010;

  const expertiseAreas = [
    {
      title: 'Frontend Performance',
      description:
        'Building blazing-fast websites that load quickly and respond instantly to user interactions.',
      icon: faTachometerAlt,
    },
    {
      title: 'Responsive Design',
      description:
        "Creating seamless experiences across all devices, focusing on mobile-first approaches that meet today's browsing habits.",
      icon: faMobileAlt,
    },
    {
      title: 'Data-Driven UX',
      description:
        'Using analytics and user research to inform design decisions that maximize conversion and engagement.',
      icon: faChartLine,
    },
  ];

  return (
    <Layout>
      <SEO title="About Daniel Hart - Frontend Web Developer" />
      <Row className="mb-5 align-items-center">
        <Col xs={12} md={8}>
          <h1>Hello, I'm Daniel Hart</h1>
          <h2>Frontend Developer with {yearsWorked}+ Years of Experience</h2>

          <p className="lead mb-4">
            I help businesses transform their digital presence through custom
            web experiences that convert visitors into customers.
          </p>

          <Button size="lg" className="mb-4">
            <Link href="/work">View My Portfolio</Link>
          </Button>
        </Col>

        <Col xs={12} md={4}>
          <div className="profile-image-container">
            <Image
              src="/about.jpg"
              alt="Daniel Hart, web developer"
              title="Daniel Hart, web developer"
              width="1200"
              height="900"
              className="img-fluid rounded"
            />
          </div>
        </Col>
      </Row>

      <h3 className="mb-3 text-center">Years of Experience in Numbers</h3>
      <YearsOfExperience />

      <Row className="mb-5">
        <Col>
          <h3 className="mb-4">Professional Background</h3>
          <p>
            With <strong>{yearsWorked}+ years of experience</strong> in web
            development and design, I've worked with brands ranging from small
            local businesses to Fortune 500 companies including HEB Grocery,
            Grainger, and Yum! Brands.
          </p>
          <p>
            My approach combines technical expertise with a deep understanding
            of user psychology and business objectives. Every project begins
            with understanding your goals and ends with measurable results.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={12}>
          <h3>Areas of Expertise</h3>
        </Col>
        {expertiseAreas.map((area, index) => (
          <Col xs={12} md={6} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrapper me-3">
                    <FontAwesomeIcon icon={area.icon} size="2x" />
                  </div>
                  <Card.Title className="mb-0">{area.title}</Card.Title>
                </div>
                <Card.Text>{area.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-5 text-center">
        <Col>
          <h3>Ready to discuss your project?</h3>
          <p className="lead">
            Let's talk about how my experience can help grow your business
          </p>
          <Button size="lg">
            <Link href="/hire">Let's Work Together</Link>
          </Button>
        </Col>
      </Row>
    </Layout>
  );
}

export default About;
