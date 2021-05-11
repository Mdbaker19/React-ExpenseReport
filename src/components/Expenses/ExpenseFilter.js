import React, {useState} from "react";

import '../NewExpense/ExpenseForm.css'

const ExpenseFilter = (props) => {


    const onChangeHandler = (e) => {
        props.filterChanger(e.target.value);
    }

    return (
        <div className="row filterBox">
            <div className="input-field col s12">
                <label>Filter By Year
                    <select value={props.current} onChange={onChangeHandler}>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </label>
            </div>
        </div>
    )
}

export default ExpenseFilter;