import { createContext, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const url = 'https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/';

  const fetchData = async (id) => {
    try {
      const response = id ? await axios.get(`${url}${id}`) : await axios.get(`${url}davidtamayo1112`);
      setData(response.data);
    } catch (error) {
      setData({ person: null });
    }
  };

  return (
    <AppContext.Provider value={{ data, fetchData }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
