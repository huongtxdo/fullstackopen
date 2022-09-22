const Language = (props) => {
  const { languages } = props;
  const languagesValue = Object.values(languages);
  return (
    <ul>
      {languagesValue.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
};

const Flag = (props) => {
  const { flags, name } = props;
  return <img src={flags.svg} style={{ width: 200 }} alt={name} />;
};

const Country = (props) => {
  const { name, capital, area, languages, flags } = props;
  return (
    <div>
      <h1>{name}</h1>
      capitlal {capital} <br />
      area {area} <br />
      <br />
      <b>languages:</b>
      <Language languages={languages} />
      <Flag flags={flags} name={name} />
    </div>
  );
};

const Countries = (props) => {
  const { countries, searchName } = props;
  const searchCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchName.toLowerCase())
  );
  const selectedCountry = searchCountries[0];

  const showCountry = (country) => {
    console.log("hey1 ");
    return (
      <Country
        name={country.name.common}
        capital={country.capital}
        area={country.area}
        languages={country.languages}
        flags={country.flags}
      />
    );
  };

  if (searchCountries.length > 10 || searchCountries.length === 0)
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );

  if (searchCountries.length === 1)
    return <div>{showCountry(selectedCountry)}</div>;

  return (
    <div>
      <ul>
        {searchCountries.map((country) => {
          console.log("country ", country);
          return (
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => showCountry(country)}>show</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Countries;
