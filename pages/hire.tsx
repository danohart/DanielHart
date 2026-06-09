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
    { value: "performance-audit", label: "Frontend Performance Audit" },
    { value: "platform-migration", label: "Platform Migration" },
    { value: "analytics-data-layer", label: "Analytics & Data Layer" },
    { value: "fractional-retainer", label: "Fractional Tech Retainer" },
    { value: "other", label: "Other" },
  ];

  const budgetOptions: BudgetOption[] = [
    { value: "", label: "Select" },
    { value: "5000-15000", label: "$5,000–$15,000" },
    { value: "15000-30000", label: "$15,000–$30,000" },
    { value: "30000-60000", label: "$30,000–$60,000" },
    { value: "retainer", label: "Retainer (monthly)" },
    { value: "lets-talk", label: "Let's talk" },
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
      <SEO
        title="Work With Daniel Hart"
        description="Start a conversation about frontend performance, analytics integrity, or fractional tech leadership. Let's scope your engagement."
      />
      <div>
        <h1>Let&apos;s Work Together</h1>
        <p>
          Tell me about the technical friction costing your team the most right
          now. I&apos;ll respond within one business day with an honest take on
          whether I&apos;m the right fit — and what a scoped engagement would look
          like.
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