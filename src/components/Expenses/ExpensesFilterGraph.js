import ExpensesFilterBar from "./ExpensesFilterBar";
import "./ExpensesFilterGraph.css"

const ExpensesFilterGraph = (props) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const expenses = props.year;
    
    const graph = Array.from({length: 12}, (_, i) => ({
        amount: 0,
        month: months[i]
    }));

    expenses.forEach((expense) => {
        const monthIndex = expense.date.getMonth();
        graph[monthIndex].amount += Number(expense.amount);
    });
    
    return(
        <div className="expense-graph">
            {graph.map((month, index) => (
            <ExpensesFilterBar key={index} monthExpense={month}></ExpensesFilterBar>
        ))}
        </div>
        
    )
    
};

export default ExpensesFilterGraph;