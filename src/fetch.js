
/* eslint-disable no-unused-vars */
import { dialogBox, searchBarElementsHolder } from "./index.js";
import { updateWeatherDom } from "./index.js";
import { locationManagement } from "./index.js";
import { toogleAlgorithim } from "./toogle.js";

export let GetTodayWeather = (() => {
  let location = {
    place: "Lilongwe",
  };

  async function getWeather(place) {
    try {
      let location = new Request(
        `https://api.weatherapi.com/v1/current.json?key=89141f0601c84bb090f73728241601&q=${place}`,
      );

      let WeatherOfplace = await fetch(location);
      let weatherUpdate = await WeatherOfplace.json();
      UpdateEntries(weatherUpdate);

      DailyWeather.getDailyWeather();
    } catch (error) {
      dialogBox.showBox();
    }
  }

  function updateWeather(value) {
    
    let temperature;
    toogleAlgorithim.metric.weatherMetric === "celcius"
      ? (temperature = value.current.temp_f + " °F")
      : (temperature = value.current.temp_c + " °C");

    updateWeatherDom.changeWeather(
      temperature,
      value.current.precip_mm,
      value.current.humidity,
      value.current.wind_kph,
      value.current.condition.text,
      value.current.condition.icon,
    );
  }

  function UpdateEntries(value) {
    updateWeather(value);
    locationUpdate(value);
  }

  function locationUpdate(value) {
    locationManagement.currentPlace(
      value.location.name,
      value.location.country,
    );
    location.place = value.location.name;
  }

  return { getWeather, location };
})();

export let DailyWeather = (() => {
  async function getDailyWeather() {
    let place = GetTodayWeather.location.place;
    let location = new Request(
      `http://api.weatherapi.com/v1/forecast.json?key=89141f0601c84bb090f73728241601&q=${place}&days=4&aqi=no&alerts=no`,
    );
    let WeatherOfplace = await fetch(location);
    let weatherUpdate = WeatherOfplace.json();
    weatherUpdate.then((resolve) => {
      updateDailyWeather(resolve);
    });

    return weatherUpdate;
  }

  function updateDailyWeather({ forecast }) {
    let tommorow = document.querySelector("#TommorowWeather :nth-child(3)");
    let tommorowIcon = document.querySelector("#TommorowWeather :nth-child(1)");

    let theNextDay = document.querySelector("#TheNextWeather :nth-child(3");
    let theNextDayIcon = document.querySelector("#TheNextWeather :nth-child(1");

    let theOtherday = document.querySelector(
      "#TheOtherDayWeather :nth-child(3)",
    );
    let theOtherdayIcon = document.querySelector(
      "#TheOtherDayWeather :nth-child(1)",
    );

    let icons = [tommorowIcon, theNextDayIcon, theOtherdayIcon];
    let temperatures = [tommorow, theNextDay, theOtherday];
    dailyWeatherUpdates(icons, temperatures, forecast);
  }

  function dailyWeatherUpdates(icons, temperatures, forecast) {
    for (let i = 0; i < icons.length; i++) {
      if (toogleAlgorithim.metric.weatherMetric === "celcius") {
        temperatures[i].textContent =
          forecast.forecastday[i].day.avgtemp_f + " °F";
      } else {
        temperatures[i].textContent =
          forecast.forecastday[i].day.avgtemp_c + " °C";
      }

      icons[i].setAttribute("src", forecast.forecastday[i].day.condition.icon);
    }
  }

  return { getDailyWeather };
})();
