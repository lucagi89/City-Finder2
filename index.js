import {cities} from '/data.js';


const findCityBtn = document.getElementById('press-btn');
const restartBtn = document.getElementById('restart-btn');
const insertNewCity = document.getElementById('new-city-btn');
const submitBtn = document.getElementById('submit-btn');
const newCityForm = document.getElementById('new-city-form');
const result = document.getElementById('result');
let citiesFirstFilter = [];
let citiesSecondFilter = [];
let citiesThirdFilter = [];
let citiesFourthFilter = [];
let citiesFifthFilter = [];
let citiesSixthFilter = [];
let citiesSeventhFilter = [];


 submitBtn.addEventListener('click', addNewCity);

function addNewCity(e){
  e.preventDefault()
  let newCityObj = {};

   if (!document.querySelector('input:checked')) {
     alert('Please, fill in all the fields');
   }
   else{
   const newCityEnter = new FormData(newCityForm);
   const cityName = newCityEnter.get('name-city');
   const cityCountry = newCityEnter.get('country-city');
   const cityStatus = document.querySelector('input[name="status"]:checked').value;
   const cityLanguage = document.querySelector('input[name="english"]:checked').value;
   const cityRomance = document.querySelector('input[name="romance"]:checked').value;
   const cityModernity = document.querySelector('input[name="modernity"]:checked').value;
   const cityOnTheCoast = document.querySelector('input[name="coast"]:checked').value;
   const cityTemperature = document.querySelector('input[name="temp"]:checked').value;
   const citySize = document.querySelector('input[name="measure"]:checked').value;

   cities.push({
     name: cityName,
     state: cityCountry,
     isCapital: cityStatus,
     alt: cityName,
     isOnTheCoast: cityOnTheCoast,
     isRomantic: cityRomance,
     isModern: cityModernity,
     size: citySize,
     isEnglishMainLanguage: cityLanguage,
     temperature: cityTemperature
     });
 
   }
   newCityForm.classList.toggle('hidden');
   newCityForm.reset();
   return cities;


};


insertNewCity.addEventListener('click', function(){
    newCityForm.classList.toggle('hidden');
  });

function emptyResult() {
  result.innerHTML = `<h1>Sorry, no results found</h1>`;
};

 findCityBtn.addEventListener('click', function(){
    if (!document.querySelector('input:checked')) {
      alert('Please, fill in at least some of the fields');
    }
    else{
    capital();
    }});
   
  restartBtn.addEventListener('click', function(){
    const formCity = document.getElementById('form-city');
    formCity.reset();
    result.innerHTML = '';});
  
 

 

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
    } 
    else{
      result.innerHTML = `<h1>${citiesSeventhFilter[0].name}</h1>`;
    }
  }
  else{
    emptyResult();
  }
};