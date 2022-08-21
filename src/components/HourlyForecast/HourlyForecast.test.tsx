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
    test('renders forecast div container', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        expect(screen.getByTestId('hourly-forecast')).toBeInTheDocument()
    })

    test('renders heading name for forecast time', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        expect(screen.getByRole('heading', {name: '3:00:00 PM'})).toBeInTheDocument()
    })

    test('renders forecast date', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        expect(screen.getByText('2022-08-15')).toBeInTheDocument()
    })

    test('renders forecast', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        expect(screen.getByText('Forecast: Showers And Thunderstorms')).toBeInTheDocument()
    })

    test('renders forecast temperature', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        expect(screen.getByText('Temperature: 83 F')).toBeInTheDocument()
    })

    test('renders forecast wind', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        expect(screen.getByText('Wind speed and direction: 10 mph ESE')).toBeInTheDocument()
    })

    test('renders forecast image', ()=>{
        render(<HourlyForecast singleHourlyForecast={singleHourlyForecast} />)
        expect(screen.getByRole('img', {name: 'weather'})).toBeInTheDocument()
    })
})
