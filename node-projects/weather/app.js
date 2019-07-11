const request = require("request");
// const url =
//   "https://api.darksky.net/forecast/8037eb6c0077e2bef458dad060641a03/37.8267,-122.4233";

// request({ url: url, json: true }, function(error, response) {
//   if (error) {
//     console.log("There was an error");
//   } else {
//     const currentTemperature = response.body.currently.temperature;
//     const chanceOfPrecipitation = response.body.currently.precipProbability;
//     console.log(
//       `It is currently ${currentTemperature} degrees out. There is ${chanceOfPrecipitation}% chance of rain.`
//     );
//   }
// });

const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/json?access_token=pk.eyJ1IjoiY29kaW5nLWFwcHJlbnRpY2UiLCJhIjoiY2p4eWN0bGRrMDkxOTNidDN2ZmhqbWVycSJ9.dUPtIFK11J7hHTh0iXYzLQ";
request({ url: url, json: true }, (error, response) => {
  // if (error) {
  //   console.log("Unable to connect to location services");
  // } else if (response.body.features.length === 0) {
  //   console.log("There was an error in the site server");
  // } else {
  //   const [longitude, latitude] = response.body.features[0].center;
  //   console.log(`Latitude: ${latitude}`);
  //   console.log(`Longitude: ${longitude}`);
  // }

  if (error) {
    console.log("Unable to connect to location services");
  } else {
    try {
      const [longitude, latitude] = response.body.features[0].center;
      console.log(`Latitude: ${latitude}`);
      console.log(`Longitude: ${longitude}`);
    } catch (error) {
      console.log("There was a service error");
    }
  }
});

function add(num1, num2, callback) {
  setTimeout(() => {
    const sum = num1 + num2;
    callback(sum);
  }, 2000);
}

add(3, 10, sum => {
  console.log("Sum", sum);
});
