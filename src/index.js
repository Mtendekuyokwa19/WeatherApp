/* eslint-disable no-unused-vars */

import "./style.css";
import magnifyinGlass from "./icons/search.svg";
import locationIcon from "./icons/Location.svg";
import weatherIcon from "./icons/Sun.svg";
import skyImg from "./imgs/sky.jpg";

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

let searchBarElementsHolder = (() => {
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

  return { overlayDiv };
})();

let TemperatureSetting = (() => {
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
    "Lilongwe, MW",
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
})();
