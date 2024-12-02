import React from 'react';
import Link from 'next/link';
import styles from './blog.module.css';

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogMain}>
        <h1 className={styles.blogTitle}>My Blog</h1>
        <div className={styles.blogPosts}>
          <div className={styles.blogPost}>
            <img
              src="/images/edge-computing.jpg" // Add the image for Edge Computing article
              alt="Edge Computing"
              className={styles.blogImage}
            />
            <h2>The Rise of Edge Computing: A Game Changer for Real-Time Applications</h2>
            <p>
              In this post, we explore how edge computing is transforming real-time applications and what it means for the future of computing...
            </p>
            <a
              href="https://medium.com/@200535500/the-rise-of-edge-computing-a-game-changer-for-real-time-applications-ced05491bcda"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>

          <div className={styles.blogPost}>
            <img
              src="/images/ai-creativity.jpg" // Add the image for AI Impact article
              alt="AI and Creativity"
              className={styles.blogImage}
            />
            <h2>Decoding the Impact of Artificial Intelligence on Creative Industries</h2>
            <p>
              AI is revolutionizing creative industries in unexpected ways. This post dives into how AI is reshaping everything from art creation to marketing strategies...
            </p>
            <a
              href="https://medium.com/@200535500/decoding-the-impact-of-artificial-intelligence-on-creative-industries-92398865225b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>

          <div className={styles.blogPost}>
            <img
              src="/images/automation-ai.jpg" // Add the image for Future of Work article
              alt="Automation and AI in the Workplace"
              className={styles.blogImage}
            />
            <h2>The Future of Work: Embracing Automation and AI in the Workplace</h2>
            <p>
              As automation and AI continue to evolve, this post looks at how these technologies are reshaping the modern workplace and what it means for workers...
            </p>
            <a
              href="https://medium.com/@200535500/the-future-of-work-embracing-automation-and-ai-in-the-workplace-7dfea7640ef1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </div>

        {/* Link to go back to Home */}
        <div className={styles.backToHome}>
          <Link href="/">
            <span className={styles.homeLink}>Go Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
