// src/pages/blog.js
import React from 'react';
import { graphql } from 'gatsby';
import BlogCard from '../components/blogcard';

const BlogPage = ({ data }) => {
  const posts = data.allSanityPost.nodes;

  return (
    <div style={styles.container}>
      {posts.map(post => (
        <BlogCard
          key={post.slug.current}
          title={post.title}
          date={new Date(post.publishedAt).toDateString()}
          imageUrl={post.mainImage.asset.url}
          slug={post.slug.current} // Pass the slug here
        />
      ))}
    </div>
  );
};

const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    },
  };
  

export const query = graphql`
  {
    allSanityPost {
      nodes {
        title
        slug {
          current
        }
        publishedAt
        mainImage {
          asset {
            url
          }
        }
      }
    }
  }
`;

export default BlogPage;
