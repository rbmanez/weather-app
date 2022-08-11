import { useEffect, useState } from 'react';
import { WeeklyHourlyForecastPropertiesPeriods } from '../../types'
import { fetchImage } from '../../api';

function WeeklyForecast({ singleDayForecast }: {singleDayForecast: WeeklyHourlyForecastPropertiesPeriods}){
    const { name, startTime, detailedForecast, icon, temperature, temperatureUnit, windSpeed, windDirection } = singleDayForecast
    const [weatherImageUrl, setWeatherImageUrl] = useState<string>('')

    useEffect(() => {
        async function getImageData(){
            const imageObjectURL = await fetchImage(icon.replace("medium", "large"))
            if(imageObjectURL !== undefined){
                setWeatherImageUrl(imageObjectURL)
            }
        }
        getImageData()
    }, [icon])

    return (
        <div className="forecast-card">
            <h3 className="forecast-subheader">{name}</h3>
            <p>{startTime.substring(0, 10)}</p>
            <p>Forecast: {detailedForecast}</p>
            <p>Temperature: {temperature} {temperatureUnit}</p>
            <p>Wind speed and direction: {windSpeed} {windDirection}</p>
            <img src={weatherImageUrl} alt="weather"></img>
        </div>
    )
}

export default WeeklyForecast