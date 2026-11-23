import { Outlet } from "react-router-dom";
import IplayerNavbar from "../components/IplayerNavbar/IplayerNavbar";

function IplayerLayout() {
  return (
    <div className="page-layout dark-theme">
      <IplayerNavbar />

      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default IplayerLayout;
