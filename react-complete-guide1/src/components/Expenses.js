import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      <div>Expenses</div>
      {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
    </div>
  );
}

export default Expenses;
