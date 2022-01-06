import React from 'react'
import Card from '../UI/Card'

function ExpenseDate(props) {
    const month = props.onDate.toLocaleString('ja-JP-u-ca-japanese', {month: 'long'})
    const monthEn = props.onDate.toLocaleString('en-US', {month: 'long'})
    const day = props.onDate.toLocaleString('en-US', {day: '2-digit'})
    const year = props.onDate.getFullYear()

    return (
        <Card>
            <div>{month} - {monthEn}</div>
            <div>{year}</div>
            <div>{day}</div>
        </Card>
    )
}

export default ExpenseDate