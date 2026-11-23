import "./SoundsNavbar.css";
import { House, SixteenthNotes, MicSignal, Folders } from "lucide-react";
function SoundsNavBar() {
  return (
    <div className="section-navbar sounds-container">
      <div className="section-navbar-inner">
        <div className="section-navbar-title">SOUNDS</div>
        <ul className="section-navbar-links">
          <li>
            <House />
            Home
          </li>
          <li>
            <SixteenthNotes />
            Music
          </li>
          <li>
            <MicSignal />
            Podcasts
          </li>
          <li>
            <Folders />
            My Sounds
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SoundsNavBar;
