import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title: "",
        amount: "",
        date: ""
    });

    const titleChangeHandler = (e) => {
        setUserInput( (prevState) => {
            return {...prevState, title : e.target.value};
        });
    }
    const amountChangeHandler = (e) => {
        setUserInput( (prevState) => {
            return {...prevState, amount : e.target.value};
        });
    }
    const dateChangeHandler = (e) => {
        setUserInput( (prevState) => {
            return {...prevState, date : e.target.value};
        });
    }
    const dueChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, due: e.target.checked};
        });
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title : userInput.title,
            amount : +userInput.amount,
            date : new Date(userInput.date),
            due : userInput.due
        };

        props.onSaveData(expenseData);

        setUserInput({
            title: "",
            amount: "",
            date: ""
        });
    }

    const cancelAddHandler = () => {
        props.cancel();
    }

    return (
        <form className="col s12 addForm" onSubmit={formSubmitHandler}>
            <div className="row">
                <div className="input-field col s12">
                    <input id="title" type="text" value={userInput.title} onChange={titleChangeHandler} className="validate"/>
                    <label htmlFor="title">Title</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="amount" type="number" value={userInput.amount} onChange={amountChangeHandler} className="validate"/>
                    <label htmlFor="amount">Amount</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="date" type="date" value={userInput.date} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" className="validate"/>
                    <label htmlFor="date">Date</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <label>
                    <input id="due" type="checkbox" value={userInput.due} onChange={dueChangeHandler} min="2019-01-01" max="2022-12-31" className="validate"/>
                        <span>Due</span>
                    </label>
                </div>
            </div>
            <button className="btn">Add Expense</button>
            <button className="btn" type="button" onClick={cancelAddHandler}>Cancel</button>
        </form>
    )
}

export default ExpenseForm;