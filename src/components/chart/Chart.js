import React from 'react'
import ChartBars from "../chart/ChartBars"

function Chart(props) {
   

    return (
        <div>
            {
                props.onDataPoints.map((dataPoint) => {
                    <ChartBars
                        key={dataPoint.id}
                        value={dataPoint.value}
                        maxValue={null}
                        label={dataPoint.label}
                    />
                })
            }
            
        </div>
    )
}

export default Chart