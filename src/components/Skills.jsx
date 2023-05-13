import "../stylesheets/components/Skills.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking, faPersonRunning, faPersonWalking, faChild } from '@fortawesome/free-solid-svg-icons';
import Technologies from "./Technologies";
import { useState } from 'react';
import Modal from "./Modal";
import PropTypes from 'prop-types';

const Skills = ({data}) => {
  const [modal, setModal] = useState(false);
  const [skill, setSkill] = useState({});

  const handleModal = (strength) => {
    setModal(!modal);
    setSkill(strength);
  };

  return (
    <>
      <div className="skills flexColumn">
        <h3 className='weightNormal'>Skills and interests:</h3>
        <ul className="skillsLevel flexColumn">
          <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonBiking} /> ㅤMaster
            <Technologies level="master" data={data} handleModal={handleModal} />
          </li>
          <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonRunning} /> ㅤExpert
            <Technologies level="expert" data={data} handleModal={handleModal} />
          </li>
          <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonRunning} /> ㅤProficient
            <Technologies level="proficient" data={data} handleModal={handleModal} />
          </li>
          <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonWalking} /> ㅤBeginner
            <Technologies level="novice" data={data} handleModal={handleModal} />
          </li>
          <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faChild} /> ㅤNo experience, but interested
            <Technologies level="no-experience-interested" data={data} handleModal={handleModal} />
          </li>
        </ul>
      </div>
      {modal && <Modal skill={skill} data={data} handleModal={handleModal} />}
    </>
  );
};

Skills.propTypes = {
  data: PropTypes.node.isRequired,
}

export default Skills;