// src/components/BlogCard.js
import React from 'react';
import { Link } from 'gatsby';

const BlogCard = ({ title, date, imageUrl, slug }) => {
  return (
    <div style={styles.card}>
      <Link to={`/blog/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={imageUrl} alt={title} style={styles.image} />
        <div style={styles.content}>
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    marginBottom: '20px',
    maxWidth: '300px',
  },
  image: {
    width: '100%',
    // height: '200px',
    objectFit: 'contain',
    overflow: 'hidden',

  },
  content: {
    padding: '15px',
  },
};

export default BlogCard;
