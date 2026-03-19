import "./Projects.css";
import { useState } from "react";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Campus Ride",
      desc: "College ride sharing website",
      link: "https://rent-and-share.vercel.app/main-page",
    },
    {
      title: "Shortest Path Finder",
      desc: "Visualizes the shortest route between two or more points.",
      link: "https://bhumikacoder21.github.io/ShortestPath/",
    },
    {
      title: "NIT Arunachal Pradesh",
      desc: "Official Website of National Institute of Technology Arunachal Pradesh",
      link: "https://beta.nitap.ac.in",
    },
    {
      title: "Darpan CCTV",
      desc: "A CCTV store website to showcase its product",
      link: "https://cctv-store.vercel.app/",
    },
    {
      title: "Weather App",
      desc: "A website that allows users to search weather data by city or current location",
      link: "https://bhumikacoder21.github.io/Weather-App/",
    },
    {
      title: "Portfolio Website",
      desc: "Modern portfolio using React",
      link: "#",
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
