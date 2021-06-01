import _ from 'lodash';
import './style.css';
import weather from './api';
import view from './display';


const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".btn");

searchForm.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
        document.querySelector(".btn").click();
    }
});

searchBtn.addEventListener("click", async () => {
    if (searchInput.value === "") return;
    const weatherData = await weather.getData(searchInput.value);
    view.setSearchResult(weatherData);
});