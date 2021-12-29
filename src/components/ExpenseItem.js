import React from 'react'
//Import CSS file
import './ExpenseItem.css'
//MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//Components imports
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    console.log(props)

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
                        {props.onPrice}
                        </Typography>
                        <Typography variant="body2">
                        {props.onDescription}
                        </Typography>
             
                </CardContent>
            </Card>

        </div>
    )
}

export default ExpenseItem