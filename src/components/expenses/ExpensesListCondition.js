import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpensesListCondition(props) {

    //console.log('This is my other list',props)

    //const draggingItem = useRef();
    //console.log("this is my props",props)

    // const handleDragStart = (e, position) => {
    //     draggingItem.current = position;
    //     console.log(e.target.innerHTML);
    //   };
   

     //the filtered data is save in this variable
     let filteredData =  props.onFilteredDataPerYear(props.onExpensesData).map((expenses, index)=> {
        return(
            <ExpenseItem  
                onHandleRemove={props.onHandleRemove}
                key={expenses.id} //"it is better to use the id of each of the expenses to avoid bugs"
                onDate={expenses.date} 
                onTitle={expenses.title}
                onPrice={expenses.amount}
                onExpensesData={props.onExpensesData}
                onSetExpensesData={props.onSetExpensesData}
                index={index}
                id={expenses.id}
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