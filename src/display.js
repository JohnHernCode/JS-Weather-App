const view = (() => {
  const setSearchResult = (weatherData) => {
    if (!weatherData) {
      localStorage.setItem('temp', '');
      return;
    }

    const city = document.querySelector('.city');
    const icon = document.querySelector('.icon');
    const desc = document.querySelector('.description');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    const temp = document.querySelector('.temp');

    city.textContent = `${weatherData.city}`;
    temp.textContent = `${Math.round(weatherData.temp)} °C`;
    icon.src = `https://openweathermap.org/img/wn/${weatherData.icon}.png`;
    desc.textContent = `${weatherData.description.toUpperCase()}`;
    humidity.textContent = `Humidity: ${weatherData.humidity} %`;
    wind.textContent = `Wind: ${weatherData.speed} m/h`;
    localStorage.setItem('temp', weatherData.temp);
  };
  localStorage.setItem('toggleC', true);
  return { setSearchResult };
})();

const tempChange = () => {
  const temp = document.querySelector('.temp');

  const toggleC = JSON.parse(localStorage.getItem('toggleC'));
  const tempM = JSON.parse(localStorage.getItem('temp'));

  if (toggleC) {
    localStorage.setItem('toggleC', 'false');
    temp.textContent = `${Math.round((tempM * 9) / 5 + 32)} °F`;
  } else {
    localStorage.setItem('toggleC', 'true');
    temp.textContent = `${Math.round(tempM)} °C`;
  }
  return temp;
};

export { view, tempChange };