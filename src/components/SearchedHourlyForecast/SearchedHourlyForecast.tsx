import { useEffect, useState } from "react"
import HourlyForecast from "../HourlyForecast/HourlyForecast"
import { WeeklyHourlyForecastPropertiesPeriods } from '../../types'
import { fetchWeeklyOrHourlyForecast } from "../../api"
import { useAppSelector } from '../../hooks'

function SearchedHourlyForecast(){
    const forecastDataProperties = useAppSelector((state) => state.forecastDataProperties.value)
    const [hourlyForecast, setHourlyForecast] = useState<WeeklyHourlyForecastPropertiesPeriods[]>([])

    useEffect(() => {
        async function getHourlyForecastData(){
            const data = await fetchWeeklyOrHourlyForecast(forecastDataProperties.forecastHourly)
            setHourlyForecast(data)
        }
        getHourlyForecastData()
    }, [forecastDataProperties.forecastHourly])

    return (
        <div>
            <h2 className="forecast-header">Hourly Forecast</h2>
            {(hourlyForecast.length !== 0) &&
                hourlyForecast.slice(0, 20).map((singleHourlyForecast, key) => {
                    return <HourlyForecast singleHourlyForecast={singleHourlyForecast} key={singleHourlyForecast.number}/>
                })}
        </div>
    )
}

export default SearchedHourlyForecast