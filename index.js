import {cities} from '/data.js';


const pressBtn = document.getElementById('press-btn');
const restartBtn = document.getElementById('restart-btn');
const insertCity = document.getElementById('new-city-btn');
const submitBtn = document.getElementById('submit-btn');
const newCityForm = document.getElementById('new-city-form');
let citiesFirstFilter = [];
let citiesSecondFilter = [];
let citiesThirdFilter = [];
let citiesFourthFilter = [];
let citiesFifthFilter = [];
let citiesSixthFilter = [];
let citiesSeventhFilter = [];
const result = document.getElementById('result');



function emptyResult() {
  result.innerHTML = `<h1>Sorry, no results found</h1>`;
};

  pressBtn.addEventListener('click', capital);
   
  restartBtn.addEventListener('click', function(){
    const formCity = document.getElementById('form-city');
    formCity.reset();
    result.innerHTML = '';});
  
  insertCity.addEventListener('click', function(){
    newCityForm.classList.toggle('hidden');
  });

  submitBtn.addEventListener('click', function(e){
     e.preventDefault()
      const newCityEnter = new FormData(newCityForm);
      const newCityStatus = document.querySelector('input[name="status"]:checked');
      const cityName = newCityEnter.get('name-city');
      const cityCountry = newCityEnter.get('country-city');
      const cityStatus = newCityEnter.get(`"${newCityStatus.id}"`);
      console.log(cityName);
      console.log(cityCountry);
      console.log(cityStatus);
  });

function capital(){
  const capitalRadio = document.getElementById('capital');
  if (capitalRadio.checked) {
    citiesFirstFilter = cities.filter(function(city) {
      return city.isCapital === true || city.isCapital === "yes"});
      }else{
        citiesFirstFilter = cities;
      }
      language();
};

function language(){
  const languageRadio = document.getElementById('language');
  if (languageRadio.checked) {
    citiesSecondFilter = citiesFirstFilter.filter(function(city) {
      return city.isEnglishMainLanguage === true || city.isEnglishMainLanguage === "yes"});
      }else{
        citiesSecondFilter = citiesFirstFilter;
      }
      romantic();
};

function romantic(){
  const romanticRadio = document.getElementById('romantic');
  if(citiesSecondFilter.length > 0){
    if (romanticRadio.checked) {
        citiesThirdFilter = citiesSecondFilter.filter(function(city) {
        return city.isRomantic === true || city.isRomantic === "yes"});
    }else {
          citiesThirdFilter = citiesSecondFilter;
        } 
        modern();
  }else{
    emptyResult();
  }
};

function modern(){
  const modernRadio = document.getElementById('modern');
  if(citiesThirdFilter.length > 0){
    if (modernRadio.checked) {
      citiesFourthFilter = citiesThirdFilter.filter(function(city) {
        return city.isModern === true || city.isModern === "yes"});
    }else{
          citiesFourthFilter = citiesThirdFilter;
        }
        onTheCoast();
  }else{
    emptyResult();
  }
};

function onTheCoast(){
  const onTheCoastRadio = document.getElementById('on-the-coast');
  if(citiesFourthFilter.length > 0){
    if (onTheCoastRadio.checked) {
      citiesFifthFilter = citiesFourthFilter.filter(function(city) {
        return city.isOnTheCoast === true || city.isOnTheCoast === "yes"});
        }else{
          citiesFifthFilter = citiesFourthFilter;
        }
        temperature();
  }
  else{
    emptyResult();
  }
};

 function temperature(){
  const checkedTemperature = document.querySelector('input[name="weather"]:checked');
  if(citiesFifthFilter.length > 0){
    if(checkedTemperature){
      citiesSixthFilter = citiesFifthFilter.filter(function(city) {
        return city.temperature === checkedTemperature.id});
    }
    else{
      citiesSixthFilter = citiesFifthFilter;
    }
    size();
  }
  else{
    emptyResult();
  }
};

function size(){
  const checkedSize = document.querySelector('input[name="size"]:checked');
  if(citiesSixthFilter.length > 0){
    if(checkedSize){
      citiesSeventhFilter = citiesSixthFilter.filter(function(city) {
        return city.size === checkedSize.id});
    }
    else{
      citiesSeventhFilter = citiesSixthFilter;
    }
    render();
  }else{
    emptyResult();
  }
};

function render(){
  if(citiesSeventhFilter.length > 0){
    if(citiesSeventhFilter.length > 1){
      const randomNumber = Math.floor(Math.random() * citiesSeventhFilter.length);
      result.innerHTML = `<h1>${citiesSeventhFilter[randomNumber].name}</h1>`;
      console.log(citiesSeventhFilter[randomNumber]);
    } 
    else{
      result.innerHTML = `<h1>${citiesSeventhFilter[0].name}</h1>`;
      console.log(citiesSeventhFilter[0]);
    }
  }
  else{
    emptyResult();
  }
};