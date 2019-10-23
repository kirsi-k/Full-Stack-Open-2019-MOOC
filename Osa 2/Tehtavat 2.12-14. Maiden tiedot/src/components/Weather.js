import React from 'react'

const Weather = props => {
    return (
        <div>
            <h3>Weather in {props.weather.location.name}</h3>
            <b>Temperature: </b><p>{props.weather.current.temperature} Celsius</p>
            <img width='80' src={props.weather.current.weather_icons} alt='icon'/> <br/>
            <b>Wind: </b><p>{props.weather.current.wind_speed} kph direction {props.weather.current.wind_dir}</p>
        </div >
    )
};

export default Weather;