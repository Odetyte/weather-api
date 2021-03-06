import React, {
  useState,
  useEffect
} from "react";
import axios from 'axios'

const CountriesInfo = ({
  country
}) => {
  const [weather, setWeather] = useState()
  const API_KEY = process.env.REACT_APP_API_KEY // saved in .env -> added to .gitignore
  const {
    name,
    capital,
    population,
    languages,
    flag
  } = country

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [API_KEY, capital])

  const languageList = () => languages.map(
    ({
      iso639_1,
      name
    }) => < li key = {
      iso639_1
    } > {
      name
    } < /li>
  )

  const weatherForecast = () => {
    if (!weather) return <p > No information can be displayed < /p>

    const {
      temperature,
      weather_icons,
      wind_speed,
      wind_dir
    } = weather.current
    return ( <
      >
      <
      p >
      <
      b > Temperature: < /b> {temperature} °C < /
      p > {
        weather_icons.map((icon, index) =>
          <
          img key = {
            index
          }
          src = {
            icon
          }
          alt = 'weather' / >
        )
      } <
      p >
      <
      b > Wind: < /b>{wind_speed} mph direction {wind_dir} < /
      p > <
      />
    )
  }
  return ( <
    >
    <
    h1 > {
      name
    } < /h1> <
    p > Capital: {
      capital
    } < /p> <
    p > Population {
      population
    } < /p> <
    h2 > Languages: < /h2> <
    ul > {
      languageList()
    } < /ul> <
    img src = {
      flag
    }
    width = "100px"
    alt = 'flag' / >
    <
    h2 > Weather in {
      capital
    } < /h2>{weatherForecast()} < / >
  )
}

export default CountriesInfo;