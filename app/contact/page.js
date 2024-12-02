import Head from 'next/head';
import styles from '../../styles/Contact.module.css'; // Adjusted path to Contact module CSS

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.description}>
          We’d love to hear from you! Whether you have a question about our services, feedback, or just want to connect, feel free to reach out.
        </p>

        {/* Form Section */}
        <section className={styles.formContainer}>
          <h2 className={styles.subtitle}>Send Us a Message</h2>
          <form>
            <input className={styles.formInput} type="text" placeholder="Your Name" required />
            <input className={styles.formInput} type="email" placeholder="Your Email" required />
            <textarea className={styles.formInput} placeholder="Your Message" required></textarea>
            <input className={styles.formSubmit} type="submit" value="Send Message" />
          </form>
        </section>

        {/* Social Links Section */}
        <section className={styles.socialLinksSection}>
          <h2 className={styles.subtitle}>Follow Me</h2>
          <ul className={styles.socialLinks}>
            <li><a href="https://linkedin.com" className={styles.socialLink}>LinkedIn</a></li>
            <li><a href="https://github.com" className={styles.socialLink}>GitHub</a></li>
            <li><a href="https://twitter.com" className={styles.socialLink}>Twitter</a></li>
          </ul>
        </section>

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blog">Blog</a></li>

        </ul>
      </main>
    </div>
  );
}
