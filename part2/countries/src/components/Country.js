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

const Weather = ({ weather }) => {
  const src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div>
      temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius
      <br />
      <img src={src} alt={weather.weather.description} />
      <br />
      wind {weather.wind.speed} m/s
    </div>
  );
};

const Country = (props) => {
  const { name, capital, area, languages, flags, weather } = props;
  return (
    <div>
      <h1>{name}</h1>
      capitlal {capital} <br />
      area {area} <br />
      <br />
      <h2>languages:</h2>
      <Language languages={languages} />
      <Flag flags={flags} name={name} />
      <h2>Weather in {capital}</h2>
      {weather ? <Weather capital={capital} weather={weather} /> : null}
    </div>
  );
};

export default Country;
