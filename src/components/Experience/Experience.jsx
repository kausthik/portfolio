import "./Experience.css";

function Experience() {
 const experiences = [
  {
    role: "Software Development Intern",
    org: "National Institute of Technology Arunachal Pradesh",
    date: "Dec 2025 – Mar 2026",
    location: "Jote, Arunachal Pradesh",
    points: [
      "Designed and deployed scalable full-stack web architecture using Next.js, TypeScript, PostgreSQL, and Fastify, supporting 5000+ users.",
      "Led code reviews and managed 50+ pull requests, ensuring clean architecture, coding standards, and maintainable codebase.",
      "Resolved 25+ bugs and optimized backend APIs and database queries, improving system stability and response time.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Fastify",
      "Docker",
    ],
  },

  {
    role: "Hackathon Winner",
    org: "CAN Hackathon (NERIST)",
    date: "2025",
    points: [
      "Built an MVP in 6 hours to solve a real-world logistics problem during the hackathon.",
      "Collaborated in a team to rapidly design, develop, and present a working solution under strict time constraints.",
    ],
    tech: ["React", "Node.js"],
  },

  {
    role: "Vice President",
    org: "Coding Pundit - Coding Club of NIT Arunachal Pradesh",
    date: "2025 – Present",
    points: [
      "Mentored junior students in Data Structures & Algorithms and web development.",
      "Organized coding contests, workshops, and technical events to boost student participation.",
      "Collaborated with the core team to manage and execute technical initiatives.",
    ],
    tech: ["Leadership", "Event Management"],
  },
];
  return (
    <section id="experience" className="experience">
      <h2 className="exp-title">Experiences</h2>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot"></div>

            <div className="exp-card">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span>{exp.date}</span>
              </div>

              <h4>{exp.org}</h4>

              <ul>
                {exp.points.map((p, index) => (
                  <li key={index}>{p}</li>
                ))}
              </ul>

              <div className="tech-stack">
                <h5>Tech Stack</h5>

                <div className="tech-tags">
                  {exp.tech.map((t, index) => (
                    <span key={index}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
