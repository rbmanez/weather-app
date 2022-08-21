# Weather App

Link to live site (may ask for location permission): https://rbmanez.github.io/weather-app/

This weather app shows hourly and weekly forecasts for current and custom locations. Utilizes React, Redux Toolkit, React Testing Library, Typescript, weather.gov API, nominatim.openstreetmap.org API, and Geolocation API.

I was assigned to use weather.gov API to create a weather app. Since that API uses location coordinates and not city and state names I used nominatim.openstreetmap.org API to be able to search by city and state name to produce the coordinates. I also used Geolocation API to get user's current location coordniates.