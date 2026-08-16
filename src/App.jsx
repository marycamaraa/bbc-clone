import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Sport from "./pages/Sport/Sport";
import Weather from "./pages/Weather/Weather";
import IPlayer from "./pages/iPlayer/IPlayer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/iplayer" element={<IPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
