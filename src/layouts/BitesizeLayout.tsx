import { Outlet } from "react-router-dom";
import BitesizeNavbar from "../components/BitesizeNavbar/BitesizeNavbar";

function BitesizeLayout() {
  return (
    <div className="page-layout">
      <BitesizeNavbar />

      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default BitesizeLayout;
