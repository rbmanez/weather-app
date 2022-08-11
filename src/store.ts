import { configureStore } from '@reduxjs/toolkit'
import forecastDataPropertiesReducer from './features/forecastDataProperties/forecastDataPropertiesSlice'
import locationDataReducer from './features/locationData/locationDataSlice'

export const store = configureStore({
    reducer: {
        forecastDataProperties: forecastDataPropertiesReducer,
        locationData: locationDataReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch