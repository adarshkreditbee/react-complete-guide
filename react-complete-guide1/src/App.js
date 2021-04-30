import React from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Wrapper from './components/Helpers/Wrapper';
import Foobar from './components/Examples/Foobar';

function App() {
  const expenses = [
    { date: new Date(2021, 2, 29), title: 'Car Insurance', price: 21000 },
    { date: new Date(2020, 2, 29), title: 'Food and drinks', price: 410 },
    { date: new Date(2019, 2, 29), title: 'Grocery', price: 1300 },
  ];

  // eslint-disable-next-line no-console
  console.log('HELLO');

  return (
    <Wrapper>
      <NewExpense />
      <Expenses {...{ expenses }} />
      {/* <header className="App-header">
        {console.log(expenses)}
      </header> */}
      <Foobar />
    </Wrapper>
  );
}

export default App;
