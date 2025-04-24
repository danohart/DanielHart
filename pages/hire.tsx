import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useInput } from '../components/formInput';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { GetStaticProps } from 'next';

interface ProjectOption {
  value: string;
  label: string;
}

interface BudgetOption {
  value: string;
  label: string;
}

interface HirePageProps {
  projectOptions: ProjectOption[];
  budgetOptions: BudgetOption[];
  formEndpoint: string;
}

export const getStaticProps: GetStaticProps<HirePageProps> = async () => {
  const projectOptions: ProjectOption[] = [
    { value: "", label: "Select" },
    { value: "simple-website", label: "Simple, Elegant Website" },
    { value: "ecommerce", label: "eCommerce Store" },
    { value: "big-plans", label: "I have big, BIG, plans, we should talk." },
    { value: "other", label: "Other" },
  ];

  const budgetOptions: BudgetOption[] = [
    { value: "", label: "Select" },
    { value: "1000-4000", label: "$1,000-$4,000" },
    { value: "4000-7000", label: "$4,000-$7,000" },
    { value: "7000-10000", label: "$7,000-$10,000" },
    { value: "10000+", label: "$10,000+" },
  ];

  return {
    props: {
      projectOptions,
      budgetOptions,
      formEndpoint: "https://getform.io/f/f4b2bda9-a727-46ac-9498-1134a5a50b00",
    },
    revalidate: 60 * 60 * 24 * 7,
  };
};

const Hire: React.FC<HirePageProps> = ({ 
  projectOptions, 
  budgetOptions, 
  formEndpoint 
}) => {
  const { value: Name, bind: bindName, reset: resetName } = useInput('');
  const { value: Email, bind: bindEmail, reset: resetEmail } = useInput('');
  const {
    value: ProjectType,
    bind: bindProjectType,
    reset: resetProjectType,
  } = useInput('');
  const { value: Budget, bind: bindBudget, reset: resetBudget } = useInput('');
  const { value: Info, bind: bindInfo, reset: resetInfo } = useInput('');

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    
    const form = evt.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
      alert(
        'Some information is missing. Please check that all fields are filled out.'
      );
      return;
    }
    
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
            action={formEndpoint}
            method="POST"
            onSubmit={handleSubmit}
          >
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    {...bindName}
                    placeholder="Enter Name"
                    required
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
                    required
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
                    {...bindProjectType}
                    required
                  >
                    {projectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Form.Group>
                  <Form.Label as="legend">What's your budget?</Form.Label>
                  <Form.Control
                    as="select"
                    name="budget"
                    {...bindBudget}
                    required
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Additional Info</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
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
};

export default Hire;