import './Introduction.css';
import myImage from '../assets/454.png';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; 

function Introduction({title,description}) {
  return (
    <section className="introduction" id='introduction'>
      <div className="intro-image">
        <img src={myImage} alt="Shreyash Dhekane" />
      </div>
      <div className="intro-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="social-icons">
          <a href="https://github.com/ShreyashDhekane" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/ShreyashDhekane" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://github.com/ShreyashDhekane" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://github.com/ShreyashDhekane" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
