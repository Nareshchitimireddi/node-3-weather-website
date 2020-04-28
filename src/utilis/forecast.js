const request = require("request");

const forecast = (lat, lon, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=metric&appid=78ad033916a97b6214f46a65719c0a1b";

  console.log(url);
  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("Unable to connect to weather service", undefined);
      } else if (body.message) {
        callback("Unable to find location", undefined);
      } else {
        callback(
          undefined,
          body.weather[0].description +
            " It is Currently " +
            body.main.temp +
            " Celsius. Feels like " +
            body.main.feels_like +
            " Celsius." +
            " With wind speed of " +
            body.wind.speed +
            " km/h"
        );
      }
    }
  );
};

module.exports = forecast;
