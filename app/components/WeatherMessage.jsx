var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     return (
//       <h4>Weather in {this.props.location} is {this.props.temperature}</h4>
//     );
//   }
// });


// destructuring straight in params
var WeatherMessage = ({temp, location}) => (
  <h4>Weather in {location} is {temperature}</h4>
);


module.exports = WeatherMessage;
