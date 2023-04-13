
const CurrentWeather = ({data}) => {
  return (
    <div>
      <div>
        <div>
          <p>Current Weather For:</p>
          <p>{data.city}</p>
          <p>{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div>
        <p>{Math.round(data.main.temp)}°F</p>
        <div>
          <div>
            <span>Feels Like</span>
            <span>
              {Math.round(data.main.feels_like)}°F
            </span>
          </div>
          <div>
            <span>Wind</span>
            <span>
              {Math.round(data.wind.speed)} mph
            </span>
          </div>
          <div>
            <span>Humidity</span>
            <span>{data.main.humidity}%</span>
          </div>
          <div>
            <span>Pressure</span>
            <span>{data.main.pressure} mb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
