var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleNewCity: function( location ){

    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temperature: temp
      });
    }, function(errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    });

  },
  render: function(){
    var {isLoading, temperature, location} = this.state;

    function renderMessage(){
      if(isLoading){
        return (
          <h3>Fetching weather...</h3>
        )
      } else if(temperature && location){
        return (
          <WeatherMessage temperature={temperature} location={location}/>
        );
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
