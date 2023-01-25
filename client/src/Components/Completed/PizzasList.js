import React, { useState, useEffect, useCallback } from "react";
import classes from "./PizzasList.module.css";
import ReportModal from "../UI/ReportModal";
import { Chip } from "@mui/material";

const CompletedPizzasList = ({ setCurrentId, orders }) => {
  console.log(orders);

  return (
    <>
      <div className={classes.menuContainer}>
        {orders.map((pizza) => {
          console.log(pizza);
          return (
            <React.Fragment key={pizza.id}>
              <div className={classes.itemContainer} key={pizza.id}>
                <span className={classes.pizzaName}>{pizza.name}</span>
                <span className={classes.pizzaIngredients}>{pizza.status}</span>
                <Chip label={pizza.status} color="primary" />
                //
                <Chip label="success" color="success" />
                <span className={classes.pizzaIngredients}>
                  {pizza.duration}
                </span>
                <ReportModal reportItem={pizza} setCurrentId={setCurrentId} />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default CompletedPizzasList;
