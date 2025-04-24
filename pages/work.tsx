import React from 'react';
import Layout from '../components/layout';
import Work from '../components/work';
import SEO from '../components/seo';
import { workContent } from '../content/work';
import { GetStaticProps } from 'next';
import { WorkItem } from '../components/work';

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
      <SEO title="Work" />
      <h1>Portfolio</h1>
      <p className="lead mb-4">
        Here are some of the projects I've worked on. Each demonstrates my approach 
        to creating effective web experiences that deliver results.
      </p>
      <Work pages={portfolioItems} />
    </Layout>
  );
};

export default WorkPage;