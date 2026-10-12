import { Outlet } from "react-router-dom";
import NewsNavbar from "../src/components/NewsNavbar/NewsNavbar";

function NewsLayout() {
  return (
    <div className="page-layout">
      <NewsNavbar />

      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default NewsLayout;
