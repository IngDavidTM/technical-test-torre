import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Skills from '../components/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../stylesheets/pages/UserPage.css"

const UserPage = () => {
  const { data, fetchData } = useContext(AppContext);
  useEffect(() => {
    fetchData();
  }, []);
  const [show, setShow] = useState('main');
  const [showButton, setShowButton] = useState(true);
  const handleShow = () => {
    setShow('');
    setShowButton(false);
  };

  return (
    <main className={show}>
      <NavBar />
      {data.person && (
        <section className="infoSection flexColumn">
          <Header data={data} />
          <Skills data={data}/>
          {showButton && (
            <div className='showButton flex'>
              <FontAwesomeIcon className="cursor" onClick={handleShow} icon={faChevronDown} />
            </div>
          )}
        </section>
      )}
      {!data.person && (
        <section className="infoSection flexColumn">
          <h2 className='centerText weightBold'>User not found</h2>
        </section>
      )}
    </main>
  );
};

export default UserPage;