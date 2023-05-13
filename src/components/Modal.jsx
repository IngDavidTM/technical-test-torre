import "../stylesheets/components/Modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose, faPersonBiking, faPersonRunning, faPersonWalking, faChild, faWeightHanging} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Modal = ({skill, data, handleModal}) => {
  const skills = {
    "master": "Master",
    "expert": "Expert",
    "proficient": "Proficient",
    "novice": "Beginner",
    "no-experience-interested": "No experience, but interested"
  };

  const icons = {
    "master": faPersonBiking,
    "expert": faPersonRunning,
    "proficient": faPersonRunning,
    "novice": faPersonWalking,
    "no-experience-interested": faChild
  };

  const jobExperience = data.experiences.filter((job) => {
    return job.category === 'jobs';
  });

  return (
    <section className="modal flexColumn">
      <nav className="navModal flex">
        <FontAwesomeIcon className="cursor" icon={faClose} onClick={handleModal}/>
        <h2 className="weightNormal">{skill.name}</h2>
      </nav>
      <div className="modalInfo flexColumn">
        <p className="weightLight"><span className="textGray">Proficiency: </span><FontAwesomeIcon icon={icons[skill.proficiency]} /> {skills[skill.proficiency]}</p>
        <p className="weightLight"><span className="textGray">Recomendations: </span>{skill.recommendations}</p>
        <p className="weightLight"><span className="textGray">Weight: </span><FontAwesomeIcon icon={faWeightHanging} /> {skill.weight?.toFixed(1)}</p>
      </div>
      <div className="modalInfo flexColumn">
        <h4 className="weightLight">{`${data.person?.name}'s experiences:`}</h4>
        {jobExperience.map((job) => {
          return (
            <div key={job.id}>
              <p className="weightNormal textYellow">{job.name}</p>
              <p className="weightNormal textGray">{job.organizations[0].name}</p>
              <p className="weightNormal textGray">{job.fromMonth} {job.fromYear} - {job.toMonth ? job.toMonth : "Now"} {job.toYear}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

Modal.propTypes = {
  skill: PropTypes.node.isRequired,
  data: PropTypes.node.isRequired,
  handleModal: PropTypes.node.isRequired,
}

export default Modal;