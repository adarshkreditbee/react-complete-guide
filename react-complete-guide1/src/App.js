import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Wrapper from "./components/Helpers/Wrapper"

function App() {
  const expenses = [
    { date: new Date(2021, 2, 29), title: "Car Insurance", price: 21000 },
    { date: new Date(2020, 2, 29), title: "Food and drinks", price: 410 },
    { date: new Date(2019, 2, 29), title: "Grocery", price: 1300 },
  ];

  return (
    <Wrapper>
      <NewExpense />
      <Expenses {...{ expenses }} />
      {/* <header className="App-header">
        {console.log(expenses)}
      </header> */}
    </Wrapper>
  );
}

export default App;
