import "../stylesheets/components/Header.css"
import PropTypes from 'prop-types';

const Header = ({data}) => {
  return (
    <header className="userInfo flexColumn">
      <div className="hexagon flex">
        <img className="userImage" src={data.person?.picture} alt={data.person?.name} />
      </div>
      <h2 className='centerText weightBold'>{data.person?.name}</h2>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.node.isRequired,
}

export default Header;