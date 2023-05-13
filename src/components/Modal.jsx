import "../stylesheets/components/Modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';

const Modal = ({skill, data, handleModal}) => {
  const skills = {
    "master": "Master",
    "expert": "Expert",
    "proficient": "Proficient",
    "novice": "Beginner",
    "no-experience-interested": "No experience, but interested"
  };

  const jobExperience = data.experiences.filter((job) => {
    return job.category === 'jobs';
  });

  return (
    <section className="modal flexColumn">
      <nav className="navModal flex">
        <FontAwesomeIcon className="cursor" icon={faClose} onClick={handleModal}/>
        <h2 className="weightBold">{skill.name}</h2>
      </nav>
      <div className="modalInfo flexColumn">
        <p className="weightNormal">Proficiency: {skills[skill.proficiency]}</p>
        <p className="weightNormal">Recomendations: {skill.recommendations}</p>
        <p className="weightNormal">Weight: {skill.weight?.toFixed(1)}</p>
      </div>
      <div className="modalInfo flexColumn">
        <h4>{data.person?.name}'s experiences</h4>
        {jobExperience.map((job) => {
          return (
            <div key={job.id}>
              <p className="weightNormal">{job.name}</p>
              <p className="weightNormal">{job.organizations[0].name}</p>
              <p className="weightNormal">{job.fromMonth} {job.fromYear} - {job.toMonth ? job.toMonth : "Now"} {job.toYear}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Modal;