import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="for-you">
        <img className="bbc-logo" src="src/assets/icons/bbc-logo.svg" />
        <a className="profile">
          <img src="src/assets/icons/profile.svg" /> <p>For you </p>
        </a>
        <a className="notification">
          <img src="src/assets/icons/notification.svg" />
        </a>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/home" className="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/news" className="news">
            News
            <img src="src/assets/icons/news.svg" className="top-icons" />
          </Link>
        </li>
        <li>
          <Link to="/sport" className="sport">
            Sport
            <img src="src/assets/icons/sport.svg" className="top-icons" />
          </Link>
        </li>
        <li>
          <Link to="/weather" className="weather">
            Weather
            <img src="src/assets/icons/weather.svg" className="top-icons" />
          </Link>
        </li>
        <li>
          <Link to="/iplayer" className="iplayer">
            iplayer
            <img src="src/assets/icons/iplayer.svg" className="top-icons" />
          </Link>
        </li>
        <li>
          <Link to="/bitesize" className="bitesize">
            Bitesize
            <img src="src/assets/icons/bitesize.svg" className="top-icons" />
          </Link>
        </li>
      </ul>
      <div>
        <form action="./search">
          <input className="nav-search" placeholder="search BBC"></input>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
