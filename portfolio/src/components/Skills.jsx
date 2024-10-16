import React from 'react';
import './Skills.css';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaStripeS, FaChartBar, FaHtml5, FaCss3Alt, FaRocket } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', icon: <FaJs size={30} /> },
  { name: 'React', icon: <FaReact size={30} /> },
  { name: 'Node.js', icon: <FaNodeJs size={30} /> },
  { name: 'MongoDB', icon: <FaDatabase size={30} /> },
  { name: 'Stripe', icon: <FaStripeS size={30} /> },
  { name: 'HTML', icon: <FaHtml5 size={30} /> },
  { name: 'CSS', icon: <FaCss3Alt size={30} /> },
];

function Skills() {
  return (
    <section className="skills-section" id='skills'>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
