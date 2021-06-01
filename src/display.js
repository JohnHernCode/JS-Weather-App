const view = (() => {
  const setSearchResult = (weatherData) => {
    if (!weatherData) return;

    const city = document.querySelector('.city');
    const temp = document.querySelector('.temp');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');

    city.textContent = `${weatherData.city}`;
    temp.textContent = `${weatherData.temp} °F`;
    humidity.textContent = `Humidity: ${weatherData.humidity} %`;
    wind.textContent = `Wind: ${weatherData.speed} m/h`;
  }

  return { setSearchResult };
})();

export default view;