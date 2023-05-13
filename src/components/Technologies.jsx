import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWeightHanging} from '@fortawesome/free-solid-svg-icons';

const Technologies = ({level, data}) => {

  if (data.strengths) {
    const dataFiltered = data.strengths.filter((strength) => {
      return strength.proficiency === level;
    });
    if (dataFiltered.length === 0) {
      return (
        <p className="textGray technologies">[Empty]</p>
      );
    } else {
      return (
        <ul className="technologies flex">
          {dataFiltered.map((strength) => {
            return (
              <li key={strength.id}><button>
                {strength.name}
                {" "}
                {strength.weight !== 0 ? <FontAwesomeIcon icon={faWeightHanging} /> : ''}
                {" "}
                {strength.weight !== 0 ? strength.weight.toFixed(1) : ''}
              </button></li>
            );
          })}
        </ul>
      );
    }
  }
};

export default Technologies;