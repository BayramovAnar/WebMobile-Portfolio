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
   

     

    header.append(headerContainer); 
    headerContainer.append(headerCity, headerUnit); 
    cityInner.append(cityChange, cityLocation); 
    headerCity.append(cityName, countryName, cityInner);
    headerUnit.append(unitC, unitF); 
    
    return header;
}