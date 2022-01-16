import React, { useState } from 'react'
//Components imports
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from '../expensesFilter/ExpensesFilter'

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

    //the filtered data is save in this variable
    let filteredData =  filteredDataPerYear(props.onExpensesData).map((expenses)=> {
        return(
            <ExpenseItem  
                key={expenses.id} //"it is better to use the id of each of the expenses to avoid bugs"
                onDate={expenses.date} 
                onTitle={expenses.title}
                onPrice={expenses.amount}
            />  
        )
    })

    //If filtered data is empty a header with a message has to be return
    if(filteredData.length === 0){
        filteredData = <h1>No Expenses Recorded</h1>
    }

    return (
        <div>
            <ExpensesFilter  onSelectedDate={selectedDate} />

            {
                filteredData
            }
        
        </div>
    )
}

export default ExpensesItemList