import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpensesListCondition(props) {

     //the filtered data is save in this variable
     let filteredData =  props.onFilteredDataPerYear(props.onExpensesData).map((expenses)=> {
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

            {filteredData}
            
        </div>
    )
}

export default ExpensesListCondition