import React from 'react'
import './chartBar.css'

function ChartBars(props) {
    let barHeigth = "0%"

    
    if (props.maxValue > 0){
        barHeigth = Math.round((props.value / props.maxValue) * 100)
    }
    
    console.log("-CHART BARS-", barHeigth)


    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barHeigth }} />
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBars