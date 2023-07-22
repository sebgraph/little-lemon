import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import Menu from "./pages/menu";
import Reservations from "./pages/reservations";
import Home from "./pages/home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/menu" element={<Menu />}></Route>
        <Route exact path="/reservations" element={<Reservations />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
