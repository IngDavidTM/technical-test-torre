import "../stylesheets/components/Skills.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking, faPersonRunning, faPersonWalking, faChild } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div className="skills flexColumn">
      <h3 className='weightNormal'>Skills and interests:</h3>
      <ul className="skillsLevel flexColumn">
        <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonBiking} /> ㅤMaster
          <ul className="technologies flex">
            <li><button>one</button></li>
            <li><button>two</button></li>
            <li><button>three</button></li>
          </ul>
        </li>
        <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonRunning} /> ㅤExpert
          <ul className="technologies flex">
            <li><button>one</button></li>
            <li><button>two</button></li>
            <li><button>three</button></li>
          </ul>
        </li>
        <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonRunning} /> ㅤProficient
          <ul className="technologies flex">
            <li><button>one</button></li>
            <li><button>two</button></li>
            <li><button>three</button></li>
          </ul>
        </li>
        <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faPersonWalking} /> ㅤBeginner
          <ul className="technologies flex">
            <li><button>one</button></li>
            <li><button>two</button></li>
            <li><button>three</button></li>
          </ul>
        </li>
        <li className="level weightBold"><FontAwesomeIcon className="icons" icon={faChild} /> ㅤNo experience, but interested
          <ul className="technologies flex">
            <li><button>one</button></li>
            <li><button>two</button></li>
            <li><button>three</button></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Skills;