import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import "../styles/main.css";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list" element={<List />}></Route>
    </Routes>
  );
};

export default Main;
