import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaCarousel from "./Components/Carousel/PizzaCarousel";

function App() {
  const [tab, setTab] = useState("one");

  console.log(tab);
  return (
    <div className="App">
      <PizzaCarousel />
    </div>
  );
}

export default App;
