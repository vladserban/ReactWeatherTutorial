var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     return (
//       <h4>Weather in {this.props.location} is {this.props.temperature}</h4>
//     );
//   }
// });


// destructuring straight in params
var WeatherMessage = ({temperature, temperatureDetails, location}) => {
  var iconUrl = 'http://openweathermap.org/img/w/' + temperatureDetails.icon + '.png';

  return (
    <div>
      <h3 className="text-center">{temperatureDetails.shortDesc} in {location} with {temperature}&deg;</h3>
      <p className="text-center">
        <img src={iconUrl} style={{width: '50px', height: '50px'}}/>
        <br />
        {temperatureDetails.longDesc}
      </p>
    </div>
  );
};


module.exports = WeatherMessage;
