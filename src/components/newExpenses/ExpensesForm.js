import React, { useState } from 'react'
//Import css
import "./expensesForm.css"
import ShowForm from '../Form/ShowForm'

function ExpensesForm(props) {
    //States
    const [newTitle, setNewTitle] = useState('')
    const [newAmount, setNewAmount] = useState('')
    const [newDate, setNewDate] = useState('')
    const [showFormBool, setShowFormBool] = useState(false)

    // const [newInput, setNewInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    //handle functions
    const titleHandle = (event) => {
        setNewTitle(event.target.value)
        // setNewInput( (prevState) => {
        //     return {...prevState, enteredTitle : event.target.value}
        // } )
    }

    const amountHandle = (event) => {
        setNewAmount(Number(event.target.value))
        // setNewInput( (prevState) => {
        //     return {...prevState, enteredAmount : event.target.value}
        // } )
    }

    const dateHandle = (event) => {
        setNewDate(event.target.value)
        // setNewInput( (prevState) => {
        //     return {...prevState, enteredTitle : event.target.value}
        // } )
    }

    const submitHandle = (event) => {
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate),
        }
        props.onSaveExpenseData(expenseData);
        setNewTitle('')
        setNewAmount('')
        setNewDate('')

        setShowFormBool(false)
    }

    //Hide form
    const changeCondition = () => {
        return setShowFormBool(false)
    }

    return (
        <div>
            {
                showFormBool === false 
                ?   
                <ShowForm onSetShowFormBool={setShowFormBool} />   
                :
                <div>
                <form onSubmit={submitHandle}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input 
                            value={newTitle}
                            type="text" 
                            onChange={titleHandle} 
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input 
                            value={newAmount}
                            type="number" 
                            min="0.01" 
                            step="0.01" 
                            onChange={amountHandle}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input 
                            value={newDate}
                            type="date" 
                            min="2021-01-01" 
                            max="2022-12-31"
                            onChange={dateHandle} />
                        </div>
                        <div className="new-expense__actions">
                        <div className="new-expense__actions">
                            <button type="button" onClick={changeCondition}>
                                Cancel
                            </button>
                            <button type="submit">
                                Submit Expenses
                            </button>
                        </div>
                        </div>
                    </div>
                </form>
                </div>
            }   
            </div>
    )
}

export default ExpensesForm