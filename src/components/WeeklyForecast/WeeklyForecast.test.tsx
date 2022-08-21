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
    test('renders forecast div container', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        expect(screen.getByTestId('weekly-forecast')).toBeInTheDocument()
    })

    test('renders forecast name', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        expect(screen.getByRole('heading', {name: 'Today'})).toBeInTheDocument()
    })

    test('renders forecast startTime for date', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        expect(screen.getByText('2022-08-14')).toBeInTheDocument()
    })

    test('renders forecast', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        expect(screen.getByText('Forecast: A chance of showers and thunderstorms after 1pm. Partly sunny, with a high near 91. South wind 10 to 15 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible.')).toBeInTheDocument()
    })

    test('renders forecast temperature', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        expect(screen.getByText('Temperature: 91 F')).toBeInTheDocument()
    })
    test('renders forecast wind', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        expect(screen.getByText('Wind speed and direction: 10 to 15 mph S')).toBeInTheDocument()
    })

    test('renders forecast image', ()=>{
        render(<WeeklyForecast singleDayForecast={singleDayForecast} />)
        expect(screen.getByRole('img', {name: 'weather'})).toBeInTheDocument()
    })
})
