import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [Button, setButton] = useState(false)

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
    setButton(false)
  }

  const handleNewExpensesClick = () => {
    setButton(true)
  }
  const handleCancelClick = () => {
    setButton(false)
  }

  return (
    <div className="new-expense">
      {Button ? (
        <>
          <ExpenseForm
            onSaveExpenseData={handleSaveExpenseData}
            onCancelEditing={handleCancelClick}
          />
        </>
      ) : (
        <>
          <button onClick={handleNewExpensesClick}> Add New Expenses </button>
        </>
      )}
    </div>
  )
}
export default NewExpense
