import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faPersonBiking, faPersonRunning, faPersonWalking, faChild } from '@fortawesome/free-solid-svg-icons';

const UserPage = () => {
  return (
    <>
      <nav>
        <FontAwesomeIcon icon={faBars} />
        <h1>torre.co</h1>
        <FontAwesomeIcon icon={faSearch} />
        <a href="https://torre.co/?r=eJTS6tfg" target="_blank" rel="noreferrer">SIGN IN</a>
      </nav>
      <section>
        <header>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="profile" />
          <h2>Camila Helers</h2>
        </header>
        <div>
          <h3>Skills and interests:</h3>
          <ul>
            <li><FontAwesomeIcon icon={faPersonBiking} /> Master
              <ul>
                <li><button>one</button></li>
                <li><button>two</button></li>
                <li><button>three</button></li>
              </ul>
            </li>
            <li><FontAwesomeIcon icon={faPersonRunning} /> Expert
              <ul>
                <li><button>one</button></li>
                <li><button>two</button></li>
                <li><button>three</button></li>
              </ul>
            </li>
            <li><FontAwesomeIcon icon={faPersonRunning} /> Proficient
              <ul>
                <li><button>one</button></li>
                <li><button>two</button></li>
                <li><button>three</button></li>
              </ul>
            </li>
            <li><FontAwesomeIcon icon={faPersonWalking} /> Beginner
              <ul>
                <li><button>one</button></li>
                <li><button>two</button></li>
                <li><button>three</button></li>
              </ul>
            </li>
            <li><FontAwesomeIcon icon={faChild} /> No experience, but interested
              <ul>
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