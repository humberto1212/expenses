import React from 'react'

function ExpenseDate(props) {
    const month = props.onDate.toLocaleString('ja-JP-u-ca-japanese', {month: 'long'})
    const monthEn = props.onDate.toLocaleString('en-US', {month: 'long'})
    const day = props.onDate.toLocaleString('en-US', {day: '2-digit'})
    const year = props.onDate.getFullYear()

    return (
        <div>
            <div>{month} - {monthEn}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}

export default ExpenseDate