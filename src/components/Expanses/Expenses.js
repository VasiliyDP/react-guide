import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const filterSelectHandler = (filterValue) => {
    setYear(filterValue);
  };

  // Ask Леха way this variable change and rerender components
  // I think setYear rerender this full component

  // https://felixgerschau.com/react-rerender-components/
  // Changing the state means that React triggers an update when we call the setState function (in React hooks, you would use useState).
  // This doesn't only mean the component's render function will be called, but also that all its subsequent child components will re-render,
  // regardless of whether their props have changed or not.
  const filteredItems = props.items.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterSelect={filterSelectHandler} year={year} />
        <ExpensesList itemsToShow={filteredItems}/>
      </Card>
    </div>
  );
};

export default Expenses;
