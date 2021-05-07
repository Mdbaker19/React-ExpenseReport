import ExpenseItem from "./ExpenseItem";

const ExpenseReport = (props) => {

    return (
        <div className="container">
            <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title} amount={props.expenses[0].amount} due={props.expenses[0].due}/>
            <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title} amount={props.expenses[1].amount} due={props.expenses[1].due}/>
            <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title} amount={props.expenses[2].amount} due={props.expenses[2].due}/>
        </div>
    );
}

export default ExpenseReport;