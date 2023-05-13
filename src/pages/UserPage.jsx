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
          <Header />
          <Skills />
        </section>
      )}
    </>
  );
};

export default UserPage;