import 'src/components/projectCard/projectCard.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRotate } from "react-icons/fa6";
import { IconContext } from "react-icons";

const ProjectCard = ({project}) => {

  const [isFlipped, setFlipped] = useState(false);

  const handleCardFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className='project-main-container'>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className='flip-card-inner'>
          <div className='card-front'>
            <div className='card-content'>
              <button className='flip-button-front' onClick={handleCardFlip}>
                <IconContext.Provider value={{ size: "40px" }}>
                  <div>
                    <FaRotate />
                  </div>
                </IconContext.Provider>
              </button>
              <h3>{project.name}</h3>
              <div className='project-btns'>
                <a target='_blank' rel='noreferrer' href={project.demo_link} className='demo-btn'>
                  Live Demo
                </a>
                <a target='_blank' rel='noreferrer' href={project.repository_link} className='repo-btn'>
                  View code
                </a>
              </div>
              <img className='project-img' src={project.img} alt='project screenshot' />
            </div>
          </div>
          <div className='card-back'>
            <div className='card-content back-content'>
              <button className='flip-button-back' onClick={handleCardFlip}>
                  <IconContext.Provider value={{ size: "20px" }}>
                    <div>
                      <FaRotate />
                    </div>
                  </IconContext.Provider>
              </button>
              <h3>{project.name}</h3>
              <p className='description'>{project.description}</p>
              <div className='project-text-box'>
                <div className='skills-container'>
                  {project.skills.map((skill) => (
                    <p key={`${project.id}_${skill}`} className='skills'>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
// Define prop types for ProjectCard component
ProjectCard.propTypes = {
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
      demo_link: PropTypes.string.isRequired,
      repository_link: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  };

export default ProjectCard;