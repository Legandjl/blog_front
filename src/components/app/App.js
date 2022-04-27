import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Header from "../header/Header";
import Post from "../post/Post";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/post/:id"} element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
