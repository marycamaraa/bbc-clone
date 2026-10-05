import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NewsNavbar from "./components/NewsNavbar/NewsNavbar.jsx";
import Footer from "./components/Footer/Footer.js";

import "./styles/global.css";

import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Sport from "./pages/Sport/Sport";
import Weather from "./pages/Weather/Weather";
import IPlayer from "./pages/iPlayer/IPlayer";
import Bitesize from "./pages/Bitesize/bitesize";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <NewsNavbar />

        <main className="main-content">
          <div className="content-container">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/sport" element={<Sport />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/iplayer" element={<IPlayer />} />
              <Route path="/bitesize" element={<Bitesize />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
