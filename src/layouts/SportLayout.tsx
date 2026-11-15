import { Outlet } from "react-router-dom";
import SportNavbar from "../components/SportNavbar/SportNavbar";

function SportLayout() {
  return (
    <div className="page-layout">
      <SportNavbar />

      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default SportLayout;
