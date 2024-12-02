import Head from 'next/head';
import styles from '../../styles/Portfolio.module.css'; // Adjusted path to Portfolio module CSS

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Portfolio</h1>

        <section className={styles.section}>
          <div className={styles.project}>
            <img
              src="/images/currency-project.jpg"  // Adjust the path to the image file
              alt="Currency Converter"
              className={styles.projectImage}
            />
            <h3 className={styles.projectTitle}>Convert Currencies</h3>
            <p className={styles.projectDescription}>
              A simple currency converter powered by an external API. Convert your currencies with ease!
            </p>
            <a href="/portfolio/currency" className={styles.demoLink}>
              Try Currency Converter
            </a>
          </div>

          {/* Riddle Project Link */}
          <div className={styles.project}>
            <img
              src="/images/riddle-game.jpg"  // Adjust the path to the image file
              alt="Riddle Game"
              className={styles.projectImage}
            />
            <h3 className={styles.projectTitle}>Riddle Game</h3>
            <p className={styles.projectDescription}>
              A fun riddle game that challenges your mind with random riddles. Can you guess the answer?
            </p>
            <a href="/portfolio/riddles" className={styles.demoLink}>
              Try Riddle Game
            </a>
          </div>

          {/* Weather Project Link */}
          <div className={styles.project}>
            <img
              src="/images/weather-app.jpg"  // Adjust the path to the image file
              alt="Weather App"
              className={styles.projectImage}
            />
            <h3 className={styles.projectTitle}>Weather App</h3>
            <p className={styles.projectDescription}>
              A weather app that fetches real-time weather data for your city, powered by OpenWeatherMap API.
            </p>
            <a href="/portfolio/weather" className={styles.demoLink}>
              Try Weather App
            </a>
          </div>
        </section>

        <ul className={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>

        </ul>
      </main>
    </div>
  );
}
