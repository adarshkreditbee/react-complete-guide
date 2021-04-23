import React from "react";
import "./ExpenseDate.css"

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-IN", { month: "numeric" });
  const year = props.date.toLocaleString("en-IN", { year: "numeric" });
  const day = props.date.toLocaleString("en-IN", { day: "2-digit" });

  return (
    <div className="expense-date">
      {/* Expense Date */}
      {/* <p>{props.date.toISOString()}</p> */}
      <span className="expense-date__month">{month}</span>
      <p className="expense-date__year">{year}</p>
      <span className="expense-date__day">{day}</span>
    </div>
  );
};

export default ExpenseDate;
