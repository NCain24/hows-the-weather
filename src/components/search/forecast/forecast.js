import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './forecast.css'

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                            <img
                                className='icon-small'
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°F /{' '}
                    {Math.round(item.main.temp_max)}°F
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='daily-details-grid'>
                        
                        <div className='daily-details-grid-item'>
                            <label>Humidity: </label>
                            <label>{item.main.humidity}%</label>
                        </div>
                        <div className='daily-details-grid-item'>
                            <label>Cloud Cover:</label>
                            <label>{item.clouds.all}%</label>
                        </div>
                        <div className='daily-details-grid-item'>
                            <label>Wind Speed: </label>
                            <label>{Math.round(item.wind.speed)} mph</label>
                        </div>
                    </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
