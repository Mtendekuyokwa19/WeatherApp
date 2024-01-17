/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
import { searchBarElementsHolder } from "./index.js";
import { updateWeatherDom } from "./index.js";

export let GetTodayWeather=(()=>{


    async function getWeather() {
        let place=searchBarElementsHolder.searchInputElement.value;
        let location=new Request(`https://api.weatherapi.com/v1/current.json?key=89141f0601c84bb090f73728241601&q=${place}`)
        let WeatherOfplace= await fetch(location)
        let weatherUpdate=WeatherOfplace.json()
  weatherUpdate.then((resolve)=>{
    updateWeather(resolve);
    console.log(resolve)
  })
        return weatherUpdate;
    }

    function updateWeather(value) {
       
    //  (value.current.temp_c,value.current.last_updated,value.current.condition.text,value.location.name,value.current.condition.icon)
        
     updateWeatherDom.changeWeather(value.current.temp_c,value.current.precip_mm,value.current.humidity,value.current.wind_kph,value.current.condition.text,value.current.condition.icon)

        
    }

 
    
return {getWeather}
})()