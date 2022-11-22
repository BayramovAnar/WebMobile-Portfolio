import { getWeatherData } from "./api.js";
import { createContent } from "./content.js";
import { createHeader } from "./header.js";

const app = async () => {
    //const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Washington'); // by default
    const weather = await getWeatherData('Washington'); // by default
    const header = createHeader(weather.name); 
    const content = createContent(weather);
    document.body.append(header, content); 

    console.log(weather); 
}

app(); 


//TODO: 1.User input for longitude and latitude to get the weather 
//TODO: 2.Display country alongside city 