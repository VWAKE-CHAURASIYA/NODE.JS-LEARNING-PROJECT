//!IMPORT OUR REQUIED FIES:
import readline from 'readline/promises';   //USING READLINE MODULE,WITH PROMISES WE CREATE INTERFACE THAT ARE USED TO READ &WRITE CLI

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout,
})

//! FETCHING API FROM: OPENWEATHERMAP API DETAILS:
const Api_key = '27cfc8d0c4b8df5f08069ec450b5cff7';
const Base_Url = `https://api.openweathermap.org/data/2.5/weather`

//!step-2. NOW WE NEED TO DEFINE THE FUNCTION, WHICH RETURN WEAHTER INFO, BASED ON USER REQUEST.
const getWeather= async(city)=>
{
// HERE WE NEED TO DEFINE THE BASEURL FIRST THAN THE QUERY STRING THAT CONTAINS THE CITYNAME,AND APIKEY:
    const url = `${Base_Url}?q=${city}&appid=${Api_key}&units=metric`;
    try {
        const res = await fetch(url)
        if(!res.ok)
        {
            throw new Error("City Not Found...");
        }
        const weatherData = await res.json();      // WE NEED TO PARSE DATA HERE ,TO GET DATA ON CONSOLE IN OBJECT TYPE.

        // NOW WE NEED TO RETURN ALL THE WEATHER INFO HERE, THAT DISPLAY ON CLI.
        console.log('\n Weather Information:');
        console.log(`city: ${weatherData.name}`)
        console.log(`Temperature: ${weatherData.main.temp}🌡️C`);
        console.log(`Description: ${weatherData.weather[0].description}`)
        console.log(`Humidity: ${weatherData.main.humidity}`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s \n`);   
    } catch (error) {
        console.log(error)   
    }
}
//! step-1. USING PROMISES WE ASK QUESTION USING ASYN AWAIT.
const city = await rl.question("Enter the City Name to Get the Weather Information: ");
await getWeather(city);               // WHEN USER GIVE REQUEST, WE NEED TO RESPONSE IT AS FUNCTION, THAT RETURN RESULT.
rl.close();                           //ONCE USER GET DATA, CLOSE THE INTERFACE.
