import { GetTodayWeather } from "./fetch";

/* eslint-disable no-unused-vars */
export let toogleAlgorithim = (() => {
  let metric = {
    weatherMetric: "Fahrenheit",
  };

  function toogleMetric(toogleButton) {
    if (metric.weatherMetric === "celcius") {
      metric.weatherMetric = "Fahrenheit";
    } else {
      metric.weatherMetric = "celcius";
    }
  }

  function updateButtoncontent(toogleButton) {
    toogleButton.textContent = `To ${metric.weatherMetric}`;
    console.log(toogleButton.textContent);
  }

  function toogleMethod() {
    let toogle = document.querySelector("#toogleButton");
    toogle.addEventListener("click", function () {
      toogleMetric(toogle);
      updateButtoncontent(toogle);
      GetTodayWeather.getWeather(GetTodayWeather.location.place);
    });
  }

  return { metric, toogleMethod };
})();
