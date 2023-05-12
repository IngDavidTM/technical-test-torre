import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Skills from '../components/Skills';

const UserPage = () => {
  return (
    <>
      <NavBar />
      <section className="infoSection flexColumn">
        <Header />
        <Skills />
      </section>
    </>
  );
};

export default UserPage;