import { Outlet } from "react-router-dom";
import WeatherNavBar from "../components/WeatherNavBar/WeatherNavBar";

function WeatherLayout() {
  return (
    <div className="page-layout">
      <WeatherNavBar />

      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
export default WeatherLayout;
