import './Education.css'; 
import { FaGraduationCap } from 'react-icons/fa'; 

function Education() {
  return (
    <section className="education" id='education'>
        <div className="title">      
            <h2>Education</h2>
        </div>
      <div className="degree-container">
        <div className="degree-text">
          <div className="degree">
            <h2>Diploma in IT</h2>
            <p>Completed in 2023. This program provided foundational knowledge in IT principles, programming languages, and systems management.</p>
          </div>
          <div className="degree">
            <h2>Bachelor of Engineering in IT</h2>
            <p>Expected completion in 2026. This degree focuses on advanced topics in IT, including software engineering, networking, and data science.</p>
          </div>
        </div>
        <div className="degree-icon">
          <FaGraduationCap size={150} />
        </div>
      </div>
    </section>
  );
}

export default Education;
