import "./BitesizeNavbar.css";
import { Menu } from "lucide-react";
function BitesizeNavbar() {
  return (
    <div className="section-navbar bitesize-container">
      <div className="section-navbar-inner">
        <div className="section-navbar-title">BITESIZE</div>
      </div>

      <div className="section-navbar-divider"></div>

      <div className="section-navbar-inner">
        <ul className="section-navbar-links">
          <li>Home</li>
          <li>Learn</li>
          <li>Study Support</li>
          <li>Careers</li>
          <li>Teachers</li>
          <li>Parents </li>
          <li>Trending</li>
          <li>MyBitesize</li>
          <li className="section-navbar-more">
            <Menu size={20} aria-hidden="true" /> More
          </li>
        </ul>
      </div>
    </div>
  );
}
export default BitesizeNavbar;
