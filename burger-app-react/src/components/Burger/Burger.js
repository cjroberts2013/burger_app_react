import React from "react";

import classes from "./Burger.module.css";
import BurgerIngs from "./BurgerIngs/BurgerIngs";

const burger = props => {
  let transformedIngs = Object.keys(props.ings)
    .map(igKey => {
      return [...Array(props.ings[igKey])].map((_, i) => {
        return <BurgerIngs key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngs.length === 0) {
    transformedIngs = <p>Please start adding Ingredients</p>;
  }
  console.log(transformedIngs);
  return (
    <div className={classes.Burger}>
      <BurgerIngs type='bread-top' />

      {transformedIngs}

      <BurgerIngs type='bread-bottom' />
    </div>
  );
};

export default burger;
