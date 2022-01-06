import React from 'react'
//Import css
import "./newExpenses.css"
//Import components
import ExpensesForm from './ExpensesForm'

function newExpense(props) {
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}
export default newExpense