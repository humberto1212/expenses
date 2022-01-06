import React from 'react'
//Components imports
import ExpenseItem from './ExpenseItem'

function ExpensesItemList(props) {
    console.log(props.onExpensesData)
    return (
        <div>
            <ExpenseItem 
            onDate={props.onExpensesData[0].date} 
            onTitle={props.onExpensesData[0].title}
            onPrice={props.onExpensesData[0].price}
            onDescription={props.onExpensesData[0].description}
            />
            <ExpenseItem 
            onDate={props.onExpensesData[1].date} 
            onTitle={props.onExpensesData[1].title}
            onPrice={props.onExpensesData[1].price}
            onDescription={props.onExpensesData[1].description}
            />
            <ExpenseItem 
            onDate={props.onExpensesData[2].date} 
            onTitle={props.onExpensesData[2].title}
            onPrice={props.onExpensesData[2].price}
            onDescription={props.onExpensesData[2].description}
            /> 
        </div>
    )
}

export default ExpensesItemList