import React from 'react'

function ChartBars(props) {
    let barHeigth = "0%"

    if (props.max > 0){
        barHeigth = Math.round((props.value / props.maxValue) * 100) + " %"
    }

    return (
        <div>
            <div>
                <div style={{heigth: barHeigth}}></div>
            </div>
            <div>{props.label}</div>
        </div>
    )
}

export default ChartBars