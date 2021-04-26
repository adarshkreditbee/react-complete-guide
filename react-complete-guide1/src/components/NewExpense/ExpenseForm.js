import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [inputData, setInputData] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // console.log(event.target.value)
    // setInputData({
    //   ...inputData,
    //   enteredTitle: event.target.value,
    // });
    setInputData((prevState)=>{
      return {
        ...prevState,
        enteredTitle: event.target.value,
      }
    })
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setInputData({
    //   ...inputData,
    //   enteredAmount: event.target.value,
    // });
    setInputData((prevState)=>{
      return {
        ...prevState,
        enteredAmount: event.target.value,
      }
    })
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setInputData({
    //   ...inputData,
    //   enteredDate: event.target.value,
    // });
    setInputData((prevState)=>{
      return {
        ...prevState,
        enteredDate: event.target.value,
      }
    })
  };

  const userInput = {
    title: inputData.enteredTitle,
    amount: inputData.enteredAmount,
    date: new Date(inputData.enteredDate),
  };
  // const userInput = {
  //   title: enteredTitle,
  //   amount: enteredAmount,
  //   date: new Date(enteredDate),
  // };

  function submitHandler(event) {
    event.preventDefault();
    console.log(userInput);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            max={1000}
            placeholder="Enter amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
