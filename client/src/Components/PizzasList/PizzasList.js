import React, { useState, useEffect, useCallback } from "react";
import classes from "./PizzasList.module.css";
import TransitionsModal from "../UI/NewOrderMod";
import NewOrderMod from "../UI/NewOrderMod";

const PizzasList = (props) => {
  const [isModal, setIsModal] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredID, setEnteredID] = useState();
  const [menuList, setMenuList] = useState([]);
  const [error, setError] = useState(null);

  const daat = [
    {
      id: 23353,
      name: "pizare",
      toppings: "mushroom",
      status: "completed",
    },
    {
      id: 23353,
      name: "pizare",
      toppings: "mushroom",
      status: "completed",
    },
    {
      id: 23353,
      name: "pizare",
      toppings: "mushroom",
      status: "completed",
    },
    {
      id: 23353,
      name: "pizare",
      toppings: "mushroom",
      status: "completed",
    },
  ];

  return (
    <>
      <div className={classes.menuContainer}>
        <div className={classes.itemContainer}>
          <button className={classes.editButton}>
            <TransitionsModal />
          </button>
        </div>
        {daat.map((pizza) => {
          return (
            <React.Fragment key={pizza.id}>
              <div className={classes.itemContainer} key={pizza.id}>
                <span className={classes.pizzaName}>{pizza.name}</span>
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