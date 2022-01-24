import React from 'react'
import Chart from '../chart/Chart'

function ExpensesChart(props) {

    console.log(" -EXPENSES CHART- Filter for Chart",props.expenses)

    const chartDataPoints = [
        {lavel: "Jan", value: 0},
        {lavel: "Feb", value: 0},
        {lavel: "Mar", value: 0},
        {lavel: "Apr", value: 0},
        {lavel: "May", value: 0},
        {lavel: "Jun", value: 0},
        {lavel: "Jul", value: 0},
        {lavel: "Aug", value: 0},
        {lavel: "Sep", value: 0},
        {lavel: "Oct", value: 0},
        {lavel: "Nov", value: 0},
        {lavel: "Dec", value: 0}
    ]

    for(const expense of props.expenses){
        const expensesMonth = expense.date.getMonth();
        chartDataPoints[expensesMonth].value += expense.amount;
    }
    console.log("-EXPENSES CHART- In for loop",chartDataPoints)

    return (
        <div>
            <Chart onDataPoints={chartDataPoints} />   
        </div>
    )
}

export default ExpensesChart