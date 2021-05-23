import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useInput } from '../components/formInput';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function Hire() {
  const { value: Name, bind: bindName, reset: resetName } = useInput('');
  const { value: Email, bind: bindEmail, reset: resetEmail } = useInput('');
  const {
    value: ProjectType,
    bind: bindProjectType,
    reset: resetProjectType,
  } = useInput('');
  const { value: Budget, bind: bindBudget, reset: resetBudget } = useInput('');
  const { value: Info, bind: bindInfo, reset: resetInfo } = useInput('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('vent', evt.target.value);
    if (!evt.target.value)
      return alert(
        'Some information is missing. Please check that all fields are filled out.'
      );
    alert(
      `Thank you for reaching out to me. An email was sent and I will respond to it within a couple days.`
    );

    resetName();
    resetEmail();
    resetProjectType();
    resetBudget();
    resetInfo();
  };

  return (
    <Layout>
      <SEO title="Hire Me" />
      <div>
        <h1>Hire Me</h1>
        <p>
          If you have a project that needs to be taken to the next level, to
          reach more customers, to make more money, fill out the form below to
          contact me and I will get back to you as soon as I can.
        </p>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 3 }}
            lg={{ span: 6, offset: 3 }}
          >
            <hr />
          </Col>
        </Row>
        <div>
          <Form
            action="https://getform.io/f/f4b2bda9-a727-46ac-9498-1134a5a50b00"
            method="POST"
          >
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    id="name"
                    {...bindName}
                    placeholder="Enter Name"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    {...bindEmail}
                    placeholder="Enter Email Address"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label as="legend">What type of project?</Form.Label>
                  <Form.Control
                    as="select"
                    name="projectType"
                    value="Select..."
                    {...bindProjectType}
                  >
                    <option>Select</option>
                    <option>Simple, Elegant Website</option>
                    <option>eCommerce Store</option>
                    <option>I have big, BIG, plans, we should talk.</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label as="legend">What's your budget?</Form.Label>
                  <Form.Control
                    as="select"
                    value="Select"
                    name="budget"
                    {...bindBudget}
                  >
                    <option>Select</option>
                    <option>$1,000-$4,000</option>
                    <option>$4,000-$7,000</option>
                    <option>$7,000-$10,000</option>
                    <option>$10,000+</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Additional Info</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Just a little info to get us started..."
                    {...bindInfo}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
