import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const passDate = (newexpense) => {
        const newExpense = {
            ...newexpense,
            id: Math.random().toString()
        };
        props.onNewExpense(newExpense);
    };

    return(
        <div className="new-expense">
            <ExpenseForm onPassDate={passDate}></ExpenseForm>
        </div>
    );
};

export default NewExpense;