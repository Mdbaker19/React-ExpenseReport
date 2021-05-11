import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    if(props.expenseList.length <= 0) {
        return <h2>No Expenses found.</h2>
    }

    return (
        props.expenseList.map((expense) => {
            return <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
                due={expense.due}/>
        })
    )
}

export default ExpensesList;