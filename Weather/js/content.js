export const createContent = (data) => {
    const main = document.createElement('main'); 
    const section = document.createElement('section'); 
    const container = document.createElement('div'); 
    const inner = document.createElement('div'); 
    const iconBloc = document.createElement('img'); 
    const temperature = document.createElement('h2'); 
    const unit = document.createElement('span'); 
    const description = document.createElement('p'); 

    const weatherInfo = document.createElement('div'); 
    const weatherInfoList = document.createElement('ul'); 
    const weatherInfoMinTemp = document.createElement('li'); 
    const weatherInfoMaxTemp = document.createElement('li'); 
    const weatherInfoRealFeel = document.createElement('li'); 
    const weatherInfoHumidity = document.createElement('li');
    const weatherInfoPressure = document.createElement('li');  
    const weatherInfoWindSpeed = document.createElement('li'); 

    section.classList.add('weather'); 
    container.classList.add('container', 'weather__container'); 
    inner.classList.add('weather__inner'); 
    iconBloc.classList.add('weather__icon'); 
    temperature.classList.add('weather__temperature'); 
    unit.classList.add('weather__unit'); 
    description.classList.add('weather__description'); 
    weatherInfo.classList.add('weather-info'); 
    weatherInfoList.classList.add('weather-info__list'); 
    weatherInfoMinTemp.classList.add('weather-info__list'); 
    weatherInfoMaxTemp.classList.add('weather-info__list');
    weatherInfoRealFeel.classList.add('weather-info__list');
    weatherInfoHumidity.classList.add('weather-info__list');
    weatherInfoPressure.classList.add('weather-info__list');
    weatherInfoWindSpeed.classList.add('weather-info__list');

    temperature.textContent = Math.floor(data.main.temp); 
    description.textContent = data.weather[0].description; 
    iconBloc.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    unit.textContent = '°'; 

    

    main.append(section); 
    section.append(container); 
    container.append(inner, description, weatherInfo); 
    inner.append(iconBloc, temperature, unit); 
    weatherInfo.append(weatherInfoList); 
    weatherInfoList.append(
        weatherInfoMinTemp,
        weatherInfoMaxTemp,
        weatherInfoRealFeel,
        weatherInfoHumidity,
        weatherInfoPressure,
        weatherInfoWindSpeed
    ); 

    return main; 
}