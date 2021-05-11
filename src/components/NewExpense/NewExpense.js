import React, {useState} from 'react';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [add, setAdd] = useState(true);

    const changeAddHandler = () => {
        setAdd(!add);
    }

    const SaveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Date.now()
        };
        props.onAddExpense(expenseData);
        setAdd(true);
    }

    const cancelAdd = () => {
        setAdd(true);
    }

    const itemToShow = add ? <button className="btn waves-effect" onClick={changeAddHandler}>Add new Expense</button>
                           : <ExpenseForm cancel={cancelAdd} onSaveData={SaveDataHandler} />;

    return (
        <div className={!add ? "row fullForm": "row"}>
            {itemToShow}
        </div>
    )
};

export default NewExpense;