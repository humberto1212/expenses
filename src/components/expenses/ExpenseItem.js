import React, {useRef, useState} from 'react'
//Import CSS file
import '../expenses/expenseItemStyle.css'
//MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
//Components imports
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {

    const [list, setList] = useState([
        'Chicken Biriyani',
        'Mutton Pulao',
        'Paneer Masala',
        'Tandoori Chicken',
        'Dal Makhana',
        'Malai Kofta',
       ]);
    

    const draggingItem = useRef();
    const dragOverItem = useRef();
    //console.log("this is my props",props)

    //Start drag action
    const handleDragStart = (e, position) => {
        draggingItem.current = position;
        console.log("dragging start",e.target.innerHTML);
    };
    //Place drag action
    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log("dragging over",e.target.innerHTML);
       };
    //Ends drag action
    const handleDragEnd = (e) => {
        const listCopy = [...props.onExpensesData];
        //const listCopy = [...list];

        const draggingItemContent = listCopy[draggingItem.current];
      
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);
         
         draggingItem.current = null;
         dragOverItem.current = null;


         props.onSetExpensesData(listCopy);
         //setList(listCopy)
    };

    console.log('new list',props.onExpensesData)
    //console.log(list)

  
    return (
        <>
         {/* {
            list &&
            list.map((item, index) => (
             <h1 
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragEnd={handleDragEnd}
              key={index}
              draggable
               >
                 {item}
               </h1>
              ))}  */}

        <div 
          key={props.index} 
          raggable="true" 
           onDragStart={(expense) => handleDragStart(expense, props.index)} 
           onDragEnter={(expense) => handleDragEnter(expense, props.index)} 
           onDragEnd={handleDragEnd} 
           onDragOver={(e) => e.preventDefault()}
        >

            <Card sx={{ minWidth: 275 }}>
                <h2>Expense Item</h2>
                <CardContent className="card-content-flex"> 
                        <ExpenseDate onDate={props.onDate} /> 
                        <Typography variant="h5" component="div">
                        {props.onTitle}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.onPrice} €
                        </Typography>
                        <button onClick={() => props.onHandleRemove(props.id)} className="delete-button">
                            <DeleteIcon />
                        </button>
                </CardContent>
            </Card>
        </div>
        </>
    )
}

export default ExpenseItem