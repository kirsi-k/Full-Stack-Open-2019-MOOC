import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterForm from './components/FilterForm';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const getAllCountries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    setCountries(response.data)
  };

  useEffect(() => {
    getAllCountries()
  }, []);

  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(filter.toLowerCase())
  });

  return (
      <div>
        <FilterForm filter={filter} setFilter={setFilter}/>
        {
          filteredCountries.length > 10 &&
          <p>Too many matches, specify another filter</p>
        }
        {
          filteredCountries.length <= 10 && filteredCountries.length > 1 &&
          filteredCountries.map(country =>
              <p key={country.name}>{country.name} <button onClick={() => setFilter(country.name)}>Show</button></p>
          )
        }
        {
          filteredCountries.length === 1 &&
          filteredCountries.map(country =>
              <Country key={country.name} country={country}/>
          )
        }
      </div>
  )
};

export default App;
