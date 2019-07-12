const request = require("request");
function forecast(latitude, longitude, callback) {
  const url = `https://api.darksky.net/forecast/8037eb6c0077e2bef458dad060641a03/${latitude},${longitude}`;
  request({ url: url, json: true }, function(error, response) {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      console.log("Unable to find location", undefined);
    } else {
      const currentTemperature = response.body.currently.temperature;
      const chanceOfPrecipitation = response.body.currently.precipProbability;
      callback(undefined, { currentTemperature, chanceOfPrecipitation });
    }
  });
}

module.exports = forecast;
