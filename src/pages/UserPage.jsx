import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Skills from '../components/Skills';

const UserPage = () => {
  const { data, fetchData } = useContext(AppContext);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      {data.person && (
        <section className="infoSection flexColumn">
          <Header data={data} />
          <Skills data={data}/>
        </section>
      )}
      {!data.person && (
        <section className="infoSection flexColumn">
          <h2 className='centerText weightBold'>User not found</h2>
        </section>
      )}
    </>
  );
};

export default UserPage;