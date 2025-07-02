document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const WeatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "b032bde361180c0428160ff544a940bb"; // use env variables later on

  getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (!city) return;

    //when making call to some server
    // server may throw some error
    // server/database always in another continent (it takes time)
  });

  function fetchWeatherData(city) {
    //gets data
  }

  function displayWeatherData(weatherData) {
    //display
  }

  function showError(message) {
    WeatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
