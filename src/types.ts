export interface ForecastData {
    context: (string|ForecastDataContext)[]
    geometry: {coordinates: number[], type: string}
    id: string
    properties: ForecastDataPropertiesType
    type: string
}
  
interface ForecastDataContext {
    version: string
    vocab: string
    bearing: {type: string}
    city: string
    county: {type: string}
    distance: {id: string, type: string}
    forecastGridData: {type: string}
    forecastOffice: {type: string}
    geo: string
    geometry: {id: string, type: string}
    publicZone: {type: string}
    s: string
    state: string
    unit: string
    unitCode: {id: string, type: string}
    value: {id: string}
    wx: string
}

export interface ForecastDataPropertiesType {
    id: string
    type: string
    county: string
    cwa: string
    fireWeatherZone: string
    forecast: string
    forecastGridData: string
    forecastHourly: string
    forecastOffice: string
    forecastZone: string
    gridId: string
    gridX: number
    gridY: number
    observationStations: string
    radarStation: string
    relativeLocation: {type: string, geometry: {coordinates: number[], type: string}, properties: LocationNameType}
    timeZone: string
}

export interface LocationNameType {
    bearing: {
        unitCode: string
        value: number
    }
    city: string
    distance: {
        unitCode: string
        value: number
    }
    state: string
}

export interface WeeklyHourlyForecast {
    context: (string|WeeklyHourlyForecastContext)[]
    geometry: {type: string, coordinates: number[][]}
    properties: WeeklyHourlyForecastProperties
    type: string
}

interface WeeklyHourlyForecastContext {
    version: string
    vocab: string
    geo: string
    unit: string
    wx: string
}

interface WeeklyHourlyForecastProperties {
    elevation: {unitCode: string, value: number}
    forecastGenerator: string
    generatedAt: string
    periods: WeeklyHourlyForecastPropertiesPeriods[]
    units: string
    updateTime: string
    updated: string
    validTimes: string
}

export interface WeeklyHourlyForecastPropertiesPeriods {
    detailedForecast: string;
    endTime: string;
    icon: string;
    isDaytime: boolean;
    name: string;
    number: number;
    shortForecast: string;
    startTime: string;
    temperature: number;
    temperatureTrend: null | string;
    temperatureUnit: string;
    windDirection: string;
    windSpeed: string;
}

export interface ErrorType {
    name: string;
    message: string;
    stack?: string;
}

export interface LocationDataType {
    boundingbox: string[]
    class: string
    display_name: string
    icon: string
    importance: number
    lat: string
    licence: string
    lon: string
    osm_id: number
    osm_type: string
    place_id: number
    type: string
  }