const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const weatherLocation = process.argv[2];

if (weatherLocation) {
  geocode(weatherLocation, (error, response) => {
    if (error) {
      console.log(error);
    }
    const { latitude, longitude, location } = response;
    forecast(latitude, longitude, (error, response) => {
      if (error) {
        console.log(error);
      }
      console.log(
        `It is currently ${
          response.currentTemperature
        } degrees out in ${location}s. There is ${
          response.chanceOfPrecipitation
        }% chance of rain.`
      );
    });
  });
} else {
  console.log("Please provide location to get weather");
}
