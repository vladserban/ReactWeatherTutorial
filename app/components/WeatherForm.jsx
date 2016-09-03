var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var cityName = this.refs.cityName.value;
    this.refs.cityName.value = '';
    if( cityName.length > 0 ){
      this.props.onNewCity( cityName );
    }
  },
  render: function(){
    return (
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="cityName" placeholder="Enter a city"/>
          <button>Get Weather</button>
        </form>
    );
  }
});

module.exports = WeatherForm;
