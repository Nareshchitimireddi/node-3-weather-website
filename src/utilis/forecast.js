const request = require("request");

const forecast = (lat, lon, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=metric&appid=78ad033916a97b6214f46a65719c0a1b";

  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("Unable to connect to weather service", undefined);
      } else if (body.cod) {
        callback("Unable to find location", undefined);
      } else {
        callback(
          undefined,
          body.daily[0].weather[0].description +
            " It is Currently " +
            body.current.temp +
            " Celsius. Feels like " +
            body.current.feels_like +
            " Celsius"
        );
      }
    }
  );
};

module.exports = forecast;
