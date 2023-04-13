import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

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
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label>{forecastDays[idx]}</label>
                  <label>{item.weather[0].description}</label>
                  <label>{Math.round(item.main.temp)}°F</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div>
                <div>
                  <label>Humidity: </label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div>
                  <label>Cloud Cover:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div>
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
