import React, { useState } from 'react';

const Weather = () => {
  const [place, setPlace] = useState('');
  const [location, setLocation] = useState({
    lat: '',
    lon: '',
  });
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '031f4daf87d9dfa615b8fda4451ef2d0';

  // Function to get the latitude and longitude for the city
  const get_LOC = async (city) => {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    try {
      const res = await fetch(URL);
      const data = await res.json();

      if (data.length === 0) {
        throw new Error('City not found');
      }

      setLocation({
        lat: data[0].lat,
        lon: data[0].lon,
      });
    } catch (err) {
      setError('Could not find location, please check the city name.');
      console.error(err);
    }
  };

  // Function to get the weather data based on the coordinates
  const get_Weather = async () => {
    if (!place) {
      alert('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get location first
      await get_LOC(place);

      // Get weather data once the location is set
      const Weather_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric`;

      const res = await fetch(Weather_URL);
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container p-6 max-w-lg bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Weather App</h1>
        
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter City Name"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        
        <button
          className={`w-full p-3 rounded-lg text-white ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
          onClick={get_Weather}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        {weather && (
          <div className="mt-6 p-4 border-t-2 border-gray-200">
            <h2 className="text-2xl font-semibold text-center text-blue-600">{weather.timezone}</h2>
            <p className="text-center text-xl mt-2">Temperature: {weather.current.temp}°C</p>
            <p className="text-center text-xl mt-2">Humidity: {weather.current.humidity}%</p>
            <p className="text-center text-xl mt-2">Weather: {weather.current.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;