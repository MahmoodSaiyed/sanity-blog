// src/templates/blog-post.js
import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
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
    table: ({ node }) => {
      console.log(node)
      if (!node || !node.rows) {
        return <p>No table data available.</p>;
      }
      return (
        <table style={{
          width: '100%',
          border: '1px solid black',
          borderCollapse: 'collapse',
          tableLayout: 'fixed',
          backgroundColor: '#f9f9f9', // Table background color
        }}>
          <thead>
            <tr style={{ backgroundColor: '#0867d2', color: 'white' }}> {/* Header row styling */}
              {node.rows[0].cells.map((cell, cellIndex) => (
                <th key={cellIndex} style={{
                  border: '1px solid black',
                  padding: '8px',
                  textAlign: 'left',
                  fontWeight: 'bold', // Make header text bold
                }}>
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {node.rows.slice(1).map((row, rowIndex) => (
              <tr key={row._key || rowIndex} style={{
                backgroundColor: rowIndex % 2 === 0 ? '#fafafa' : 'white' // Alternate row colors
              }}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{
                    border: '1px solid black',
                    padding: '8px',
                    textAlign: 'left',
                    wordWrap: 'break-word',
                  }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
      
      
      
      
    },

    blockColor: ({ node }) => (
      <h1 style={{ color: node.color }}>
        {node.text}
      </h1>
    ),
  },
  marks: {
    html: ({ node }) => {
      return <span dangerouslySetInnerHTML={{ __html: node }} />;
    },
    color: ({ children, mark }) => {
      return <span style={{ color: mark.color }}>{children}</span>;
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
  console.log(post._rawBody)

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