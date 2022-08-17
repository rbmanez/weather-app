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
        <div className="forecast-card" data-testid="weekly-forecast">
            <h3 className="forecast-subheader" data-testid="weekly-forecast-name">{name}</h3>
            <p data-testid="weekly-forecast-time">{startTime.substring(0, 10)}</p>
            <p data-testid="weekly-forecast-forecast">Forecast: {detailedForecast}</p>
            <p data-testid="weekly-forecast-temperature">Temperature: {temperature} {temperatureUnit}</p>
            <p data-testid="weekly-forecast-wind">Wind speed and direction: {windSpeed} {windDirection}</p>
            <img src={weatherImageUrl} alt="weather" data-testid="weekly-forecast-image"></img>
        </div>
    )
}

export default WeeklyForecast