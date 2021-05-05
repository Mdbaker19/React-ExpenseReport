import {useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [date, setDate] = useState(new Date(props.date));
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const [due, setDue] = useState(props.due);

    const payBill = () => {
        setDue(due => !due);
    }

    return (
        <Card>
            <ExpenseDate date={new Date(date)}/>
            <p className="title center">Expense : {title}</p>
            <div className="card-action">
                <p className="amount action-item">${amount}</p>
                <button onClick={payBill} className="btn action-item">Need To Pay : {due.toString()}</button>
            </div>
        </Card>
    )

}

export default ExpenseItem;