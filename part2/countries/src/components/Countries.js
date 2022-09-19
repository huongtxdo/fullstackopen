// const Language = (props) => {
//     const {key, value} = props.languages
//     console.log("value is ", value)
// }

const Countries = (props) => {
    const {countries, searchName} = props
    const searchCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchName.toLowerCase())) 
    if (searchCountries.length > 10 || searchCountries.length === 0)
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
   if (searchCountries.length === 1)
        return (
            <div>
                <h1>{searchCountries[0].name.common}</h1>
                capitlal {searchCountries[0].capital} <br/>
                area {searchCountries[0].area} <br/><br/>
                <b>languages:</b>
                {/* <Language languages={searchCountries[0].languages}/> */}
                {}
            </div>   
        )
    return (
        <div>
            <ul>
                {searchCountries.map((country) => 
                <li key={country.name.common}>{country.name.common}</li>)}
            </ul>
        </div>
    )
}

export default Countries