/* eslint-disable no-unused-vars */

import "./style.css";
import magnifyinGlass from "./icons/search.svg";
class createElementtoDom {
  domElementCreator(type, newId, parentBox, Words = "", placeholderWords = "") {
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

let createContainer = (() => {
  let allMaterialbox = domElementMaker.domElementCreator(
    "div",
    "allMaterialbox",
    document.body,
  );
  let searchBarDiv = domElementMaker.domElementCreator(
    "div",
    "searchBarDiv",
    allMaterialbox,
  );
  let weatherBoxdiv = domElementMaker.domElementCreator(
    "div",
    "weatherBoxdiv",
    allMaterialbox,
  );

  return { searchBarDiv, weatherBoxdiv };
})();

let searchBarElementsHolder = (() => {
  let searchElementsBox = domElementMaker.domElementCreator(
    "div",
    "searchElementsBox",
    createContainer.searchBarDiv,
  );
  let searchInputElement = domElementMaker.domElementCreator(
    "input",
    "searchInputElement",
    searchElementsBox,
    undefined,
    "Search location....",
  );
  let findSearchButton = domElementMaker.domElementCreator(
    "button",
    "findSearchButton",
    searchElementsBox,
  );
  let magnifyingGlassIcon = domElementMaker.ImageLoadtoDOm(
    magnifyinGlass,
    findSearchButton,
    "magniftingGlassicon",
  );
})();

let WeatherBox = (() => {
  let weatherInformation = domElementMaker.domElementCreator(
    "div",
    "weatherInformation",
    createContainer.weatherBoxdiv,
  );
  let weatherPictureDiv = domElementMaker.domElementCreator(
    "div",
    "weatherPicture",
    createContainer.weatherBoxdiv,
  );
})();
