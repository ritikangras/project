'use client';

import { useState } from 'react';
import styles from './weather.module.css';

export default function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'ce97e3c6a25714035c2ef01f72cf3fb2';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

  const handleWeatherSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch weather data for the city
      const response = await fetch(`${API_URL}${city}`);
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`Error fetching weather data: ${errorText}`);
      }

      const data = await response.json();
      
      if (data.cod !== 200) {
        throw new Error(data.message || 'Weather data not found.');
      }

      // Set weather data
      setWeatherData(data);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError(err.message || 'An error occurred while fetching weather data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Weather App</h1>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="city">City:</label>
        <input
          className={styles.input}
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button
          className={styles.button}
          onClick={handleWeatherSearch}
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Get Weather'}
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}
      {weatherData && (
        <div className={styles.result}>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
