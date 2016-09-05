var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=351dee2c44e68c377a606a19c11681dd&&units=metric';

module.exports = {
  getTemp: function(location){ // DEPRECATED: simple mode (return only temperature as a number)
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( function( response ){
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, function( response ){
      throw new Error(response.data.message);
    });
  },
  
  getTempDetails: function(location){ // detailed mode (return object with temperature details )
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( function( response ){
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message);
      } else {
        return {
          temp: response.data.main.temp,
          shortDesc: response.data.weather[0].main,
          longDesc: response.data.weather[0].description,
          icon: response.data.weather[0].icon
        }
      }
    }, function( response ){
      throw new Error(response.data.message);
    });
  }
};
