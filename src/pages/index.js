// src/pages/index.js
import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to My Awesome Blog</h1>
        <p style={styles.heroSubtitle}>Discover amazing stories, tips, and ideas</p>
        <Link to="/blog" style={styles.heroButton}>
          Explore the Blog
        </Link>
      </div>
      <div style={styles.infoSection}>
        <h2>Why Read My Blog?</h2>
        <p style={styles.p}>We share insights on a wide range of topics, from tech trends to lifestyle tips. Dive in to learn more!</p>
        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Tech</h3>
            <p>Get the latest updates on technology, tutorials, and guides.</p>
          </div>
          <div style={styles.card}>
            <h3>Lifestyle</h3>
            <p>Explore articles that help improve your daily life, from productivity to wellness.</p>
          </div>
          <div style={styles.card}>
            <h3>Inspiration</h3>
            <p>Read inspiring stories to motivate and encourage you in your journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  p:{
    marginLeft:'28%'

  },
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  hero: {
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    color: 'white',
    padding: '100px 20px',
  },
  heroTitle: {
    fontSize: '48px',
    margin: '0 0 20px',
  },
  heroSubtitle: {
    fontSize: '24px',
    marginBottom: '40px',
    marginLeft:'28%'
  },
  heroButton: {
    backgroundColor: '#ff6b6b',
    color: 'white',
    padding: '15px 30px',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  infoSection: {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '200px',
  },
};

export default IndexPage;
