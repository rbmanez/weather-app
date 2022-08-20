import { ForecastData, WeeklyHourlyForecast, LocationDataType } from "./types"

async function fetchURL(url: string){
    const response = await fetch(url)
    return response.json()
}
export async function fetchAllForecast(latitude: string, longitude: string){
    const data: ForecastData = await fetchURL(`https://api.weather.gov/points/${latitude},${longitude}`)
    return data.properties
}
export async function fetchWeeklyOrHourlyForecast(url: string){
    const data: WeeklyHourlyForecast = await fetchURL(url)
    return data.properties.periods
}

export async function fetchImage(url: string){
    const response = await fetch(url)
    const imageBlob = await response.blob()
    return URL.createObjectURL(imageBlob)
}

export async function fetchSearchedLocation(url: string) {
    const data: LocationDataType[] = await fetchURL(url)
    return data[0]
}