import { useEffect, useState } from 'react';
import { WeeklyHourlyForecastPropertiesPeriods } from '../../types'
import { fetchImage } from '../../api';

function HourlyForecast({ singleHourlyForecast }: {singleHourlyForecast: WeeklyHourlyForecastPropertiesPeriods}){
    const { startTime, shortForecast, temperature, temperatureUnit, windSpeed, windDirection, icon } = singleHourlyForecast
    const [regularTime, setRegularTime] = useState<string>('')
    const [weatherImageUrl, setWeatherImageUrl] = useState<string>('')

    useEffect(() => {
        function changeMilitaryTimeToRegular(){
            const militaryHourInteger = Number(startTime.substring(11, 13))
            const militaryHourString = startTime.substring(11, 13)
            const time = startTime.substring(11, 19)
            if((militaryHourInteger - 12) > 0){
                const regularHour = (militaryHourInteger - 12).toString()
                setRegularTime(time.replace(militaryHourString, regularHour).concat(' PM'))
            } else if (militaryHourInteger === 0){
                const regularHour = '12'
                setRegularTime(time.replace(militaryHourString, regularHour).concat(' AM'))
            } else if (militaryHourInteger === 12) {
                const regularHour = militaryHourInteger.toString()
                setRegularTime(time.replace(militaryHourString, regularHour).concat(' PM'))
            } else {
                const regularHour = militaryHourInteger.toString()
                setRegularTime(time.replace(militaryHourString, regularHour).concat(' AM'))
            }
        }
        changeMilitaryTimeToRegular()

        async function getImageData(){
            const imageObjectURL = await fetchImage(icon.replace("small", "large"))
            if(imageObjectURL !== undefined){
                setWeatherImageUrl(imageObjectURL)
            }
        }
        getImageData()
    }, [startTime, icon])

    return (
        <div className='forecast-card' data-testid='hourly-forecast'>
            <h3 data-testid='hourly-forecast-time'>{regularTime}</h3>
            <p data-testid='hourly-forecast-date'>{startTime.substring(0, 10)}</p>
            <p data-testid='hourly-forecast-forecast'>Forecast: {shortForecast}</p>
            <p data-testid='hourly-forecast-temperature'>Temperature: {temperature} {temperatureUnit}</p>
            <p data-testid='hourly-forecast-wind'>Wind speed and direction: {windSpeed} {windDirection}</p>
            <img src={weatherImageUrl} alt="weather" data-testid='hourly-forecast-image'></img>
        </div>
    )
}

export default HourlyForecast