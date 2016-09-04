var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleNewCity: function( location ){

    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temperature: temp
      });
    }, function(errorMessage){
      that.setState({
        isLoading: false,
        errorMessage: " " + errorMessage
      });
    });

  },
  render: function(){
    var {isLoading, temperature, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return (
          <h3 className="text-center">Fetching weather...</h3>
        )
      } else if(temperature && location){
        return (
          <WeatherMessage temperature={temperature} location={location}/>
        );
      }
    }

    function renderError(){
      if( typeof errorMessage === 'string' ){
        return (
          <ErrorModal errorText={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
