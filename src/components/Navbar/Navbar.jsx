import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const { pathname } = useLocation();
  const darkRoutes = ["/sport", "/iplayer", "/sounds"];
  const isDark = darkRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  return (
    <nav className={`nav-container${isDark ? " nav-container--dark" : ""}`}>
      <div className="nav-content">
        <div className="for-you">
          <Link to="/home" className="bbc-logo-link" aria-label="BBC Home">
            <img
              className="bbc-logo"
              src="src/assets/icons/bbc-logo.svg"
              alt="BBC"
            />
          </Link>
          <a className="profile">
            <img
              src="src/assets/icons/profile.svg"
              height={"30px"}
              width={"40px"}
            />
            <p>Sign in</p>
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
            <img src="src/assets/icons/news.svg" className="top-icons" />
            <Link to="/news" className="news">
              News
            </Link>
          </li>

          <li>
            <img src="src/assets/icons/sport.svg" className="top-icons" />
            <Link to="/sport" className="sport">
              Sport
            </Link>
          </li>

          <li>
            <img src="src/assets/icons/weather.svg" className="top-icons" />
            <Link to="/weather" className="weather">
              Weather
            </Link>
          </li>

          <li>
            <img src="src/assets/icons/iplayer.svg" className="top-icons" />
            <Link to="/iplayer" className="iplayer">
              iplayer
            </Link>
          </li>

          <li>
            <img src="src/assets/icons/sounds.svg" className="top-icons" />
            <Link to="/sounds" className="sounds">
              Sounds
            </Link>
          </li>

          <li>
            <img src="src/assets/icons/bitesize.svg" className="top-icons" />
            <Link to="/bitesize" className="bitesize">
              Bitesize
            </Link>
          </li>
          <Link to="/more" className="more" aria-label="More" />
        </ul>
        <form action="./search" className="search-form">
          <Search className="search-icon" size={20} aria-hidden="true" />
          <input
            className="nav-search"
            type="search"
            placeholder="Search BBC"
            aria-label="Search BBC"
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
