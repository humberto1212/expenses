import React from 'react'
//Import CSS file
import './expenseItemStyle.css'
//MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
//Components imports
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {

    //console.log("this is my list of expnses $$$",props)
   
 
    return (
        <div>
  
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
    )
}

export default ExpenseItem