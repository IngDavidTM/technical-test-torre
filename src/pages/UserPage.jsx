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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchData()
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  const [show, setShow] = useState('main');
  const [showButton, setShowButton] = useState(true);
  const handleShow = () => {
    setShow('');
    setShowButton(false);
  };

  return (
    <main className={show}>
      <NavBar  setLoading={setLoading} />
      {data.person && !loading && (
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
      {(!data.person && !loading) && (
        <section className="infoSection flexColumn">
          <h2 className='centerText weightBold'>User not found</h2>
        </section>
      )}
      {loading && (
        <section className="infoSection flexColumn">
          <h2 className='centerText weightBold'>Loading...</h2>
        </section>
      )}
    </main>
  );
};

export default UserPage;