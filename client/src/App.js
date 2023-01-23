import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaCarousel from "./Components/Carousel/PizzaCarousel";
import PizzasList from "./Components/PizzasList/PizzasList";
import CustomTabs from "./Components/UI/CustomTab";
import { Box } from "@mui/material";
import CompletedPizzasList from "./Components/Completed/PizzasList";
import { getOrders } from "./features/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [tab, setTab] = useState("one");
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  const completedOrders = orders.filter((order) => {
    if (order.status == "completed") {
      return order;
    }
  });

  console.log();
  console.log(orders);
  console.log(completedOrders);

  useEffect(() => {
    dispatch(getOrders());
    console.log("orders");
  }, [dispatch]);

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
      {tab === "one" ? (
        <PizzasList orders={orders} />
      ) : (
        <CompletedPizzasList
          orders={completedOrders}
          setCurrentId={setCurrentId}
        />
      )}
    </div>
  );
}

export default App;
