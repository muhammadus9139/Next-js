

function getLocation() {
  const locationStatus = document.getElementById('location-status');

  if (!navigator.geolocation) {
    if (locationStatus) {
      locationStatus.textContent = 'Geolocation is not supported by this browser';
    }
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      if (locationStatus) {
        locationStatus.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
      }
      console.log('User location:', position.coords);
    },
    (error) => {
      if (locationStatus) {
        locationStatus.textContent = `Geolocation error: ${error.message}`;
      }
      console.error('Geolocation error:', error);
    }
  );
}

getLocation();
