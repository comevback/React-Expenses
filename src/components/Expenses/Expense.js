import ExpenseItemDate from "./ExpenseItemDate";
import "./Expense.css"
import Card from "../UI/Card"

function Expense(props){

    const deleteExpense = () => {
        props.delete(props.expense);
    };

    return(
        <Card className="expense-item">
            <ExpenseItemDate date={props.expense.date}>
            </ExpenseItemDate>
            <div className='expense-item__description'>
                <h1>
                    {props.expense.title}
                </h1>
                <div>
                    ${props.expense.amount}
                </div>
            </div>
            <div>
                <button onClick={deleteExpense}>delete</button>
            </div>
        </Card>
    );
}

export default Expense;

