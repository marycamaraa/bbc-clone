import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <h1>Welcome to the BBC</h1>

        <h2>News Headline</h2>
        <div className="grid">
          <div className="div1"></div>
          <div className="div2">2</div>
          <div className="div3">3</div>
          <div className="div4">4</div>
          <div className="div5">5</div>
        </div>
        <div>
          <h2>Sport Headline</h2>
          <div className="grid">
            <div className="div1"></div>
            <div className="div2">2</div>
            <div className="div3">3</div>
            <div className="div4">4</div>
            <div className="div5">5</div>
          </div>
          <div></div>

          <h2>Entertainment and TV </h2>
          <div className="grid">
            <div className="div1"></div>
            <div className="div2">2</div>
            <div className="div3">3</div>
            <div className="div4">4</div>
            <div className="div5">5</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
