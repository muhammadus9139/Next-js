'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  const [locationText, setLocationText] = useState('Loading your location...');

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationText('Geolocation is not supported by this browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocationText(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
      },
      (error) => {
        setLocationText(`Geolocation error: ${error.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return (
    <div>
      <h1>Get user location</h1>
      <p>{locationText}</p>
    </div>
  );
}
