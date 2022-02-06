import React from 'react'
import Chart from '../chart/Chart'
import '../chart/chartBar.css'

function ExpensesChart(props) {

    const chartDataPoints = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0}
    ]

    for(const expense of props.expenses){
        const expensesMonth = expense.date.getMonth();
        chartDataPoints[expensesMonth].value += expense.amount;
    }
    //console.log("-EXPENSES CHART- In for loop",chartDataPoints)

    return (
        <div className="chart-container">
            <Chart onDataPoints={chartDataPoints} />   
        </div>
    )
}

export default ExpensesChart