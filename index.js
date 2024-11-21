/*
1 meter = 3,281 feet / 1 feet = 0,3048 meters --> length 
1 liter = 0,264 gallon / 1 gallon = 3,7854 liter --> volume
1 kilogram = 2,204 pound / 1 pound = 0,4536 kilogram --> mass
*/

//$ Converting

const convertBtn = document.getElementById("convert-btn");
const inputNum = document.getElementById("input-num");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

let value = "";

inputNum.addEventListener("input", (e) => {
  value = e.target.value;
});

convertBtn.addEventListener("click", () => {
  length.textContent = `${value} meters = ${(value * 3.281).toFixed(
    3
  )} feet | ${value} feet = ${(value * 0.3048).toFixed(3)} meters`;

  volume.textContent = `${value} liters = ${(value * 0.264).toFixed(
    3
  )} gallons | ${value} gallons = ${(value * 3.7854).toFixed(3)} liters`;

  mass.textContent = `${value} kilos = ${(value * 2.204).toFixed(
    3
  )} pounds | ${value} pounds = ${(value * 0.4536).toFixed(3)} kilos`;
});

//? Dark Theme

const themeBtn = document.querySelector("nav button");
const themeBtnIco = document.querySelector("button i");
const body = document.querySelector("body");
const mainContent = document.querySelector("main-content");
const mainCard = document.querySelectorAll(".main-card");
const mainCardText = document.querySelectorAll(".main-card-text");

themeBtn.addEventListener("click", () => {
  if (themeBtn.classList.contains("dark-btn")) {
    //? Button
    themeBtn.classList.remove("dark-btn");
    themeBtn.classList.add("light-btn");
    //? Button Icon
    themeBtnIco.classList.remove(...themeBtnIco.classList);
    themeBtnIco.classList.add("fa-regular", "fa-lightbulb");
    //? body, mainContent, mainCard, mainCardText
    body.classList.add("dark-body");
    mainContent.classList.add("dark-main-content");
    mainCard.forEach((card) => card.classList.add("dark-main-card"));
    mainCardText.forEach((text) => text.classList.add("dark-main-card-text"));
  } else {
    //? Button
    themeBtn.classList.remove("light-btn");
    themeBtn.classList.add("dark-btn");
    //? Button Icon
    themeBtnIco.classList.remove(...themeBtnIco.classList);
    themeBtnIco.classList.add("fa-regular", "fa-moon");
    //? body, mainContent, mainCard, mainCardText
    body.classList.remove("dark-body");
    mainContent.classList.remove("dark-main-content");
    mainCard.forEach((card) => card.classList.remove("dark-main-card"));
    mainCardText.forEach((text) =>
      text.classList.remove("dark-main-card-text")
    );
  }
});
