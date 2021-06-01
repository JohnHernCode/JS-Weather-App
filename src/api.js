const weather = (() => {
    function convertData(data) {
        const {
            name: city,
            main: { temp, humidity },
            wind: { speed },
        } = data;
        return { city, temp, humidity, speed };
    }

    async function getData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=7e80b833710868e5ad24105caf405553`;
        try {
            const response = await fetch(
                url,
                { mode: 'cors' }
            );
            if (!response.ok) throw new Error(`City ${city} not found`);
            const data = convertData(await response.json());
            return data;
        } catch (error) {
            alert(error);
            return null;
        }
    }
    return { getData };
})();

export default weather;