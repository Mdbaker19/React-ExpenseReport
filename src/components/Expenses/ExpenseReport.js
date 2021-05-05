import ExpenseItem from "./ExpenseItem";

const ExpenseReport = () => {
    const expenses = [
        {date: "2021-03-02", amount: "100.00", title: "Investing", due: false},
        {date: "2021-04-01", amount: "89.99", title: "Car Insurance", due: true},
        {date: "2021-05-02", amount: "4.99", title: "Bread", due: true}
    ];


    return (
        <div className="container">
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} due={expenses[0].due}/>
            <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} due={expenses[1].due}/>
            <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} due={expenses[2].due}/>
        </div>
    );
}

export default ExpenseReport;