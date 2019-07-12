const request = require("request");

function geocode(address, callback) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiY29kaW5nLWFwcHJlbnRpY2UiLCJhIjoiY2p4eWN0bGRrMDkxOTNidDN2ZmhqbWVycSJ9.dUPtIFK11J7hHTh0iXYzLQ`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      const [longitude, latitude] = response.body.features[0].center;
      const location = response.body.features[0].place_name;
      callback(undefined, { longitude, latitude, location });
    }
  });
}

module.exports = geocode;
