import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const Country = props => {
    const [weather, setWeather] = useState(null);

    const getWeather = async () => {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=05d28a2209adb00e92bf8ceac9e176bd&query=${props.country.capital}`);
        setWeather(response.data);
    };
    useEffect(() => {
        getWeather()
    }, []);

    return (
        <div>
            <h1>{props.country.name}</h1>
            <p>Capital: {props.country.capital}</p>
            <p>Population: {props.country.population}</p>
            <h3>Languages</h3>
            <ul>
                {
                    props.country.languages.map(language =>
                        <li key={language.name}>{language.name}</li>
                    )
                }
            </ul>
            <img width='150' src={props.country.flag} alt='flag' />
            {
                weather &&
                <Weather weather={weather} />
            }
        </div>
    )
};

export default Country;
