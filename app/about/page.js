import Head from 'next/head';
import styles from '../../styles/About.module.css'; // Adjusted path to About module CSS

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Ritik Angra</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Ritik Angra</h1>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>My Story</h2>
          <p className={styles.description}>
            I am a passionate and goal-driven individual with a strong background in technology. My journey in the tech world started during my academic years, where I developed a keen interest in coding and problem-solving. Currently, I am expanding my skills in full-stack development and looking for new opportunities to apply my knowledge and experience in the industry. I believe in creating innovative solutions that make a positive impact and drive meaningful change.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>My Mission</h2>
          <p className={styles.description}>
            My mission is to continuously improve my technical skills while contributing to projects that are not only technically sound but also user-centric. I am passionate about building responsive websites, developing apps that solve real-world problems, and collaborating with teams to deliver high-quality, efficient software solutions.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Professional Experience</h2>
          <div className={styles.team}>
            <div className={styles.teamMember}>
              <h3 className={styles.teamName}>Ritik Angra</h3>
              <p className={styles.teamRole}>Crew Member</p>
              <p className={styles.teamDescription}>
                As a crew member at McDonald's, I work in a fast-paced environment, providing exceptional customer service and handling a variety of tasks to ensure smooth operations. This role has helped me develop strong communication, problem-solving, and teamwork skills.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Why Choose Me?</h2>
          <ul className={styles.benefits}>
            <li>Passionate Learner: I continuously strive to learn and improve my technical and soft skills.</li>
            <li>Strong Work Ethic: I bring dedication and hard work to every project, ensuring the best outcomes.</li>
            <li>Team-Oriented: I believe in the power of teamwork and collaboration to drive successful results.</li>
            <li>Adaptability: I am able to adapt quickly to new tools and environments, ready to take on new challenges.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Let's Connect</h2>
          <p className={styles.description}>
            If you are looking for someone with a passion for technology, problem-solving, and continuous learning, let's connect! I'm open to exploring opportunities to work on exciting projects together.
          </p>
          <a href="/contact" className={styles.contactLink}>Contact Me</a>
        </section>

        <ul className={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>

        </ul>
      </main>
    </div>
  );
}
