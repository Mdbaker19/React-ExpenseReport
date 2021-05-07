import ExpenseReport from "./components/Expenses/ExpenseReport";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import NewExpense from "./components/NewExpense/NewExpense";

import './App.css';

const App = () => {

    const expenses = [
        {date: new Date("2021-03-02"), amount: "100.00", title: "Investing", due: false},
        {date: new Date("2021-04-01"), amount: "89.99", title: "Car Insurance", due: true},
        {date: new Date("2021-05-02"), amount: "4.99", title: "Bread", due: true}
    ];

    const addExpenseHandler = (expense) => {
        console.log(expense);
    }

    return (
        <div className="mainPage">
            <HeaderComponent/>
            <ExpenseReport expenses={expenses}/>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <FooterComponent/>
        </div>
    )

}

export default App;
