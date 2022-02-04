import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const content = isEditing ? (
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
  ) : (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
