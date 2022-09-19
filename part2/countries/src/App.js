import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import SearchCountries from './components/SearchCountries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState('')
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  return (
    <div>
      <SearchCountries searchName={searchName} handleSearchName={handleSearchName}/>
      <Countries countries={countries} searchName={searchName}/>
    </div>
  );
}

export default App;
