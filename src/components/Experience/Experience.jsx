import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Web Developer Intern",
      org: "National Institute of Technology Arunachal Pradesh",
      date: "Dec 2025 – Present",
      location: "Jote, Arunachal Pradesh",
      points: [
        "Developing the official website of NIT Arunachal Pradesh from scratch as part of the web development internship.",
        "Built responsive and user-friendly interfaces using modern frontend technologies to ensure seamless experience across devices.",
        "Integrated frontend components with backend APIs to enable dynamic data rendering and smooth interaction with the system.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Fastify",
        "Docker",
      ],
    },

    {
      role: "Hackathon Winner (1st Runner Up)",
      org: "HackDawn – NIT Arunachal Pradesh",
      date: "Nov 2025",
      points: [
        "Built 'AgriHill', a platform connecting North-East farmers with local vendors and buyers across different regions.",
        "Developed features for product listing, vendor discovery, and seamless communication between farmers and buyers.",
        "Collaborated in a team of 5 developers and presented the solution to mentors and judges during the hackathon.",
      ],
      tech: ["React", "Node.js", "Firebase"],
    },

    {
      role: "Secretary",
      org: "Coding Pundit - Official Coding Club of NIT Arunachal Pradesh",
      date: "July 2025 – Present",
      points: [
        "Organize and coordinate coding contests, technical workshops, and hackathons for students.",
        "Mentor junior students in Data Structures & Algorithms and web development fundamentals.",
        "Collaborate with the core team to plan technical events and increase student participation in competitive programming.",
      ],
      tech: ["Leadership", "Event Management"],
    },
    {
      role: "Frontend Developer Intern",
      org: "Prakash.AI Private Limited",
      date: "June 2025 – July 2025",
      location: "Virtual",
      points: [
        "Developed a fully responsive CCTV store website using React.js, HTML, CSS, and JavaScript, improving user engagement and online presence.",
        "Implemented seamless multi-page navigation using React Router.",
        "Built modern and reusable UI components ensuring cross-device compatibility.",
      ],
      tech: ["React.js", "JavaScript", "HTML", "CSS", "React Router"],
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
