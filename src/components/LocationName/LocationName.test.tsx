import { render, screen } from '@testing-library/react';
import LocationName from './LocationName';
import { Provider } from 'react-redux'
import { ForecastDataPropertiesType, LocationDataType } from '../../types';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialLocationDataStateValue: LocationDataType = {
    boundingbox: ['38.7154517', '39.0351247', '-104.9170862', '-104.5999135'],
    class: "boundary",
    display_name: "Colorado Springs, El Paso County, Colorado, United States",
    icon: "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png",
    importance: 0.8867648050225984,
    lat: "38.8339578",
    licence: "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    lon: "-104.825348",
    osm_id: 113141,
    osm_type: "relation",
    place_id: 297983635,
    type: "administrative",
}

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState: {
        value: initialLocationDataStateValue
    },
    reducers: {
        locationData: (state, action: PayloadAction<LocationDataType>) => {
            state.value = action.payload
        }
    }
})

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
        forecastDataProperties: forecastDataPropertiesSlice.reducer,
        locationData: locationDataSlice.reducer
    },
})

describe('<LocationName />', ()=>{
    test('renders first-location-text', ()=>{
        render(<Provider store={store}><LocationName /></Provider>)
        screen.getByTestId('first-location-text')
    })

    test('renders second-location-text', ()=>{
        render(<Provider store={store}><LocationName /></Provider>)
        screen.getByTestId('second-location-text')
    })
})