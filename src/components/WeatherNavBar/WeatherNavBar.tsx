import "./WeatherNavBar.css";

function WeatherNavBar() {
  return (
    <div className="section-navbar section-navbar-inner weather-container">
      <div className="section-navbar-title">WEATHER</div>
      <div className="search">
        <input
          type="search"
          className="weather-search"
          id="weather-search"
        ></input>{" "}
      </div>
    </div>
  );
}
export default WeatherNavBar;
