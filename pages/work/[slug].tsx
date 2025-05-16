import { GetStaticProps, GetStaticPaths } from 'next';
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
  client: string;
  date: string;
  technologies: string[];
}

export default function CaseStudy({ 
  contentHtml, 
  title, 
  description, 
  client, 
  date, 
  technologies 
}: CaseStudyProps) {
  return (
    <Layout>
      <SEO title={title} description={description} />
      <article className="case-study">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies');
  const filenames = fs.readdirSync(caseStudiesDirectory);
  
  const paths = filenames.map(filename => {
    return {
      params: {
        slug: filename.replace(/\.md$/, ''),
      },
    };
  });
  
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const filePath = path.join(process.cwd(), 'content/case-studies', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
      ...data,
    },
  };
};