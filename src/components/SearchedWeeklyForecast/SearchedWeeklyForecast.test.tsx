import { render, screen } from '@testing-library/react';
import SearchedWeeklyForecast from './SearchedWeeklyForecast';
import { Provider } from 'react-redux'
import { ForecastDataPropertiesType } from '../../types';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialForecastDataPropertiesStateValue: ForecastDataPropertiesType = {
    id: "https://api.weather.gov/points/38.834,-104.8253",
    type: "wx:Point",
    county: "https://api.weather.gov/zones/county/COC041",
    cwa: "PUB",
    fireWeatherZone: "https://api.weather.gov/zones/fire/COZ227",
    forecast: "https://api.weather.gov/gridpoints/PUB/89,90/forecast",
    forecastGridData: "https://api.weather.gov/gridpoints/PUB/89,90",
    forecastHourly: "https://api.weather.gov/gridpoints/PUB/89,90/forecast/hourly",
    forecastOffice: "https://api.weather.gov/offices/PUB",
    forecastZone: "https://api.weather.gov/zones/forecast/COZ085",
    gridId: "PUB",
    gridX: 89,
    gridY: 90,
    observationStations: "https://api.weather.gov/gridpoints/PUB/89,90/stations",
    radarStation: "KPUX",
    relativeLocation: {
        geometry: {
            coordinates: [-104.760749, 38.867255],
            type: "Point",
        },
        properties: {
            bearing: {unitCode: 'wmoUnit:degree_(angle)', value: 236},
            city: "Colorado Springs",
            distance: {unitCode: 'wmoUnit:m', value: 6702.3032000469},
            state: "CO"
        },
        type: "Feature"
        },
    timeZone: "America/Denver"
}

const forecastDataPropertiesSlice = createSlice({
    name: 'forecastDataProperties',
    initialState: {
        value: initialForecastDataPropertiesStateValue
    },
    reducers: {
        forecastDataProperties: (state, action: PayloadAction<ForecastDataPropertiesType>) => {
            state.value = action.payload
        }
    }
})

const store = configureStore({
    reducer: {
        forecastDataProperties: forecastDataPropertiesSlice.reducer
    },
})

describe('<SearchedWeeklyForecast />', ()=>{
    test('renders searched-weekly-forecast', ()=>{
        render(<Provider store={store}><SearchedWeeklyForecast /></Provider>)
        screen.getByTestId('searched-weekly-forecast')
    })
})