import "./ExpensesFilterBar.css"

const ExpensesFilterBar = (props) => {

    const len = props.monthExpense.amount;
    
    const barLength = len;

    const barStyle = {
        height: `${barLength}px`,
    };

    return(
        <div className="bar-skt">
            <div>{len}</div>
            <div className="bar" style={barStyle}>
                
            </div>
            <label>
                {props.monthExpense.month}
            </label>
        </div>
        
    );
};

export default ExpensesFilterBar;