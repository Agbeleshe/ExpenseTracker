import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  }
  
  return (
    <ul className="expenses-list">
      {props.FilteredExpenses.length === 0 && (
        <h1 style={styles}>No Expenses Found</h1>
      )}
      {props.FilteredExpenses.length > 0 &&
        props.FilteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  )
}
export default ExpensesList
