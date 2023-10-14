import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    })

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle:event.target.value
        });
        setUserInput((prevState) => {
            return{...prevState, enteredTitle:event.target.value}; 
        })
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount:event.target.value
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate:event.target.value
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
 
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        props.onPassDate(expenseData);
        setUserInput({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: ""
        });
    };


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle} placeholder="input your title"></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01"  value={userInput.enteredAmount} placeholder="input your amount"></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2023-12-31" value={userInput.enteredDate} placeholder="input your date"></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;