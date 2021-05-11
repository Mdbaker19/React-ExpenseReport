import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const ExpenseReport = (props) => {

    const [year, setYear] = useState('2021');


    const filterChangeHandler = (yearValue) => {
        setYear(yearValue);
    }

    const filteredExpenses = props.expenses.filter(ex => ex.date.getFullYear().toString() === year);

    return (
        <div className="container">
            <ExpenseFilter current={year} filterChanger={filterChangeHandler}/>
            <ExpensesChart expense={filteredExpenses}/>
            <ExpensesList expenseList={filteredExpenses}/>
        </div>
    );
}

export default ExpenseReport;