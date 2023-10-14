import React, {useState} from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Card from "./components/UI/Card";
import "./components/UI/Card"
import "./components/Expenses/Expense.css"

function App() {
  const [expenses, setExpenses] = useState(
    [
      { title: "Expense 1", date: new Date(2019,2,5), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 2", date: new Date(2021,10,24), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 3", date: new Date(2022,4,6), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 4", date: new Date(2020,5,15), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 5", date: new Date(2021,3,7), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 6", date: new Date(2022,8,12), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 7", date: new Date(2021,6,9), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 8", date: new Date(2020,7,3), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 9", date: new Date(2019,1,21), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 10", date: new Date(2022,11,14), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 11", date: new Date(2021,9,2), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 12", date: new Date(2020,12,8), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 13", date: new Date(2022,2,19), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 14", date: new Date(2023,0,15), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 15", date: new Date(2023,1,28), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 16", date: new Date(2023,2,7), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 17", date: new Date(2023,3,14), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 18", date: new Date(2023,4,21), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 19", date: new Date(2023,5,2), amount: Math.floor(Math.random() * 100) },
      { title: "Expense 20", date: new Date(2023,6,9), amount: Math.floor(Math.random() * 100) }
  ]
  
  );

  const [showYear, setShowYear] = useState(
    expenses.filter(expense => expense.date.getFullYear() === 2023)
  );

  const [selectYear, setSelectYear] = useState(2023);

  const newExpense = (newExpense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [
        ...prevExpenses,
        newExpense
      ];
      chooseYear(newExpense.date.getFullYear(), updatedExpenses);
      return updatedExpenses;
    });
  };

  const deleteExpense = (deleteExpense) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter(expense => expense !== deleteExpense);
    });
  };

  const chooseYear = (year, exps=expenses) => {
    let showYear;
    if (typeof(year) === 'string') {
        showYear = exps.filter(expense => expense.date.getFullYear() === parseInt(year, 10));
    } else if (typeof(year) === 'number') {
        showYear = exps.filter(expense => expense.date.getFullYear() === year);
    }
    setShowYear(showYear);
    setSelectYear(parseInt(year, 10));
};

  return (
    <div>
      <NewExpense onNewExpense={newExpense}></NewExpense>
      <Card className="expenses">
        <ExpensesFilter onChooseYear={chooseYear} onShowYear={showYear} onSelectYear={selectYear}></ExpensesFilter>
        {showYear.map((expense, index) => (
          <Expense key={index} expense={expense} delete={deleteExpense}></Expense>
        ))}
      </Card>
    </div>
  );
}

export default App;
