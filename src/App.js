import React, {
  useState,
  useEffect
} from "react";
import axios from 'axios'
import Filter from './components/Filter';
import Search from './components/Search';

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [countrySearch, setCountrySearch] = useState('')

  useEffect(() => {
    axios
      .get('http://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleCountrySearchChange = (event) => {
    setCountrySearch(event.target.value)
    setFilterCountries(getFilterCountries(event.target.value))
  }

  const displayCountry = (n) => {
    setFilterCountries([filterCountries[n]])
  }

  const getFilterCountries = (search) => countries.filter(
    country => {
      const countryName = country.name.toLowerCase()
      return countryName.includes(search.toLowerCase())
    }
  )

  return ( <
    >
    <
    Filter onChange = {
      handleCountrySearchChange
    }
    value = {
      countrySearch
    }
    /> <
    Search countries = {
      filterCountries
    }
    onClick = {
      displayCountry
    }
    /> < /
    >
  )
}

export default App;