import Layout from '../../components/layout';
import Work from '../../components/work';
import SEO from '../../components/seo';
import { workContent } from '../../content/work';
import { GetStaticProps } from 'next';
import { WorkItem } from '../../components/work';

interface WorkPageProps {
  portfolioItems: WorkItem[];
}

export const getStaticProps: GetStaticProps<WorkPageProps> = async () => {
  return {
    props: {
      portfolioItems: workContent.sites,
    },
    revalidate: 60 * 60 * 24,
  };
};

const WorkPage: React.FC<WorkPageProps> = ({ portfolioItems }) => {
  return (
    <Layout>
      <SEO
        title="Case Studies"
        description="eCommerce and growth-stage brand case studies. Platform migrations, performance overhauls, and subscription architecture — each one tied to a business outcome."
      />
      <h1>Case Studies</h1>
      <p className="lead mb-4">
        Every engagement starts with a business problem, not a technology
        choice. Here&apos;s how I&apos;ve moved the metrics that matter for eCommerce,
        subscription, and enterprise brands.
      </p>
      <Work pages={portfolioItems} />
    </Layout>
  );
};

export default WorkPage;