import { Outlet } from "react-router-dom";
import SoundsLayout from "../../layouts/SoundsLayout";
import "./Sounds.css";

function Sounds() {
  return (
    <>
      <SoundsLayout />
      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Sounds;
