import "./About.css";
import { Typewriter } from "react-simple-typewriter";
import { FaPhoneAlt, FaFileAlt } from "react-icons/fa";

function About() {
  return (
    <section id="home" className="about">
      <div className="about-intro">
        <img src="/projects/portfolio.png"
          alt="profile"
          className="about-img" />

        <h1>
          Hi, I'm <span>Kaushal Kumar</span>
        </h1>

        <h2 className="role">
          <Typewriter
            words={[
              "Full Stack Web Developer",
              "Tech Enthusiast",
              "Problem Solver",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="about-text">
          I'm a passionate Full Stack Developer who enjoys building modern and
          responsive web applications. I love solving problems and creating
          user-friendly digital experiences.
        </p>

        <div className="about-buttons">
          <button className="contact-btn">
            <FaPhoneAlt className="btn-icon" />
            Contact Me
          </button>

          <a
            href="https://drive.google.com/file/d/1ZtaAVSI-7euB4ymS-Kx2lBza1uI-SfBt/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume-btn">
              <FaFileAlt className="btn-icon" />
              Resume
            </button>
          </a>
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>National Institute of Technology Arunachal Pradesh</p>
        </div>

        <div className="about-card">
          <h3>💻 Web Development</h3>
          <p>React, Next.js, Node.js, JavaScript</p>
        </div>

        <div className="about-card">
          <h3>🚀 Interests</h3>
          <p>Web Development & Problem Solving</p>
        </div>

        <div className="about-card">
          <h3>📍 Location</h3>
          <p>India</p>
        </div>
      </div>
    </section>
  );
}

export default About;
