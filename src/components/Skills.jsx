import "../stylesheets/components/Skills.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking, faPersonRunning, faPersonWalking, faChild } from '@fortawesome/free-solid-svg-icons';
import Technologies from "./Technologies";

const Skills = () => {
  return (
    <div className="skills flexColumn">
      <h3 className='weightNormal'>Skills and interests:</h3>
      <ul className="skillsLevel flexColumn">
        <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonBiking} /> ㅤMaster
          <Technologies level="master" />
        </li>
        <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonRunning} /> ㅤExpert
          <Technologies level="expert" />
        </li>
        <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonRunning} /> ㅤProficient
          <Technologies level="proficient" />
        </li>
        <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonWalking} /> ㅤBeginner
          <Technologies level="novice" />
        </li>
        <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faChild} /> ㅤNo experience, but interested
          <Technologies level="no-experience-interested" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;