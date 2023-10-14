import "./ExpenseItemDate.css"

function ExpenseItemDate(props){
    return(
        <div  className="expense-date">
            <div className="expense-date__year">{props.date.getFullYear()}</div>
            <div className="expense-date__month">{props.date.getMonth() + 1}</div>
            <div className="expense-date__day">{props.date.getDate()}</div>
        </div>
    )
}

export default ExpenseItemDate;