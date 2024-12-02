// /app/resume/page.js
import Head from 'next/head';
import styles from './resume.module.css'; // Adjusted path to resume.module.css

export default function Resume() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume</title>
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Ritik Angra</h1>
          <p className={styles.subtitle}>Full Stack Developer | Software Engineer</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Looking for a Job</h2>
          <p className={styles.jobDescription}>
            I am currently seeking opportunities in full-stack development and software engineering. I am passionate about building scalable web applications and excited to contribute to innovative projects. My skills include front-end technologies like React and back-end technologies like Node.js, along with experience in working with databases and cloud services.
          </p>
          <p className={styles.jobDescription}>
            I am eager to join a team where I can grow and help create impactful software solutions. Please feel free to reach out if you have any opportunities that align with my skills and aspirations.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.education}>
            <h3 className={styles.school}>Georgian ILAC</h3>
            <p className={styles.degree}>Diploma in Computer Science</p>
            <p className={styles.date}> 2023- Present</p>
            <p className={styles.educationDetails}>Focused on web development, data structures, algorithms, and cloud computing. Achieved Dean's List honors for academic excellence.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skills}>
            <ul>
              <li><strong>Languages:</strong> JavaScript, Python, Java, SQL</li>
              <li><strong>Frameworks & Libraries:</strong> React, Node.js, Express, Django, Flask</li>
              <li><strong>Databases:</strong> MySQL, MongoDB</li>
              <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
              <li><strong>Tools:</strong> Docker, Jenkins, Postman, Visual Studio Code</li>
              <li><strong>Cloud Platforms:</strong> AWS, Google Cloud</li>
              <li><strong>Development Methodologies:</strong> Agile, Scrum</li>
              <li><strong>Soft Skills:</strong> Team Collaboration, Problem-Solving, Communication</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.projects}>
            <h3 className={styles.projectTitle}>Personal Portfolio Website</h3>
            <p className={styles.projectDescription}>Developed a personal portfolio website to showcase projects, skills, and achievements. The site is built with Next.js and deployed on Vercel.</p>
            <h3 className={styles.projectTitle}>Currency Converter App</h3>
            <p className={styles.projectDescription}>Created a real-time currency converter web app using React and integrated an external API to fetch exchange rates. The app is designed to be mobile-responsive.</p>
          </div>
          
        </section>
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
