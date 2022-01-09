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

    const fileredData = (data) => {
        //console.log('this is the data inside the func', data[0].date.toLocaleString("en-US").slice(5,9))

        if(filterYear === ''){
            return data
        }

        let filteredExpenses = data.filter(expenses => Number(expenses.date.toLocaleString("en-US").slice(5,9)) === filterYear)
        console.log("FILTERED DATA",filteredExpenses)

        return filteredExpenses
    } 

    console.log(filterYear)

    return (
        <div>
            <ExpensesFilter  onSelectedDate={selectedDate} />
            {
                fileredData(props.onExpensesData).map((expenses)=> {
                    console.log("In expenses Item List",expenses.title)
                    return(
                       
                        <ExpenseItem  
                            key={expenses.id} //"it is better to use the id of each of the expenses to avoid bugs"
                            onDate={expenses.date} 
                            onTitle={expenses.title}
                            onPrice={expenses.amount}
                            />
                        
                    )
                })
            }
        
            {/*
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
            />  */}
        </div>
    )
}

export default ExpensesItemList