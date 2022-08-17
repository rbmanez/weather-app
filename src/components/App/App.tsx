import { useEffect, useState } from 'react';
import './App.css';
import SearchedWeeklyForecast from '../SearchedWeeklyForecast/SearchedWeeklyForecast';
import SearchedHourlyForecast from '../SearchedHourlyForecast/SearchedHourlyForecast';
import LocationName from '../LocationName/LocationName';
import Search from '../Search/Search';
import { fetchAllForecast, fetchSearchedLocation } from '../../api';
import { forecastDataPropertiesActions } from '../../features/forecastDataProperties/forecastDataPropertiesSlice'
import { locationDataActions } from '../../features/locationData/locationDataSlice'

import { useAppSelector, useAppDispatch } from '../../hooks'

function App() {
  const forecastDataProperties = useAppSelector((state) => state.forecastDataProperties.value)
  const locationData = useAppSelector((state) => state.locationData.value)
  const dispatch = useAppDispatch()

  const [searchedLocation, setSearchedLocation] = useState<string>('')
  const [currentLatitude, setCurrentLatitude] = useState<string>('')
  const [currentLongitude, setCurrentLongitude] = useState<string>('')
  const [performSearch, setPerformSearch] = useState<boolean>(false)
  const [searchWeeklyForecast, setSearchWeeklyForecast] = useState<boolean>(false)
  const [serachHourlyForecast, setSearchHourlyForecast] = useState<boolean>(false)
  const [hasFetchError, setHasFetchError] = useState<boolean>(false)

  function onSubmitHourlyForecast(){
    setSearchHourlyForecast(true)
    setSearchWeeklyForecast(false)
    setPerformSearch(true)
  }

  function onSubmitWeeklyForecast(){
    setSearchWeeklyForecast(true)
    setSearchHourlyForecast(false)
    setPerformSearch(true)
  }

  function onChangeSetSearchedLocation(event: React.ChangeEvent<HTMLInputElement>){
    setSearchedLocation(event.target.value)
  }
  
  function showPosition(position: any) {
    setCurrentLatitude(position.coords.latitude)
    setCurrentLongitude(position.coords.longitude)
  }

  useEffect(() => {
    function getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }
    getCurrentLocation()

    async function getSearchedLocationData(){
      if (searchedLocation !== "" && performSearch){
        const data = await fetchSearchedLocation(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${searchedLocation}`)
        if (data !== undefined){
          dispatch(locationDataActions(data))
          setHasFetchError(false)
        } else {
          setHasFetchError(true)
        }
      }  
    }
    getSearchedLocationData()

    async function getForecastData(){
      if (searchedLocation !== "" && locationData.lat !== "" && locationData.lon !== ""){
          const data = await fetchAllForecast(`https://api.weather.gov/points/${locationData.lat},${locationData.lon}`)
          if (data !== undefined){
            dispatch(forecastDataPropertiesActions(data))
            setHasFetchError(false)
          } else {
            setHasFetchError(true)
          }
        } else if (currentLatitude !== "" && currentLongitude !== "" && searchedLocation === "" && performSearch){
          const data = await fetchAllForecast(`https://api.weather.gov/points/${currentLatitude},${currentLongitude}`)
          if (data !== undefined){
            dispatch(forecastDataPropertiesActions(data))
            setHasFetchError(false)
          } else {
            setHasFetchError(true)
          }
        }
    }
    getForecastData()
    setPerformSearch(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [performSearch, currentLatitude, currentLongitude, dispatch, locationData.lat, locationData.lon])

  return (
    <div className="App" data-testid="app">
      <h1>WEATHER APP</h1>

      {(currentLatitude !== '' && currentLongitude !== '') ?
          <Search onChangeSetSearchedLocation={onChangeSetSearchedLocation} onSubmitHourlyForecast={onSubmitHourlyForecast} onSubmitWeeklyForecast={onSubmitWeeklyForecast} /> :
          <h2>Loading...</h2>}

      {((searchWeeklyForecast || serachHourlyForecast) && !hasFetchError) && <LocationName />}

      {((forecastDataProperties.forecast !== "" && searchWeeklyForecast) && !hasFetchError) && <SearchedWeeklyForecast />}

      {((forecastDataProperties.forecastHourly !== "" && serachHourlyForecast) && !hasFetchError) && <SearchedHourlyForecast />}
      
      {(hasFetchError) && <p>An error occured. Please make sure the search location is spelled correctly and using the full name.</p>}
    </div>
  )
}

export default App;
