import React from 'react';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const SaveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Date.now()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className="row">
            <ExpenseForm onSaveData={SaveDataHandler} />
        </div>
    )
};

export default NewExpense;