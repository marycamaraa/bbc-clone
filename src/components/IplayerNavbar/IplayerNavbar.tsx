import "./IplayerNavbar.css";

function IplayerNavbar() {
  return (
    <div className="section-navbar iplayer-container">
      <div className="section-navbar-inner">
        <div className="section-navbar-title">iPLAYER</div>
      </div>

      <div className="section-navbar-divider"></div>

      <div className="section-navbar-inner">
        <ul className="section-navbar-links">
          <li>Channels</li>
          <li>Categories</li>
          <li>A-Z</li>
          <li>TV Guild</li>
          <li>Watchlist</li>
        </ul>
      </div>
    </div>
  );
}
export default IplayerNavbar;
