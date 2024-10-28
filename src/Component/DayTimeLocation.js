import React, { useState, useEffect } from 'react';
import '../Style/DayTimeLocation.css'; // Add a CSS file for styles

const DayTimeLocation = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError('Location not available');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="scrolling-container">
      <div className="scrolling-content">
        <div className="info-row">
          <h3>
            Current Date and Time: {currentDate.toLocaleDateString()} - {currentDate.toLocaleTimeString()}
          </h3>
          <h3 className="location">
            Current Location: {error ? (
              <span>{error}</span>
            ) : (
              <span>
                Longitude: {location.lon ? location.lon.toFixed(2) : 'Loading...'} | 
                Latitude: {location.lat ? location.lat.toFixed(2) : 'Loading...'}
              </span>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DayTimeLocation;
