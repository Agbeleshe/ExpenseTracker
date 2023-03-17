import React, { useState } from 'react'
import ExpensesList from './ExpensesList.js'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from '../Filter/ExpensesFilter'
import { ExpensesChart } from './ExpensesChart.js'

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2023')

  const handleFilterYear = (event) => {
    setSelectedYear(event)
  }

  const FilteredExpenses = props.expenses.filter((yearFilter) => {
    return yearFilter.date.getFullYear().toString() === selectedYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onFilterYear={handleFilterYear}
        />
        <ExpensesChart expenses={FilteredExpenses}/>
        <ExpensesList FilteredExpenses={FilteredExpenses} />
      </Card>
    </div>
  )
}
