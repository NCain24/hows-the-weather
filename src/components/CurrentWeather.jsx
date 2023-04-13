const CurrentWeather = ({ data }) => {
  return (
    <div className="flex justify-center m-auto mb-8 text-slate-200 rounded-xl w-[85%] md:w-[30%] shadow-xl bg-[rgb(0,0,0,.5)]">
      <div className="flex m-auto text-center">
        <div className="text-sm lg:text-xl">
          <p className="mb-4">Current Weather For:</p>
          <p className="text-lg lg:text-2xl">{data.city}</p>
          <p className="">{data.weather[0].description}</p>
          <div className="flex justify-center items-center">
            <p className="text-3xl lg:text-5xl">
              {Math.round(data.main.temp)}°F
            </p>
            <img
              
              src={`icons/${data.weather[0].icon}.png`}
              alt="weather"
              className="h-20 md:h-30"
            />
          </div>
          <div className="flex-row">
            <div>
              <span>Feels Like: </span>
              <span>{Math.round(data.main.feels_like)}°F</span>
            </div>
            <div>
              <span>Wind Speed: </span>
              <span>{Math.round(data.wind.speed)} mph</span>
            </div>
            <div>
              <span>Humidity: </span>
              <span>{data.main.humidity}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
