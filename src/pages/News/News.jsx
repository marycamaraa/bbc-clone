import { Outlet } from "react-router-dom";
import NewsLayout from "../../../layouts/NewsLayout";
import "./News.css";
function News() {
  return (
    <>
      <NewsLayout />
      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default News;
