import "../stylesheets/components/Header.css"

const Header = () => {
  return (
    <header className="userInfo flexColumn">
      <div className="hexagon flex">
        <img className="userImage" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="profile" />
      </div>
      <h2 className='weightBold'>Camila Helers</h2>
    </header>
  );
};

export default Header;