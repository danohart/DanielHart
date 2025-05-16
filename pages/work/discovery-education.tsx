// File: /pages/work/discovery-education.tsx
import { GetStaticProps } from 'next';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface CaseStudyProps {
  contentHtml: string;
  title: string;
  description: string;
}

export default function CaseStudies({ contentHtml, title, description }: CaseStudyProps) {
  return (
    <Layout>
      <SEO title={title} description={description} />
      <article className="case-study">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'content/case-studies', 'discovery-education.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Use gray-matter to parse the metadata section
  const { data, content } = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
      title: data.title || 'Discovery Education Case Study',
      description: data.description || 'How we transformed Discovery Education\'s learning platform',
    },
  };
};