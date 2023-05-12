import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faPersonBiking, faPersonRunning, faPersonWalking, faChild } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/pages/UserPage.css';

const UserPage = () => {
  return (
    <>
      <nav className="navBar flex">
        <div className="flex">
          <FontAwesomeIcon className="cursor" icon={faBars} />
          <h1>torre<span className='textYellow weightNormal'>.co</span></h1>
        </div>
        <div className="flex">
          <FontAwesomeIcon className="cursor" icon={faSearch} />
          <a className="textYellow weightLight" href="https://torre.co/?r=eJTS6tfg" target="_blank" rel="noreferrer">SIGN IN</a>
        </div>
      </nav>
      <section className="infoSection flexColumn">
        <header className="userInfo flexColumn">
          <div className="hexagon flex">
            <img className="userImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="profile" />
          </div>
          <h2 className='weightBold'>Camila Helers</h2>
        </header>
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
      </section>
    </>
  );
};

export default UserPage;