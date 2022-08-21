import './Search.css'

function Search({ onSubmitHourlyForecast, onSubmitWeeklyForecast, onChangeSetSearchedLocation }: { onSubmitHourlyForecast: () => void; onSubmitWeeklyForecast: () => void; onChangeSetSearchedLocation: (event: React.ChangeEvent<HTMLInputElement>) => void}){
    return (
        <div>
            <input
                type="text"
                placeholder="enter full city and state name"
                onChange={onChangeSetSearchedLocation}
            />

            <div className="button-group">
                <button type="submit" onClick={onSubmitHourlyForecast}>
                    Get Hourly Forecast
                </button>
                
                <button type="submit" onClick={onSubmitWeeklyForecast}>
                    Get Weekly Forecast
                </button>
            </div>
            
            <p className='small-font'>(search with an empty input to get your local forecast)</p>
        </div>
    )
}

export default Search