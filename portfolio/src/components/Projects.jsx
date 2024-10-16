import './Projects.css';

function Projects({title}) {
  return (
    <section className="projects-section" id='projects'>
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        <div className="project">
          <h3>{title}</h3>
          <p>
            A responsive portfolio website showcasing my skills, projects, and experiences. 
            Built with React and Vite for fast performance, this website highlights my journey as a developer.
          </p>
          <p><a href="https://github.com/ShreyashDhekane">View Here</a></p>
        </div>
        <div className="project">
          <h3>Task Management App</h3>
          <p>
            A full-stack task management application that allows users to create, edit, and delete tasks. 
            Developed using Node.js for the backend and MongoDB for data storage, with a sleek React frontend.
          </p>
          <p><a href="https://github.com/ShreyashDhekane">View Here</a></p>
        </div>
        <div className="project">
          <h3>E-commerce Store</h3>
          <p>
            An online store application that supports user authentication, product browsing, 
            and secure payment processing. Built with React and Stripe API, designed to provide a seamless shopping experience.
          </p>
          <p><a href="https://github.com/ShreyashDhekane">View Here</a></p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
