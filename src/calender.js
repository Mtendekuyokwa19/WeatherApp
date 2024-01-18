/* eslint-disable no-unused-vars */
import {
  format,
  formatDistance,
  formatRelative,
  subDays,
  addDays,
  parseISO,
} from "date-fns";
import { TemperatureSetting } from ".";

export let daysOfweek = (() => {
  function DaysManagement() {
    let currentDay = format(new Date(), "eeee");
    TemperatureSetting.Day.textContent = currentDay;

    let today = document.querySelector("#TodayWeather :nth-child(2)");
    today.textContent = currentDay.split("").splice(0, 3).join("").toString();

    let tommorow = format(addDays(new Date(), 1), "eeee");
    let tommorowDom = document.querySelector("#TommorowWeather :nth-child(2)");

    tommorowDom.textContent = tommorow
      .split("")
      .splice(0, 3)
      .join("")
      .toString();

    let theNextDay = format(addDays(new Date(), 2), "eeee");
    let theNextdayDom = document.querySelector("#TheNextWeather :nth-child(2)");

    theNextdayDom.textContent = theNextDay
      .split("")
      .splice(0, 3)
      .join("")
      .toString();

    let theOtherday = format(addDays(new Date(), 3), "eeee");
    let theOtherdayDom = document.querySelector(
      "#TheOtherDayWeather :nth-child(2)",
    );
    theOtherdayDom.textContent = theOtherday.split("").splice(0, 3).join("");
  }

  function todayDate() {
    let date = document.querySelector("#Date");
    date.textContent = format(new Date(), "dd MMM yyyy");
  }

  return { DaysManagement, todayDate };
})();
