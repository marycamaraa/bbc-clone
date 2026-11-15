import { Outlet } from "react-router-dom";
import SportNavbar from "../../components/SportNavbar/SportNavbar";
import "./Sport.css";

function Sport() {
  return (
    <>
      <SportNavbar />
      <main className="main-content">
        <div className="content container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Sport;
