import { render, screen } from '@testing-library/react';
import HourlyForecast from './HourlyForecast';

const singleHourlyForecast = {
    detailedForecast: "",
    endTime: "2022-08-15T16:00:00-06:00",
    icon: "https://api.weather.gov/icons/land/day/tsra,80?size=small",
    isDaytime: true,
    name: "",
    number: 1,
    shortForecast: "Showers And Thunderstorms",
    startTime: "2022-08-15T15:00:00-06:00",
    temperature: 83,
    temperatureTrend: null,
    temperatureUnit: "F",
    windDirection: "ESE",
    windSpeed: "10 mph",
}

describe('<HourlyForecast />', ()=>{
    test('renders hourly-forecast', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        screen.getByTestId('hourly-forecast')
    })

    test('renders hourly-forecast-time', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        screen.getByText('3:00:00 PM')
    })

    test('renders hourly-forecast-date', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        screen.getByText('2022-08-15')
    })

    test('renders hourly-forecast-forecast', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        screen.getByText('Forecast: Showers And Thunderstorms')
    })

    test('renders hourly-forecast-temperature', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        screen.getByText('Temperature: 83 F')
    })

    test('renders hourly-forecast-wind', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        screen.getByText('Wind speed and direction: 10 mph ESE')
    })

    test('renders hourly-forecast-image', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        screen.getByTestId('hourly-forecast-image')
    })
})
