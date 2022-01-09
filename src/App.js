import React, {useState} from 'react';
import './App.css';
//Import components
import ExpensesItemList from './components/expenses/ExpensesItemList';
import NewExpense from './components/newExpenses/NewExpense';

const dummyData = [
  {
  id: "1",
  date: new Date(2021, 2, 12),
  title: "Computer",
  amount: 12,
  },
  {
  id: "2",
  date: new Date(2021, 3, 20),
  title: "mous",
  amount: 5,
  },
  {
  id: "", 
  date: new Date(2021, 4, 26),
  title: "keyboard",
  amount: 6,
  }
]

function App() {
  const [expensesData, setExpensesData] = useState(dummyData)

  const addExpense = (expense) => {
  setExpensesData(prevExpenses => {return(
    [expense, ...prevExpenses]
  )})
  
  }


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpense} />
      <ExpensesItemList onExpensesData={expensesData}/>
    </div>
  );
}

export default App;
