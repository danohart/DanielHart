import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
const fileNames = fs.readdirSync(postsDirectory);

export function getPost(postSlug) {
  const postName = fileNames.filter(
    (file) => file.replace(/\.html$/, '') === postSlug
  );

  const fullPath = path.join(postsDirectory, postName[0]);

  const fileContent = fs.readFileSync(fullPath, 'utf8');

  let postResult = matter(fileContent);
  const content = postResult.content;

  console.log('postResult', postResult);
  return { content, ...postResult.data };
}

export function getSortedPostsData(postsOrSlugs) {
  const allPostsData = fileNames.map((fileName) => {
    // Remove file extension from file name to get id
    const id = fileName.replace(/\.html$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    let matterResult = matter(fileContents);

    const content = matterResult.content;
    const slug = matterResult.data.slug;

    // Combine the data with the id
    return {
      id,
      content,
      slug,
      ...matterResult.data,
    };
  });

  let slugs = [];

  allPostsData.map((post) => slugs.push({ params: { slug: post.slug } }));

  if (postsOrSlugs === 'posts')
    return allPostsData.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  if (postsOrSlugs === 'slugs') return slugs;

  return null;
}
