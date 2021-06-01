const weather = (() => {
  const convertData = (data) => {
    const {
      name: city,
      weather: { 0: { icon, description } },
      main: { temp, humidity },
      wind: { speed },
    } = data;
    return {
      city,
      icon,
      description,
      temp,
      humidity,
      speed,
    };
  };

  const getData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7e80b833710868e5ad24105caf405553`;
    try {
      const response = await fetch(
        url,
        { mode: 'cors' },
      );
      if (!response.ok) throw new Error(`City ${city} not found`);
      const data = convertData(await response.json());
      return data;
    } catch (error) {
      let message = document.querySelector(".message");
      message.innerHTML = `${city} is not found`;
      window.location.reload();
      return null;
    }
  }

  return { getData };
})();

export default weather;