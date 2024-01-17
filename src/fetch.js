/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
import { searchBarElementsHolder } from "./index.js";
import { updateWeatherDom } from "./index.js";
import { locationManagement } from "./index.js";

export let GetTodayWeather=(()=>{


    async function getWeather() {
        let place=searchBarElementsHolder.searchInputElement.value;
        let location=new Request(`https://api.weatherapi.com/v1/current.json?key=89141f0601c84bb090f73728241601&q=${place}`)
        let WeatherOfplace= await fetch(location)
        let weatherUpdate=WeatherOfplace.json()
        
  weatherUpdate.then((resolve)=>{
   UpdateEntries(resolve)
      })

      DailyWeather.getDailyWeather()
        return weatherUpdate;
    }

    function updateWeather(value) {
       
    //  (value.current.temp_c,value.current.last_updated,value.current.condition.text,value.location.name,value.current.condition.icon)
        
     updateWeatherDom.changeWeather(value.current.temp_c,value.current.precip_mm,value.current.humidity,value.current.wind_kph,value.current.condition.text,value.current.condition.icon)
      
        
    }

    function UpdateEntries(value) {
      updateWeather(value);
locationUpdate(value)
    }

    function locationUpdate(value) {
      locationManagement.currentPlace(value.location.name,value.location.country)
      
    }

 
    
return {getWeather}
})()

export let DailyWeather=(()=>{

  async function getDailyWeather() {
    let place=searchBarElementsHolder.searchInputElement.value;
    let location=new Request(`http://api.weatherapi.com/v1/forecast.json?key=89141f0601c84bb090f73728241601&q=${place}&days=4&aqi=no&alerts=no`)
    let WeatherOfplace= await fetch(location)
    let weatherUpdate=WeatherOfplace.json()
    weatherUpdate.then((resolve)=>{
     updateDailyWeather(resolve)

    })
   
    return weatherUpdate;
}

function updateDailyWeather({forecast}) {
  let tommorow=document.querySelector('#TommorowWeather :nth-child(3)')
 let tommorowIcon=document.querySelector('#TommorowWeather :nth-child(1)')

 let theNextDay=document.querySelector("#TheNextWeather :nth-child(3")
 let theNextDayIcon=document.querySelector("#TheNextWeather :nth-child(1")

 let theOtherday=document.querySelector("#TheOtherDayWeather :nth-child(3)")
 let theOtherdayIcon=document.querySelector("#TheOtherDayWeather :nth-child(1)")

 let icons=[tommorowIcon,theNextDayIcon,theOtherdayIcon]
 let temperatures=[tommorow,theNextDay,theOtherday]

 for (let i = 0; i < icons.length; i++) {
  temperatures[i].textContent=forecast.forecastday[1].day.avgtemp_c
  icons[i].setAttribute("src",forecast.forecastday[1].day.condition.icon)
  
 }

  
}

return {getDailyWeather}
})()