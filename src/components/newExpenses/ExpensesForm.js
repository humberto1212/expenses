import React, { useState } from 'react'
//Import css
import "./expensesForm.css"
//Iport components
import ShowForm from '../Form/ShowForm'

function ExpensesForm(props) {
    //--------------------
    //      STATES
    //--------------------
    const [newTitle, setNewTitle] = useState('')
    const [newAmount, setNewAmount] = useState('')
    const [newDate, setNewDate] = useState('')
    const [showFormBool, setShowFormBool] = useState(false)
    const [formValidationTitle, setFormValidationTitle] = useState(true)
    const [formValidationDate, setFormValidationDate] = useState(true)
    const [formValidationAmount, setFormValidationAmount] = useState(true)
    const [validationStyle, setValidationStyle] = useState(false)

    //Handle condition if empty and save title value
    const titleHandle = (event) => {
       
        if(event.target.value.trim().length === 0){
            setFormValidationTitle(true)
        }
        if(event.target.value.trim().length > 0){
            setFormValidationTitle(false) 
        }

        setNewTitle(event.target.value)
    }

    //Handle condition if empty and save amount value
    const amountHandle = (event) => {
        if(event.target.value.trim().length === 0){
            setFormValidationAmount(true)
        }
        if(event.target.value.trim().length > 0){
            setFormValidationAmount(false) 
        }
        setNewAmount(Number(event.target.value))
    }

    //Handle condition if empty and save date value
    const dateHandle = (event) => {
        if(event.target.value.trim().length === 0){
            setFormValidationDate(true)
        }
        if(event.target.value.trim().length > 0){
            setFormValidationDate(false) 
        }
        setNewDate(event.target.value)
    }

    //save Object value with new expenses Inf. and clean inputs states
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

    //On click change style of inputs depending if form is empty or not. and reset states to original state
    const handleValidationStyle = () => {
        formValidationTitle === false &&
        formValidationDate === false &&
        formValidationAmount === false 
        ? 
        setValidationStyle(false)
        : 
        setValidationStyle(true)

        setFormValidationAmount(true)
        setFormValidationTitle(true)
        setFormValidationDate(true)
    }

    //Hide form
    const changeCondition = () => {
        return setShowFormBool(false)
    }

    //--------------------
    //  RETURN JSX
    //--------------------
    return (
        <div>
            {
                showFormBool === false 
                ?   
                <ShowForm onSetShowFormBool={setShowFormBool} />   
                :
                <div>
                <form onSubmit={submitHandle}>
                    <div className={`new-expense__controls`}>
                        <div className={`new-expense__control_title ${
                        validationStyle === true
                        ? 
                        "invalid"
                        : 
                        ""
                        }`}>
                            <label>Title</label>
                            <input 
                            value={newTitle}
                            type="text" 
                            onChange={titleHandle} 
                            />
                        </div>
                        <div className={`new-expense__control_amount ${
                        validationStyle === true
                        ? 
                        "invalid"
                        : 
                        ""
                        }`}>
                            <label>Amount</label>
                            <input 
                            value={newAmount}
                            type="number" 
                            min="0.01" 
                            step="0.01" 
                            onChange={amountHandle}
                            />
                        </div>
                        <div className={`new-expense__control_date ${
                        validationStyle === true
                        ? 
                        "invalid"
                        : 
                        ""
                        }`}>
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
                             <button 
                             onClick={() => handleValidationStyle()}
                                disabled={  formValidationTitle === false &&
                                    formValidationDate === false &&
                                    formValidationAmount === false 
                                    ?
                                    false
                                    : 
                                    validationStyle
                                    } 
                                type="submit">
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