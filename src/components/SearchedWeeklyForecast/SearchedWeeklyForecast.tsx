import { useState, useEffect } from "react"
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast"
import { WeeklyHourlyForecastPropertiesPeriods } from '../../types'
import { fetchWeeklyOrHourlyForecast } from "../../api"
import { useAppSelector } from '../../hooks'

function SearchedWeeklyForecast(){
    const forecastDataProperties = useAppSelector((state) => state.forecastDataProperties.value)
    const [weeklyForecast, setWeeklyForecast] = useState<WeeklyHourlyForecastPropertiesPeriods[]>([])

    useEffect(() => {
        async function getWeeklyForecastData(){
            const data = await fetchWeeklyOrHourlyForecast(forecastDataProperties.forecast)
            setWeeklyForecast(data)
        }
        getWeeklyForecastData()
    }, [forecastDataProperties.forecast])

    return (
        <div>
            <h2 className='forecast-header'>Weekly Forecast</h2>
            {weeklyForecast.length !== 0 &&
                weeklyForecast.map((singleDayForecast, key) => {
                    return <WeeklyForecast singleDayForecast={singleDayForecast} key={singleDayForecast.number}/>
                })}
        </div>
    )
}

export default SearchedWeeklyForecast