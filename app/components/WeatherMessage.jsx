var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     return (
//       <h4>Weather in {this.props.location} is {this.props.temperature}</h4>
//     );
//   }
// });


// destructuring straight in params
var WeatherMessage = ({temperature, location}) => (
  <h3 className="text-center">Weather in {location} is {temperature}</h3>
);


module.exports = WeatherMessage;
