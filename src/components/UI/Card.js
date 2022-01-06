import React from 'react'
//Import CSS file
import './Card.css'

function Card(props) {
    const classes = 'card-style ' + props.className

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card