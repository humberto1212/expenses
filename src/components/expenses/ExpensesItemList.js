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
        if(filterYear === ''){
            return data
        }else if(filterYear !== ''){
            let filteredExpenses = data.filter(expenses => expenses.date.getFullYear().toString() === filterYear)
            console.log("FILTERED DATA",filteredExpenses)

            return filteredExpenses
        }
    } 

    const test = props.onExpensesData.map((expenses) => {
        return  expenses.date.getFullYear().toString()
    })
    console.log("This are the expenses year", test)

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