import { Outlet } from "react-router-dom";
import BitesizeLayout from "../../layouts/BitesizeLayout";
import "./bitesize.css";

function Bitesize() {
  return (
    <>
      <BitesizeLayout />
      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
export default Bitesize;
