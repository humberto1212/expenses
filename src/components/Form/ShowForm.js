import React from 'react'
import "../newExpenses/expensesForm.css"

function ShowForm(props) {

   const changeCondition = () => {
        return props.onSetShowFormBool(true)
    }

    return (
        <div className="new-expense__actions">
            <button onClick={changeCondition}>
                Show Form
            </button>
            
        </div>
    )
}

export default ShowForm