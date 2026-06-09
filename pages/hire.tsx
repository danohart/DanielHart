import React, { useState } from 'react';
import { useRouter } from 'next/router';
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
}

export const getStaticProps: GetStaticProps<HirePageProps> = async () => {
  const projectOptions: ProjectOption[] = [
    { value: '', label: 'Select' },
    { value: 'Frontend Performance Audit', label: 'Frontend Performance Audit' },
    { value: 'Platform Migration', label: 'Platform Migration' },
    { value: 'Analytics & Data Layer', label: 'Analytics & Data Layer' },
    { value: 'Fractional Tech Retainer', label: 'Fractional Tech Retainer' },
    { value: 'Other', label: 'Other' },
  ];

  const budgetOptions: BudgetOption[] = [
    { value: '', label: 'Select' },
    { value: '$5,000–$15,000', label: '$5,000–$15,000' },
    { value: '$15,000–$30,000', label: '$15,000–$30,000' },
    { value: '$30,000–$60,000', label: '$30,000–$60,000' },
    { value: 'Retainer (monthly)', label: 'Retainer (monthly)' },
    { value: "Let's talk", label: "Let's talk" },
  ];

  return {
    props: { projectOptions, budgetOptions },
  };
};

const Hire: React.FC<HirePageProps> = ({ projectOptions, budgetOptions }) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { value: Name, bind: bindName, reset: resetName } = useInput('');
  const { value: Email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: ProjectType, bind: bindProjectType, reset: resetProjectType } = useInput('');
  const { value: Budget, bind: bindBudget, reset: resetBudget } = useInput('');
  const { value: Info, bind: bindInfo, reset: resetInfo } = useInput('');

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();
    setError('');

    if (!Name || !Email || !ProjectType || !Budget) {
      setError('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: Name,
          email: Email,
          projectType: ProjectType,
          budget: Budget,
          message: Info,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      resetName();
      resetEmail();
      resetProjectType();
      resetBudget();
      resetInfo();

      router.push('/thank-you');
    } catch {
      setError('Something went wrong. Please try again or email me directly at daniel@danielhart.co.');
      setSubmitting(false);
    }
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

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  {...bindName}
                  placeholder="Your name"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  {...bindEmail}
                  placeholder="your@email.com"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>What type of project?</Form.Label>
                <Form.Control as="select" name="projectType" {...bindProjectType} required>
                  {projectOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>What&apos;s your budget?</Form.Label>
                <Form.Control as="select" name="budget" {...bindBudget} required>
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
              <Form.Group className="mb-3">
                <Form.Label>Tell me about the problem</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="What's the technical friction costing you the most right now?"
                  {...bindInfo}
                />
              </Form.Group>
            </Col>
          </Row>

          {error && (
            <Row>
              <Col>
                <p style={{ color: '#e72e4d' }}>{error}</p>
              </Col>
            </Row>
          )}

          <Button variant="primary" type="submit" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send'}
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default Hire;
