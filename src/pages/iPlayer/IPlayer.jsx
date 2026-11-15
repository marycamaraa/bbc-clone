import { Outlet } from "react-router-dom";
import "./IPlayer.css";
import IplayerLayout from "../../layouts/IplayerLayout";

function IPlayer() {
  return (
    <>
      <IplayerLayout />
      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>{" "}
    </>
  );
}

export default IPlayer;
