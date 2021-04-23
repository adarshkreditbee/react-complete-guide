import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* <p> Expense Item </p> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__title">{props.title}</div>
      <div className="expense-item__price">${props.price}</div>
    </div>
  );
}

export default ExpenseItem;
