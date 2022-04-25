import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Header from "../header/Header";
import Content from "../content/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/post/:id"} element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
