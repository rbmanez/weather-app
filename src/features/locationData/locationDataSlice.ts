import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { LocationDataType } from '../../types'

const initialStateValue: LocationDataType = {
    boundingbox: [''],
    class: '',
    display_name: '',
    icon: '',
    importance: 0,
    lat: '',
    licence: '',
    lon: '',
    osm_id: 0,
    osm_type: '',
    place_id: 0,
    type: '',
  }

export const locationDataSlice = createSlice({
    name: 'locationData',
    initialState: {
        value: initialStateValue
    },
    reducers: {
        locationData: (state, action: PayloadAction<LocationDataType>) => {
            state.value = action.payload
        }
    }
})

export const { locationData: locationDataActions } = locationDataSlice.actions

export const selectLocationDataSlice = (state: RootState) => state.locationData.value

export default locationDataSlice.reducer