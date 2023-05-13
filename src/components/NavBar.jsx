import "../stylesheets/components/NavBar.css"
import { useState,useContext } from 'react';
import { AppContext } from '../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faSearch, faClose} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };

  const { fetchData } = useContext(AppContext);

  const handleChange = (e) => {
    fetchData(e.target.value);
  };

  return (
    <nav className="navBar flex">
      <div className="flex">
        <FontAwesomeIcon className="cursor" icon={faBars} />
        <h1>torre<span className='textYellow weightNormal'>.co</span></h1>
      </div>
      {!search && (
        <div className="flex">
          <FontAwesomeIcon className="cursor" onClick={handleSearch} icon={faSearch} />
          <a className="textYellow weightLight" href="https://torre.co/?r=eJTS6tfg" target="_blank" rel="noreferrer">SIGN IN</a>
        </div>
      )}
      {search && (
        <div className="newUser flex">
          <input className="search" type="text" placeholder="New user"  onChange={handleChange} />
          <FontAwesomeIcon className="cursor" onClick={handleSearch} icon={faClose} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;