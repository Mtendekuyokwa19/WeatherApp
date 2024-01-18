/* eslint-disable no-unused-vars */

import "./style.css";
import magnifyinGlass from "./icons/search.svg";
import locationIcon from "./icons/Location.svg";
import weatherIcon from "./icons/Sun.svg";
import rain from "./icons/rain.svg"
import skyImg from "./imgs/sky.jpg";
import { GetTodayWeather } from "./fetch";
import { daysOfweek } from "./calender";
import { toogleAlgorithim } from "./toogle";

let createElement = (() => {
  class createElementtoDom {
    domElementCreator(
      type,
      newId,
      parentBox,
      Words = "",
      placeholderWords = "",
    ) {
      let newElement = document.createElement(type);
      newElement.id = newId;
      newElement.textContent = Words;
      newElement.placeholder = placeholderWords;
      parentBox.appendChild(newElement);

      return newElement;
    }
    ImageLoadtoDOm(Icon, parentBox, idName) {
      let myIcon = new Image();
      myIcon.src = Icon;
      myIcon.id = idName;
      parentBox.appendChild(myIcon);

      return myIcon;
    }
  }

  let domElementMaker = new createElementtoDom();

  return { domElementMaker };
})();

let createContainer = (() => {
  let allMaterialbox = createElement.domElementMaker.domElementCreator(
    "div",
    "allMaterialbox",
    document.body,
  );
  let searchBarDiv = createElement.domElementMaker.domElementCreator(
    "div",
    "searchBarDiv",
    allMaterialbox,
  );
  let weatherBoxdiv = createElement.domElementMaker.domElementCreator(
    "div",
    "weatherBoxdiv",
    allMaterialbox,
  );

  return { searchBarDiv, weatherBoxdiv };
})();

export let searchBarElementsHolder = (() => {
  let searchElementsBox = createElement.domElementMaker.domElementCreator(
    "div",
    "searchElementsBox",
    createContainer.searchBarDiv,
  );
  let searchInputElement = createElement.domElementMaker.domElementCreator(
    "input",
    "searchInputElement",
    searchElementsBox,
    undefined,
    "Search location....",
  );
  let findSearchButton = createElement.domElementMaker.domElementCreator(
    "button",
    "findSearchButton",
    searchElementsBox,
  );
  let magnifyingGlassIcon = createElement.domElementMaker.ImageLoadtoDOm(
    magnifyinGlass,
    findSearchButton,
    "magniftingGlassicon",
  );

  return {searchInputElement,findSearchButton}
})();

let WeatherBox = (() => {
  let weatherPictureDiv = createElement.domElementMaker.domElementCreator(
    "div",
    "weatherPicture",
    createContainer.weatherBoxdiv,
  );
  let skyPicture = createElement.domElementMaker.ImageLoadtoDOm(
    skyImg,
    weatherPictureDiv,
    "skyImg",
  );
  let overlayDiv = createElement.domElementMaker.domElementCreator(
    "div",
    "overlayDiv",
    weatherPictureDiv,
  );
  let weatherInformation = createElement.domElementMaker.domElementCreator(
    "div",
    "weatherInformation",
    createContainer.weatherBoxdiv,
  );

  return { overlayDiv,weatherInformation };
})();

export let TemperatureSetting = (() => {
  let dateLocationDiv = createElement.domElementMaker.domElementCreator(
    "div",
    "dateLocation",
    WeatherBox.overlayDiv,
  );
  let temperatureInfoDiv = createElement.domElementMaker.domElementCreator(
    "div",
    "temeperatureInfoDiv",
    WeatherBox.overlayDiv,
  );

  let Day = createElement.domElementMaker.domElementCreator(
    "p",
    "Day",
    dateLocationDiv,
    "Tuesday",
  );
  let Date = createElement.domElementMaker.domElementCreator(
    "p",
    "Date",
    dateLocationDiv,
    "22 Jun 2023",
  );

  let locationDiv = createElement.domElementMaker.domElementCreator(
    "div",
    "locationDiv",
    dateLocationDiv,
  );
  let location = createElement.domElementMaker.ImageLoadtoDOm(
    locationIcon,
    locationDiv,
    "locationIcon",
  );
  let locationDetails = createElement.domElementMaker.domElementCreator(
    "p",
    "locationDetails",
    locationDiv,
    "Lilongwe, Malawi",
  );

  let currentWeatherIcon = createElement.domElementMaker.ImageLoadtoDOm(
    weatherIcon,
    temperatureInfoDiv,
    "currentWeatherIcon",
  );
  let currentTemperature = createElement.domElementMaker.domElementCreator(
    "p",
    "currentTemperature",
    temperatureInfoDiv,
    "20 °C",
  );
  let typeOfweather = createElement.domElementMaker.domElementCreator(
    "p",
    "typeOfweather",
    temperatureInfoDiv,
    "Sunny",
  );

  return{typeOfweather,currentWeatherIcon,currentTemperature,locationDetails,Day}
})();

let weatherDetailsDivs=(()=>{

  let extraDetailsDiv=createElement.domElementMaker.domElementCreator("div","extraDetailsDiv",WeatherBox.weatherInformation)

  let dailyWeather=createElement.domElementMaker.domElementCreator("div","dailyWeather",WeatherBox.weatherInformation)

  let toogleWeatherDiv=createElement.domElementMaker.domElementCreator("div","toogleWeatherdiv",WeatherBox.weatherInformation)

return {extraDetailsDiv,dailyWeather,toogleWeatherDiv}
})()

let extraWetherDetails=(()=>{

  let PrecipitationDiv=createElement.domElementMaker.domElementCreator("div","PrecipitationDiv",weatherDetailsDivs.extraDetailsDiv)
  let HumidityDiv=createElement.domElementMaker.domElementCreator("div","HumidityDiv",weatherDetailsDivs.extraDetailsDiv)
  let WindDiv=createElement.domElementMaker.domElementCreator("div","windDiv",weatherDetailsDivs.extraDetailsDiv)

  let Precipitaion=createElement.domElementMaker.domElementCreator("p","Precipitation",PrecipitationDiv,"Precipitation")
  let PrecipitaionDetails=createElement.domElementMaker.domElementCreator("p","PrecipitationDetails",PrecipitationDiv,"0 mm")

  let Humidity=createElement.domElementMaker.domElementCreator("p","Humidity",HumidityDiv,"Humidty")
  let HumidityDetails=createElement.domElementMaker.domElementCreator("p","HumidityDetails",HumidityDiv,"18 mm")

  let Wind=createElement.domElementMaker.domElementCreator("p","wind",WindDiv,"Wind")
  let WindDetails=createElement.domElementMaker.domElementCreator("p","WindDetails",WindDiv,"3 km/h")


  return{PrecipitaionDetails,HumidityDetails,WindDetails}
})()

let dailyWeatherUpdates=(()=>{

  let updatesHolder=createElement.domElementMaker.domElementCreator("div","WeatherUpdateHolder",weatherDetailsDivs.dailyWeather)

  let TodayWeather=createElement.domElementMaker.domElementCreator("div","TodayWeather",updatesHolder)
  let TommorowWeather=createElement.domElementMaker.domElementCreator("div","TommorowWeather",updatesHolder)
  let TheNextWeather=createElement.domElementMaker.domElementCreator("div","TheNextWeather",updatesHolder)
  let TheOtherDayWeather=createElement.domElementMaker.domElementCreator("div","TheOtherDayWeather",updatesHolder)

  function placeDefaultWeather() {
    
let weatherbox=[TheOtherDayWeather,TheNextWeather,TommorowWeather,TodayWeather]
let DayWeather=["Tue","Wed","Thur","Fri"]
let index=3;
weatherbox.forEach(weatherbox => {

  let Rain=createElement.domElementMaker.ImageLoadtoDOm(rain,weatherbox,"Rain")
  let Day=createElement.domElementMaker.domElementCreator("p","dayOfWeather",weatherbox,DayWeather[index])
  let temperature=createElement.domElementMaker.domElementCreator("p","temperatureOfday",weatherbox,"30 °C")
  index--;
});
  }  
  placeDefaultWeather();

  
 return{TodayWeather}
})()

export let changeWeatherFormart=(()=>{

  let toogleButton=createElement.domElementMaker.domElementCreator("button","toogleButton",weatherDetailsDivs.toogleWeatherDiv,"To "+toogleAlgorithim.metric.weatherMetric)

return{toogleButton}
})()

export let updateWeatherDom=(()=>{
  let TodayWeatherIcon=document.querySelector('#TodayWeather img')
  let TodayWeatherDetails=document.querySelector('#TodayWeather p:last-child')

  function changeWeather(temperature,Precipitaion,Humidity,wind,feelsLike,icon) {
extraWetherDetails.PrecipitaionDetails.textContent=Precipitaion+" mm";
extraWetherDetails.HumidityDetails.textContent=Humidity+" mm";
extraWetherDetails.WindDetails.textContent=wind+" km/h";

TemperatureSetting.currentTemperature.textContent=temperature;
TemperatureSetting.typeOfweather.textContent=feelsLike;
TemperatureSetting.currentWeatherIcon.setAttribute("src",icon)

TodayWeatherIcon.setAttribute("src",icon)
TodayWeatherDetails.textContent=temperature

    
  }

  
return {changeWeather}
})()

export let locationManagement=(()=>{

  function currentPlace(city,country) {
    let location=document.querySelector('#locationDetails')
    location.textContent=city+", "+country
    
  }

return{currentPlace}
})()

let errorBox=(()=>{

  
})()

searchBarElementsHolder.findSearchButton.addEventListener('click',function () {
  GetTodayWeather.getWeather( searchBarElementsHolder.searchInputElement.value)
})

export let dialogBox=(()=>{
let dialog=createElement.domElementMaker.domElementCreator("dialog","errorBox",document.body)
let errorMessage=createElement.domElementMaker.domElementCreator("h4","errorBox",dialog,"Not Found")
let closeButton=createElement.domElementMaker.domElementCreator("button","closeButton",dialog,"close")
closeButton.addEventListener('click',closeModal)
function closeModal() {
  dialog.close()
  
}

function showBox() {
  dialog.showModal()
}

return {showBox}
})()
daysOfweek.DaysManagement()
daysOfweek.todayDate()
toogleAlgorithim.toogleMethod()