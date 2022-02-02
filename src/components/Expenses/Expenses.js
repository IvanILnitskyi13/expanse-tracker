import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    console.log(filteredYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((element) => {
          return (
            <ExpenseItem
              key={element.id}
              date={element.date}
              title={element.title}
              amount={element.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
