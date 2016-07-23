var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <p>It's {temp} degrees in {location}</p>
  );
};

module.exports = WeatherMessage;