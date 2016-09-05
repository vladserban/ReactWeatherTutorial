var React = require('react');

var RecentLocation = React.createClass({
  render: function(){
    var {location, temperatureDetails} = this.props;
    return (
      <tr>
        <td>{location}</td>
        <td>{temperatureDetails.shortDesc}</td>
        <td className="text-right">{temperatureDetails.temp}&deg;</td>
      </tr>
    );
  }
});

module.exports = RecentLocation;
