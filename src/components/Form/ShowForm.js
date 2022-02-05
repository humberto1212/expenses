import React from 'react'
import styles from "../newExpenses/expensesForm.module.css"

function ShowForm(props) {

   const changeCondition = () => {
        return props.onSetShowFormBool(true)
    }

    return (
        <div className={styles['new-expense__actions']}>
            <button onClick={changeCondition}>
                Show Form
            </button>
            
        </div>
    )
}

export default ShowForm