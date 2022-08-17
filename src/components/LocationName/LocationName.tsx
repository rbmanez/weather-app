import { useAppSelector } from '../../hooks'
import './LocationName.css'

function LocationName(){
    const forecastDataProperties = useAppSelector((state) => state.forecastDataProperties.value)
    const locationData = useAppSelector((state) => state.locationData.value)
    const { city, state } = forecastDataProperties.relativeLocation.properties
    
    return (
        <div className='location-area'>
            {(city !== '' && state !== '') &&
                <div>
                    <h3 data-testid='first-location-text'>Location/Area: {city}, {state}</h3>
                    {(locationData.display_name !== '') && <p data-testid='second-location-text'>({locationData.display_name})</p>}
                </div>}
        </div>
    )
}

export default LocationName