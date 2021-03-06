var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();

    var navLocation = this.refs.location.value;
    navLocation = encodeURIComponent(navLocation);

    if (navLocation.length > 0) {
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + navLocation;
    }
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get weather</IndexLink>
            </li>
            <li><Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li><Link to="/examples" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="location" placeholder="Enter location"/></li>
              <li><button className="button">Search</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});


module.exports = Nav;
