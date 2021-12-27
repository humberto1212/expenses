import './App.css';
import ExpensesItemList from './components/ExpensesItemList';

function App() {

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
      <ExpensesItemList onExpensesData={expensesData}/>
    </div>
  );
}

export default App;
