import {useState} from "react";

import ExpenseReport from "./components/Expenses/ExpenseReport";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import NewExpense from "./components/NewExpense/NewExpense";

import './App.css';

const initialExpenses = [
    {id: 155155153, date: new Date("2020-03-02"), amount: "100.00", title: "Investing", due: false},
    {id: 155155155, date: new Date("2021-05-02"), amount: "4.99", title: "Bread", due: true},
    {id: 155155154, date: new Date("2022-04-01"), amount: "89.99", title: "Car Insurance", due: true}
];

const App = () => {

    const [expenses, setExpenses] = useState(initialExpenses);

    const addExpenseHandler = (expense) => {
        // did not set a new item, always added the last item everytime
        // setExpenses( (prevExpenses) => {
        //     return [expense, ...prevExpenses];
        // });
        setExpenses((prevExpenses) => {
            let newSet = [...prevExpenses];
            newSet.push(expense);
            return newSet;
        });

    }

    // const filterExpenseHandler = (filterYear) => { // was not right, removed items entirely
    //     setExpenses( (prevExpenses) => {
    //         let currExpenses = [...prevExpenses];
    //         let filtered = currExpenses.filter(ex => ex.date.getFullYear().toString() === filterYear);
    //         setExpenses(filtered);
    //     })
    // }

    return (
        <div className="mainPage">
            <HeaderComponent/>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpenseReport expenses={expenses}/>
            <FooterComponent/>
        </div>
    )

}

export default App;
