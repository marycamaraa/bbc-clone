import "./NewsNavbar.css";
import { Menu } from "lucide-react";

function NewsNavbar() {
  return (
    <div className="section-navbar news-container">
      <div className="section-navbar-inner">
        <div className="section-navbar-title">NEWS</div>
      </div>

      <div className="section-navbar-divider"></div>

      <div className="section-navbar-inner">
        <ul className="section-navbar-links">
          <li>Home</li>
          <li>UK</li>
          <li>World</li>
          <li>Business</li>
          <li>Culture</li>
          <li>Politics </li>
          <li>Health</li>
          <li>Tech</li>
          <li>InDepth</li>
          <li>BBC Verify</li>
          <li>Climate</li>
          <li className="section-navbar-more">
            <Menu size={20} aria-hidden="true" /> More
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewsNavbar;
