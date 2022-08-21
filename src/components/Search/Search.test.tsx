import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';

describe('<Search />', ()=>{
    const onChangeSetSearchedLocation = jest.fn()
    const onSubmitHourlyForecast = jest.fn()
    const onSubmitWeeklyForecast = jest.fn()
    
    test('renders search bar', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
    
    test('search bar calls onChangeSetSearchedLocation on character change', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        fireEvent.change(screen.getByRole('textbox'), { target: { value: "colorado springs, colorado" } })
        expect(onChangeSetSearchedLocation).toHaveBeenCalled()
    })


    test('renders hourly forecast button', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        expect(screen.getByRole('button', {name: 'Get Hourly Forecast'})).toBeInTheDocument()
    })

    test('hourly button calls onSubmitHourlyForecast on click', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        fireEvent.click(screen.getByRole('button', {name: 'Get Hourly Forecast'}))
        expect(onSubmitHourlyForecast).toHaveBeenCalled()
    })

    test('renders weekly forecast button', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        expect(screen.getByRole('button', {name: 'Get Weekly Forecast'})).toBeInTheDocument()
    })

    test('weekly button calls onSubmitWeeklyForecast on click', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        fireEvent.click(screen.getByRole('button', {name: 'Get Weekly Forecast'}))
        expect(onSubmitWeeklyForecast).toHaveBeenCalled()
    })

    test('renders how to get local forecast', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        expect(screen.getByText('(search with an empty input to get your local forecast)')).toBeInTheDocument()
    })
})