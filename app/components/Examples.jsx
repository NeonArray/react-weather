var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="page-title text-center">Examples</h1>
      <p>Here are a few example locations ot try out:</p>
      <ol>
        <li>
          <Link to="/?location=Louisville">Louisville, KY</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;