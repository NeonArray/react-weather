var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined
    };
  },

  handleSearch: function (location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (e) => {
      this.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },

  componentDidMount: function () {
    // Grab the URL param location
    var location = this.props.location.query.location;

    if (location && location.length) {
      // Execute a search with the location
      this.handleSearch(location);

      // Clear the URL parameters
      window.location.hash = '#/';
    }
  },

  /**
   * When the component is receiving new props from another component
   * in this case the top-nav search bar. When it executes it passes
   * a new hash value into the URL string. This function will receive
   * that change and then execute the search
   * @param newProps
   */
  componentWillReceiveProps: function (newProps) {
    // Grab the URL param location
    var location = newProps.location.query.location;

    if (location && location.length) {
      // Execute a search with the location
      this.handleSearch(location);

      // Clear the URL parameters
      window.location.hash = '#/';
    }
  },

  render: function () {
    let {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return (<h3 className="text-center">Fetching weather...</h3>);
      } else if (temp && location) {
        return (<WeatherMessage location={location} temp={temp}/>);
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return (
      <div>
        <h1 className="page-title text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;