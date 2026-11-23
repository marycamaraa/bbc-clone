import { Outlet } from "react-router-dom";
import SoundsNavbar from "../components/SoundsNavbar/SoundsNavbar";

function SoundsLayout() {
  return (
    <div className="page-layout dark-theme">
      <SoundsNavbar />

      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default SoundsLayout;
