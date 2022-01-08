import React, { useState } from 'react'
//Components imports
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from '../expensesFilter/ExpensesFilter'

function ExpensesItemList(props) {
    //State
    const [filterYear, setSFilterYear] = useState('')
    console.log(props.onExpensesData)

    const selectedDate = (selectedYear) => {
        setSFilterYear(selectedYear)
    }

    console.log(filterYear)


    return (
        <div>
            <ExpensesFilter  onSelectedDate={selectedDate} />
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