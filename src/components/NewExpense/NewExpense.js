import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveNewExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onAddNewExpense(newExpense);
    setformVisibility(false);
  };

  const [formVisibility, setformVisibility] = useState(false);

  const showFormHandler = () => {
    setformVisibility(true);
  };

  const hideFormHandler = () => {
    setformVisibility(false);
  };

  return (
    <div className="new-expense">
      {!formVisibility && <button onClick={showFormHandler}>Add new expense</button>}
      {formVisibility && <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} onHideForm={hideFormHandler} />}
    </div>
  );
};

export default NewExpense;
