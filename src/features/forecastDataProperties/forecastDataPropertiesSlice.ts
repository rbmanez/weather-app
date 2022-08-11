import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { ForecastDataPropertiesType } from '../../types'

const initialStateValue: ForecastDataPropertiesType = {
    id: '',
    type: '',
    county: '',
    cwa: '',
    fireWeatherZone: '',
    forecast: '',
    forecastGridData: '',
    forecastHourly: '',
    forecastOffice: '',
    forecastZone: '',
    gridId: '',
    gridX: 0,
    gridY: 0,
    observationStations: '',
    radarStation: '',
    relativeLocation: {
      type: '', 
      geometry: {
        coordinates: [], 
        type: ''
      }, 
      properties: {
        bearing: {
          unitCode: '',
          value: 0
        },
        city: '',
        distance: {
          unitCode: '',
          value: 0
        },
      state: ''
      }
    },
    timeZone: ''
}

export const forecastDataPropertiesSlice = createSlice({
    name: 'forecastDataProperties',
    initialState: {
        value: initialStateValue
    },
    reducers: {
        forecastDataProperties: (state, action: PayloadAction<ForecastDataPropertiesType>) => {
            state.value = action.payload
        }
    }
})

export const { forecastDataProperties: forecastDataPropertiesActions } = forecastDataPropertiesSlice.actions

export const selectForecastDataProperties = (state: RootState) => state.forecastDataProperties.value

export default forecastDataPropertiesSlice.reducer