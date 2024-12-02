import Head from 'next/head';
import styles from '../styles/Home.module.css'; // Adjusted import path for Home module CSS

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js Project!</h1>
        <p className={styles.description}>
          Get started by editing <code>app/page.js</code>
        </p>

        <ul className={styles.navLinks}>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/resume">Resume</a></li> 
          <li><a href="/blog">Blog</a></li> {/* New Blog button */}
        </ul>

        {/* Expanded Contact Section */}
        <section className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Get in Touch</h2>
          <p className={styles.contactDescription}>
            We'd love to hear from you! Whether you have a question about the project, feedback, or just want to connect, feel free to reach out.
          </p>
          <div className={styles.contactInfo}>
            <p>Email: <a href="mailto:example@example.com" className={styles.contactLink}>ritikangra2700@gmail.com</a></p>
            <p>Phone: <span className={styles.contactDetail}>+14375994287</span></p>
            <p>Address: <span className={styles.contactDetail}>8 Litchfield Ct, Etobicoke, Canada</span></p>
          </div>
        </section>

        {/* Created by Ritik Angra Line */}
        <div className={styles.createdBy}>
          <p>Created by <strong>Ritik Angra</strong></p>
        </div>
      </main>
    </div>
  );
}
