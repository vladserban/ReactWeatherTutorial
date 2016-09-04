var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => (
  <div>
    <h1 className="text-center">Examples</h1>
    <p>Here are a few example locations:</p>
    <ol>
      <li>
        <Link to="/?location=Craiova">Craiova</Link>
      </li>
      <li>
        <Link to="/?location=Suceava">Suceava</Link>
      </li>
    </ol>
  </div>
);

module.exports = Examples;
