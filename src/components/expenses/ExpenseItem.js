import React, {useState} from 'react'
//Import CSS file
import './expenseItem.css'
//MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//Components imports
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
   const [title, setTitle] = useState(props.onTitle)

    const clickHandler = () => {
       setTitle('updated!!')
    }

    return (
        <div>
  
            <Card sx={{ minWidth: 275 }}>
                <h2>Expense Item</h2>
                <CardContent className="card-content-flex"> 
                   
                        <ExpenseDate onDate={props.onDate} /> 
                        <Typography variant="h5" component="div">
                        {title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.onPrice}
                        </Typography>
                        <Typography variant="body2">
                        {props.onDescription}
                        </Typography>

                        <button onClick={clickHandler} >click</button>
             
                </CardContent>
            </Card>

        </div>
    )
}

export default ExpenseItem