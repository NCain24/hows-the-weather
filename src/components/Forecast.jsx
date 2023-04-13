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
      <h1 className='text-center text-xl md:text-3xl underline underline-offset-8 pb-10'>FutureCast</h1>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading className='pb-4'>
              <AccordionItemButton>
                <div className='flex justify-between align-center m-auto md:max-w-[800px] bg-white rounded'>
                  <label>{forecastDays[idx]} </label>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className='h-10'
                  />
                  <label>{item.weather[0].description} </label>
                  <label>{Math.round(item.main.temp)}°F </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='text-center'>
                <div>
                  <label>Humidity: </label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div>
                  <label>Cloud Cover:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className='pb-10'>
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
