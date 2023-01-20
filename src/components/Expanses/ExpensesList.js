import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.itemsToShow.length < 1) {
    return <h2 className="expenses-list__fallback">No expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.itemsToShow.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
