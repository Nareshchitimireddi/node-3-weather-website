const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibmFyZXNoY2giLCJhIjoiY2s5Z2t4OXBsMGx5djNtand6a2txdnp4OCJ9.bZ9yrX1tWZC4et06pRlXSg&limit=1";

  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("Unable to connect to location services", undefined);
      } else if (body.features.length === 0) {
        callback("Unable to find location,Try another search", undefined);
      } else {
        callback(undefined, {
          latitute: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name,
        });
      }
    }
  );
};

module.exports = geocode;
