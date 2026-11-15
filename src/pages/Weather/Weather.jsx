import { Outlet } from "react-router-dom";
import "./Weather.css";
import WeatherLayout from "../../layouts/WeatherLayout";

function Weather() {
  return (
    <>
      <WeatherLayout />
      <main className="main-content">
        <div className="content container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Weather;
