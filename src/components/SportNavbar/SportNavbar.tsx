import "./SportNavbar.css";
import { Menu } from "lucide-react";

function SportNavbar() {
  return (
    <div className="section-navbar sport-container">
      <div className="section-navbar-inner">
        <div className="section-navbar-title">SPORT</div>
      </div>

      <div className="section-navbar-divider"></div>

      <div className="section-navbar-inner">
        <ul className="section-navbar-links">
          <li>Home</li>
          <li>Football</li>
          <li>Cricket</li>
          <li>Formula 1</li>
          <li>Rugby L</li>
          <li>Tennis </li>
          <li>Golf</li>
          <li>Boxing</li>
          <li>Athletics</li>
          <li>My Sport</li>
          <li className="section-navbar-more">
            <Menu size={20} aria-hidden="true" />
            More
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SportNavbar;
