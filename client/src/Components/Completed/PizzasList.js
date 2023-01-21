import React, { useState, useEffect, useCallback } from "react";
import classes from "./PizzasList.module.css";
import ReportModal from "../UI/ReportModal";

const CompletedPizzasList = (props) => {
  const completed = [
    {
      id: 23353,
      name: "pizare",
      toppings: "mushroom",
      status: "completed",
      duration: 3000,
    },
    {
      id: 23353,
      name: "pizare",
      toppings: "mushroom",
      status: "completed",
      duration: 3000,
    },
    {
      id: 23353,
      name: "pizare",
      toppings: "mushroom",
      status: "completed",
      duration: 3000,
    },
    {
      id: 23353,
      name: "pizare",
      toppings: "mushroom",
      status: "completed",
      duration: 3000,
    },
  ];

  return (
    <>
      <div className={classes.menuContainer}>
        {completed.map((pizza) => {
          return (
            <React.Fragment key={pizza.id}>
              <div className={classes.itemContainer} key={pizza.id}>
                <span className={classes.pizzaName}>{pizza.name}</span>
                <span className={classes.pizzaIngredients}>{pizza.status}</span>
                <span className={classes.pizzaIngredients}>
                  {pizza.duration}
                </span>
                <ReportModal />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default CompletedPizzasList;
