import "../stylesheets/components/Header.css"
import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const Header = () => {
  const { data, fetchData } = useContext(AppContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <header className="userInfo flexColumn">
      <div className="hexagon flex">
        <img className="userImage" src={data.person?.picture} alt={data.person?.name} />
      </div>
      <h2 className='centerText weightBold'>{data.person?.name}</h2>
    </header>
  );
};

export default Header;