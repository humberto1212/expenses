import React, {useRef} from 'react'
import ExpenseItem from './ExpenseItem'

function ExpensesListCondition(props) {

    console.log('This is my other list',props)

    const draggingItem = useRef();
     const dragOverItem = useRef();

    //Start drag action
    const handleDragStart = (e, position) => {
        draggingItem.current = position;
        console.log("dragging start",e.target.innerHTML);
    };
    //Place drag action
    // const handleDragEnter = (e, position) => {
    //     dragOverItem.current = position;
    //     console.log("dragging over",e.target.innerHTML);
    //    };
    //Ends drag action
    // const handleDragEnd = (e) => {
    //     const listCopy = [...props.onExpensesData];

    //     const draggingItemContent = listCopy[draggingItem.current];
      
    //     listCopy.splice(draggingItem.current, 1);
    //     listCopy.splice(dragOverItem.current, 0, draggingItemContent);
         
    //      draggingItem.current = null;
    //      dragOverItem.current = null;

    //      props.onSetExpensesData(listCopy);
    // };

    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
        const listCopy = [...props.onExpensesData];
        console.log(draggingItem.current, dragOverItem.current);
        const draggingItemContent = listCopy[draggingItem.current];
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);
    
        draggingItem.current = dragOverItem.current;
        dragOverItem.current = null;
        props.onSetExpensesData(listCopy);
      };
   

     //the filtered data is save in this variable
     let filteredData =  props.onFilteredDataPerYear(props.onExpensesData).map((expenses, index)=> {
        return(
            <div
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            //onDragEnd={handleDragEnd}
            key={index}
            draggable
            onDragOver={(e) => e.preventDefault()}
            >

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

            </div>
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