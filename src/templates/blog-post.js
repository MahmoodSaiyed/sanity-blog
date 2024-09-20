// src/templates/blog-post.js
import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
//kdfdslkfjlksdjfklsdjflsdjflksdhfjksdhf
// Optional: Define custom serializers
const serializers = {
  types: {
    image: ({ node }) => {
      // Check if the image has a valid URL
      if (!node.asset || !node.asset.url) return null;

      
      return (
        <StyledImage 
          src={node.asset.url} 
          alt={node.alt || 'Image'} 
        />
      );
    },
  },
  marks: {
    html: ({ children }) => {
      return <span dangerouslySetInnerHTML={{ __html: children }} />;
    },
  },
};

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #222;
  text-align: center;
`;

const FeaturedImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

const Date = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
`;

const BlogPost = ({ data }) => {
  const post = data.sanityPost;

  return (
    <Container>
      <Title>{post.title}</Title>
      <FeaturedImage src={post.mainImage.asset.url} alt={post.title} />
      <Date>{post.publishedAt}</Date>

      {/* Render Portable Text content with custom serializers */}
      <BlockContent blocks={post._rawBody} serializers={serializers} />
    </Container>
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
      _rawBody(resolveReferences: {maxDepth: 10}) 
    }
  }
`;

export default BlogPost;
