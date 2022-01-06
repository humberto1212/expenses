import './App.css';
//Import components
import ExpensesItemList from './components/expenses/ExpensesItemList';
import NewExpense from './components/newExpenses/NewExpense';

function App() {

  const addExpense = (expense) => {
    console.log("add to app.js")
    console.log(expense)
  }

  const expensesData = [
    {
    date: new Date(2021, 2, 12),
    title: "Computer",
    price: 12,
    description: "...",
    },
    {
    date: new Date(2021, 11, 20),
    title: "mous",
    price: 5,
    description: "...",
    },
    {
    date: new Date(2021, 11, 26),
    title: "keyboard",
    price: 6,
    description: "...",
    }
  ]

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpense} />
      <ExpensesItemList onExpensesData={expensesData}/>
    </div>
  );
}

export default App;
