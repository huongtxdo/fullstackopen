const Countries = (props) => {
  const { searchCountries, clickShowButton } = props;

  if (0 < searchCountries.length && searchCountries.length <= 10) {
    return (
      <div>
        <ul>
          {searchCountries.map((country) => {
            return (
              <li key={country.name.common}>
                {country.name.common}
                <button onClick={() => clickShowButton(country)}>show</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <p>Too many matches, specify another filter</p>
    </div>
  );
};
export default Countries;
