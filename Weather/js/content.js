import { capitalizeLetter, windDirection } from "./helper.js";

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
    const responseDate = document.createElement('li');  

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
    responseDate.classList.add('weather-info__list'); 

    temperature.textContent = Math.floor(data.main.temp); 
    
    description.textContent = capitalizeLetter(data.weather[0].description); 
    iconBloc.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    unit.textContent = '°'; 

    const createWeatherItemTitle = (text) => {
        const span = document.createElement('span'); 
        span.textContent = text; 

        return span; 
    }

    const createWeatherItemContent = (text) => {
        const p = document.createElement('p'); 
        p.textContent = text; 

        return p; 
    }

    weatherInfoWindSpeed.append(
        createWeatherItemTitle('Wind'),
        createWeatherItemContent(data.wind.speed + 'm/s, ' +  windDirection(data.wind.deg))
    )

    weatherInfoMinTemp.append(
        createWeatherItemTitle('Minimum temperature'),
        createWeatherItemContent(Math.round(data.main.temp_min) + 'C°')
    )

    weatherInfoMaxTemp.append(
        createWeatherItemTitle('Maximum temperature'),
        createWeatherItemContent(Math.round(data.main.temp_max) + 'C°')
    )
    
    weatherInfoRealFeel.append(
        createWeatherItemTitle('Feels like'),
        createWeatherItemContent(data.main.feels_like + 'C°')
    )

    weatherInfoHumidity.append(
        createWeatherItemTitle('Humidity'),
        createWeatherItemContent(data.main.humidity + '%')
    )

    weatherInfoPressure.append(
        createWeatherItemTitle('Pressure'),
        createWeatherItemContent(data.main.pressure + 'hPa')
    )

    //Unix time converter
    function unixConverter(data){
        let unix_timestamp = data; 
        var date = new Date(unix_timestamp * 1000); 
        var year = date.getFullYear(); 
        var month = date.getMonth(); 
        var day = date.getDay(); 
        var hours = date.getHours(); 
        var mins = "0" + date.getMinutes(); 
        var secs = "0" + date.getSeconds(); 
        var formattedTime = day + '/' + month + '/' + year + '.' + "\n" + hours + ':' + mins.substr(-2) + ':' + secs.substr(-2); 
        return formattedTime; 
    }

    responseDate.append(
        createWeatherItemTitle('Time of response'),
        createWeatherItemContent(unixConverter(data.dt))
    )
    


    main.append(section); 
    section.append(container); 
    container.append(inner, description, weatherInfo); 
    inner.append(iconBloc, temperature, unit); 
    weatherInfo.append(weatherInfoList); 
    weatherInfoList.append(
        weatherInfoWindSpeed,
        weatherInfoMinTemp,
        weatherInfoMaxTemp,
        weatherInfoRealFeel,
        weatherInfoHumidity,
        weatherInfoPressure,
        responseDate
    ); 

    return main; 
}