import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';

describe('<Search />', ()=>{
    const onChangeSetSearchedLocation = jest.fn()
    const onSubmitHourlyForecast = jest.fn()
    const onSubmitWeeklyForecast = jest.fn()
    
    test('renders search bar', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        screen.getByTestId('search-bar')
    })
    
    test('search bar calls onChangeSetSearchedLocation on character change', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        fireEvent.change(screen.getByTestId('search-bar'), { target: { value: "colorado springs, colorado" } })
        expect(onChangeSetSearchedLocation).toHaveBeenCalled()
    })


    test('renders hourly forecast button', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        screen.getByTestId('hourly-button')
    })

    test('hourly button calls onSubmitHourlyForecast on click', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        fireEvent.click(screen.getByTestId('hourly-button'))
        expect(onSubmitHourlyForecast).toHaveBeenCalled()
    })

    test('renders weekly forecast button', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        screen.getByTestId('weekly-button')
    })

    test('weekly button calls onSubmitWeeklyForecast on click', ()=>{
        render(<Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} />)
        fireEvent.click(screen.getByTestId('weekly-button'))
        expect(onSubmitWeeklyForecast).toHaveBeenCalled()
    })
})