import React, { useState } from 'react'
//Components imports
import ExpensesFilter from '../expensesFilter/ExpensesFilter'
import ExpensesListCondition from '../expenses/ExpensesListCondition'
import ExpensesChart from './ExpensesChart'

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

    let filteredExoensesChart = filteredDataPerYear(props.onExpensesData)

    console.log("Filter for Chart",filteredExoensesChart)

    return (
        <div>
            <ExpensesFilter  onSelectedDate={selectedDate} />

            <ExpensesChart expenses={filteredExoensesChart} />

            <ExpensesListCondition 
                onFilteredDataPerYear={filteredDataPerYear} 
                onExpensesData={props.onExpensesData}
                onHandleRemove={props.onHandleRemove}
            />
        
        </div>
    )
}

export default ExpensesItemList