import ExpenseReport from "./components/Expenses/ExpenseReport";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

import './App.css';

const App = () => {

    return (
        <div className="mainPage">
            <HeaderComponent/>
            <ExpenseReport/>
            <FooterComponent/>
        </div>
    )

}

export default App;
