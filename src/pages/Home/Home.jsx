import "./Home";

function Home() {
  return (
    <>
      <main className="container">
        <h1>Welcome to the BBC</h1>
        <div className="hontainer">
          <h2> News Headlines</h2>
          <ul>
            <li>
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
            </li>
            <li>
              <img src="src/assets/icons/placeholder.png" width={"300px"} />
            </li>
            <li>
              <img src="src/assets/icons/placeholder.png" width={"300px"} />
            </li>
            <li>
              <img src="src/assets/icons/placeholder.png" width={"300px"} />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;
