import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // function clickHandler() {
  //   console.log("CLIKCED!")
  // }
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!")
    console.log(title);
  }

  return (
    <div className="expense-item">
      {/* <p> Expense Item </p> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__title">{title}</div>
      <div className="expense-item__price">${props.price}</div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
