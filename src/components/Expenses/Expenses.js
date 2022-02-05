import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = year => {
    setFilteredYear(year);
  };

  const filteredExpenses =
    filteredYear === ''
      ? props.items
      : props.items.filter(element => element.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
