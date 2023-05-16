import "../stylesheets/components/Modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose, faPersonBiking, faPersonRunning, faPersonWalking, faChild, faWeightHanging} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Modal = ({skill, handleModal}) => {
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
    </section>
  );
};

Modal.propTypes = {
  skill: PropTypes.node.isRequired,
  handleModal: PropTypes.node.isRequired,
}

export default Modal;