import React, { useState } from 'react'
//Components imports
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from '../expensesFilter/ExpensesFilter'
import ExpensesListCondition from '../expenses/ExpensesListCondition'

function ExpensesItemList(props) {
    console.log(props.onExpensesData)
    //State
    const [filterYear, setFilterYear] = useState('')

    const selectedDate = (selectedYear) => {
        setFilterYear(selectedYear)
    }

    const filteredDataPerYear = (data) => {
        if(filterYear === ''){
            return data
        }else if(filterYear !== ''){
            let filteredExpenses = data.filter(expenses => expenses.date.getFullYear().toString() === filterYear)
            console.log("FILTERED DATA",filteredExpenses)

            return filteredExpenses
        }
    } 

    


    return (
        <div>
            <ExpensesFilter  onSelectedDate={selectedDate} />

            <ExpensesListCondition 
                onFilteredDataPerYear={filteredDataPerYear} 
                onExpensesData={props.onExpensesData}
            />
        
        </div>
    )
}

export default ExpensesItemList