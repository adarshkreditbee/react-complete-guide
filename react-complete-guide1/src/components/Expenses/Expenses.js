import { Fragment } from "react";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    // The fragment help us remove the div which is used as a wrapper.
    <Fragment>
      <div>Expenses</div>
      {props.expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </Fragment>
  );
}

export default Expenses;
