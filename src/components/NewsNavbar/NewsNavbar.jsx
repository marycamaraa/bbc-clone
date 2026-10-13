import "./NewsNavbar.css";

function NewsNavbar() {
  return (
    <div className="news-container">
      <div className="page-title">NEWS</div>
      <div className="border-top-style"></div>
      <div className="news-navbar-inner">
        <ul className="news-list-links">
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
        </ul>
      </div>
    </div>
  );
}

export default NewsNavbar;
