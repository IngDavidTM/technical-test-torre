import "../stylesheets/components/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;