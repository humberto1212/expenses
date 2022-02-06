import React from 'react'
import ChartBars from "../chart/ChartBars"
import './chartBar.css'

function Chart(props) {
   const dataPointValues = props.onDataPoints.map(dataPoint => dataPoint.value)
   const totalMaximum = Math.max(...dataPointValues)

  // console.log("-CHART- TEST",props.onDataPoints)

    return (
        <div className="chart">

            
            {
                props.onDataPoints.map((dataPoint, id) => {
                    
                return(
                    <ChartBars
                        key={id}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                )
                    
                })
            }
            
        </div>
    )
}

export default Chart