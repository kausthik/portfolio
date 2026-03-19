import "./Skills.css";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiPython,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skills = [
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
    { name: "Express", icon: <SiExpress color="#444444" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    // { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#171515" /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills & Technologies</h2>

      <p className="skills-subtitle">
        The tools and technologies I use to build modern applications
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
