import React, { useState, useEffect, useCallback } from "react";
import classes from "./PizzasList.module.css";
import TransitionsModal from "../UI/NewOrderMod";

const PizzasList = ({ orders }) => {
  return (
    <>
      <div className={classes.menuContainer}>
        <div className={classes.itemContainer}>
          <button className={classes.editButton}>
            <TransitionsModal />
          </button>
        </div>
        {orders.map((pizza) => {
          return (
            <React.Fragment key={pizza.id}>
              <div className={classes.itemContainer} key={pizza.id}>
                <span className={classes.pizzaName}>{pizza.name}</span>
                <span className={classes.pizzaName}>{pizza.status}</span>
                <span className={classes.pizzaIngredients}>
                  {pizza.toppings}
                </span>
                <div>
                  <button className={classes.editButton} onClick={() => {}}>
                    Edit
                  </button>
                  <button className={classes.removeButton} onClick={() => {}}>
                    Remove
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default PizzasList;
