import { render, screen } from '@testing-library/react';
import WeeklyForecast from './WeeklyForecast';

const singleDayForecast = {
    detailedForecast: "A chance of showers and thunderstorms after 1pm. Partly sunny, with a high near 91. South wind 10 to 15 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible.",
    endTime: "2022-08-14T18:00:00-06:00",
    icon: "https://api.weather.gov/icons/land/day/bkn/tsra_hi,50?size=medium",
    isDaytime: true,
    name: "Today",
    number: 1,
    shortForecast: "Partly Sunny then Chance Showers And Thunderstorms",
    startTime: "2022-08-14T11:00:00-06:00",
    temperature: 91,
    temperatureTrend: null,
    temperatureUnit: "F",
    windDirection: "S",
    windSpeed: "10 to 15 mph",
}

describe('<WeeklyForecast />', ()=>{
    test('renders weekly-forecast', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        screen.getByTestId('weekly-forecast')
    })

    test('renders weekly-forecast-name', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        screen.getByText('Today')
    })

    test('renders weekly-forecast-time', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        screen.getByText('2022-08-14')
    })

    test('renders weekly-forecast-forecast', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        screen.getByText('Forecast: A chance of showers and thunderstorms after 1pm. Partly sunny, with a high near 91. South wind 10 to 15 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible.')
    })

    test('renders weekly-forecast-temperature', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        screen.getByText('Temperature: 91 F')
    })
    test('renders weekly-forecast-wind', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        screen.getByText('Wind speed and direction: 10 to 15 mph S')
    })

    test('renders weekly-forecast-image', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        screen.getByTestId('weekly-forecast-image')
    })

})
