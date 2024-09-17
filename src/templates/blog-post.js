// src/templates/blog-post.js
import React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const post = data.sanityPost;

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.mainImage.asset.url} alt={post.title} />
      <p>{new Date(post.publishedAt).toDateString()}</p>

      {/* Iterate over the body content */}
      <div>
        {post.body.map((block, index) => {
          if (block._type === 'block' && block.children) {
            return (
              <p key={index}>
                {block.children.map((child) => child.text).join('')}
              </p>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      publishedAt
      mainImage {
        asset {
          url
        }
      }
      body {
        _type
        children {
          _key
          text
        }
      }
    }
  }
`;

export default BlogPost;
