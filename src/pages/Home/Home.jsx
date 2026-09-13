import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <main className="container">
        <h1>Welcome to the BBC</h1>
    
        <h2> News Headlines</h2>
        {/* home list items */}
        <ul className="home-list" display={"flex"}>
          <li home-list-item>
            <img src="src/assets/icons/placeholder.png" />
            <h1>LIVE</h1>
            <p>LIVE</p>
            <img
              src="src/assets/icons/news.svg"
              width={"30px"}
              height={"30px"}
            />
          </li>
          <li>
            <img src="src/assets/icons/placeholder.png" width={"300px"} />
            <h1>LIVE</h1>
            <p>LIVE</p>
            <img
              src="src/assets/icons/news.svg"
              width={"30px"}
              height={"30px"}
            />
          </li>
          <li>
            <img src="src/assets/icons/placeholder.png" width={"300px"} />
            <h1>LIVE</h1>
            <p>LIVE</p>
            <img
              src="src/assets/icons/news.svg"
              width={"30px"}
              height={"30px"}
            />
          </li>
          <li>
            <img src="src/assets/icons/placeholder.png" width={"300px"} />
            <h1>LIVE</h1>
            <p>LIVE</p>
            <img
              src="src/assets/icons/news.svg"
              width={"30px"}
              height={"30px"}
            />
          </li>
          <li>
            <img src="src/assets/icons/placeholder.png" width={"300px"} />
            <h1>LIVE</h1>
            <p>LIVE</p>
            <img
              src="src/assets/icons/news.svg"
              width={"30px"}
              height={"30px"}
            />
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Home;
