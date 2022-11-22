import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";
import { currentGeolocationWeather } from "./location.js";

//func to display the header info
export const createHeader = (city) => {
    const header = document.createElement('header'); 
    const headerContainer = document.createElement('div'); 
    const headerCity = document.createElement('div'); 
    const headerCountry = document.createElement('div'); 
    const headerUnit = document.createElement('div'); 

    const cityChange = document.createElement('button'); 
    const cityLocation = document.createElement('button'); 
    const cityName = document.createElement('h1'); 
    const countryName = document.createElement('h1'); 

    const unitC = document.createElement('button'); 
    const unitF = document.createElement('button'); 

    const cityInner = document.createElement('div'); 
    const searchBlock = document.createElement('div'); 
    const searchInput = document.createElement('input'); 
    const searchBtn = document.createElement('button'); 
    const errBlock = document.createElement('p'); 

    header.classList.add('header'); 
    headerContainer.classList.add('container', 'header__container'); 
    headerCity.classList.add('header__city'); 
    headerCountry.classList.add('header__country'); 
    headerUnit.classList.add('header__unit'); 

    cityChange.classList.add('city__change', 'btn-reset'); 
    cityLocation.classList.add('city__location', 'btn-reset'); 
    cityName.classList.add('city__name'); 
    countryName.classList.add('country__name'); 
    cityInner.classList.add('city__inner'); 

    unitC.classList.add('unit__c', 'btn-reset', 'unit-current'); 
    unitF.classList.add('unit__f', 'btn-reset'); 

    searchBlock.classList.add('search'); 
    searchInput.classList.add('search_input'); 
    searchBtn.classList.add('search_btn'); 
    errBlock.classList.add('search__error'); 

    searchBtn.textContent = 'OK'; 
    cityName.textContent = city; 
    //countryName.textContent = 'AZ';
    //countryName.textContent = country.data.sys.country.description; 
    cityChange.textContent = 'Change city';
    cityLocation.textContent = 'Current location';

    unitC.textContent = 'C°'; 
    unitF.textContent = 'F°'; 

    cityLocation.addEventListener('click', currentGeolocationWeather); 
   
    cityChange.addEventListener('click', () => {
        headerCity.innerHTML = ''; 
        searchBlock.append(searchInput, searchBtn, errBlock); 
        headerCity.append(searchBlock); 
    }); 

    const showError = (message) =>{
        errBlock.classList.add('show__error'); 
        errBlock.textContent = message; 
    }

     searchBtn.addEventListener('click', async () => {
        if(!searchInput.value){
            return showError("Please enter a city"); 
        }
        try {
            const weather = await getWeatherData(searchInput.value); 
            console.log(weather); 
            if(weather.message){
                showError(weather.message); 
                return; 
            }
            resetWeatherContent(weather.name, weather); 
        } catch (error) {
           console.log(error); 
        }
     }); 

     window.addEventListener('click', (e) =>{
        if(e.target == searchInput || e.target == searchBtn || e.target == cityChange){
            return; 
        }else{
            headerCity.innerHTML = ''; 
            errBlock.classList.remove('show__error'); 
            headerCity.append(cityName, cityInner); 
        }
     }); 


    header.append(headerContainer); 
    headerContainer.append(headerCity, headerUnit); 
    cityInner.append(cityChange, cityLocation); 
    headerCity.append(cityName, countryName, cityInner);
    headerUnit.append(unitC, unitF); 
    
    return header;
}