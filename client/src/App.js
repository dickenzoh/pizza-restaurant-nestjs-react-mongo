import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaCarousel from "./Components/Carousel/PizzaCarousel";
import PizzasList from "./Components/PizzasList/PizzasList";
import CustomTabs from "./Components/UI/CustomTab";
import { Box } from "@mui/material";
import CompletedPizzasList from "./Components/Completed/PizzasList";

function App() {
  const [tab, setTab] = useState("one");

  console.log(tab);
  return (
    <div className="App">
      <PizzaCarousel />
      <Box
        sx={{
          display: "flex",
          flexDirection: "center",
          p: 1,
          m: 1,
          ml: 120,
          bgcolor: "background.paper",
          borderRadius: 1,
          width: "30%",
        }}
      >
        <Box>
          <CustomTabs onChange={(value) => setTab(value)} />
        </Box>
      </Box>
      {tab === "one" ? <PizzasList /> : <CompletedPizzasList />}
    </div>
  );
}

export default App;
