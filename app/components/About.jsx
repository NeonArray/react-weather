var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="page-title text-center">About</h1>
      <p>This is a weather application built on React. I have built this for The Complete React Web App Developer Course.</p>
      <p>Tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to search for weather stat by city name.
        </li>
      </ul>
  </div>
  );
};

module.exports = About;