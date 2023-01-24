import { getSortedPostsData } from '../utils/posts';
import { Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Row>
        {allPostsData.map(({ content, id }) => (
          <Col md={12} lg={12} key={id}>
            <Row>
              <Col>
                <div
                  className="card-description"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
