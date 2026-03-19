import "./Projects.css";
import { useState } from "react";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Campus Connect",
      desc: "Multi-vendor campus e-commerce platform with 100+ products and optimized order processing using Redis, BullMQ, and Elasticsearch.",
      link: "https://connect.nitap.ac.in/",
    },
    {
      title: "Rent-or-Share Platform",
      desc: "Full-stack ride-sharing platform with real-time posting, filtering system, and reduced ride discovery time by ~40%.",
      link: "https://rent-and-share.vercel.app/main-page",
    },
    {
      title: "ANPR System",
      desc: "YOLOv5-based number plate recognition system with ~85% accuracy and OCR pipeline using OpenCV and EasyOCR.",
      link: "https://github.com/kausthik/automatic-number-plate-recognition",
    },
  ];
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Latest Projects</h2>

      <div className="projects-grid">
        {visibleProjects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <a href={p.link} className="project-btn">
              View Project →
            </a>
          </div>
        ))}
      </div>

      {!showAll && (
        <button className="more-btn" onClick={() => setShowAll(true)}>
          And many more
        </button>
      )}
    </section>
  );
}

export default Projects;