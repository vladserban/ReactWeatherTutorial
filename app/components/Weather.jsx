var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var RecentLocation = require('RecentLocation');

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false, recentLocations: []}
    },
    componentDidMount: function() {
        var locationParam = this.props.location.query.location;

        if (locationParam && locationParam.length > 0) {
            this.handleNewCity(locationParam);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps) {
        var locationParam = newProps.location.query.location;

        if (locationParam && locationParam.length > 0) {
            this.handleNewCity(locationParam);
            window.location.hash = '#/';
        }
    },
    handleNewCity: function(location) {

        var that = this;

        this.setState({isLoading: true, errorMessage: undefined, location: undefined, temperature: undefined, temperatureDetails: undefined});

        // using detailed function of API call
        openWeatherMap.getTempDetails(location).then(function(tempDetails) {

            var newRecentLocations = that.state.recentLocations;
            newRecentLocations.unshift({location: location, temperatureDetails: tempDetails});

            that.setState({isLoading: false, location: location, temperature: tempDetails.temp, temperatureDetails: tempDetails, recentLocations: newRecentLocations});
        }, function(errorMessage) {
            that.setState({
                isLoading: false,
                errorMessage: " " + errorMessage
            });
        });

    },
    render: function() {
        var {isLoading, temperature, temperatureDetails, location, errorMessage} = this.state;
        function renderMessage() {
            if (isLoading) {
                return (
                  <div>
                    <h3 className="text-center">Fetching weather...</h3>
                    <span style={{display: 'block', height:'50px'}}>&nbsp;</span>
                    <p>&nbsp;</p>
                  </div>
                )
            } else if (temperature && location) {
                return (<WeatherMessage temperature={temperature} temperatureDetails={temperatureDetails} location={location}/>);
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (<ErrorModal errorText={errorMessage}/>)
            }
        }

        function renderRecentRows(recentLocations) {
            return recentLocations.map((rl, i) => <RecentLocation key={i + 1} location={rl.location} temperatureDetails={rl.temperatureDetails}/>);
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onNewCity={this.handleNewCity}/>
                {renderMessage()}
                {renderError()}
                <table className="table">
                    <thead></thead>
                    <tbody>
                        {renderRecentRows(this.state.recentLocations)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Weather;
