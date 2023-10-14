import React from 'react';
import ExpensesFilterGraph from "./ExpensesFilterGraph"
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const selectYear = (event) => {
        props.onChooseYear(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={selectYear} value={props.onSelectYear}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
            <ExpensesFilterGraph year={props.onShowYear}></ExpensesFilterGraph>
        </div>
    );
};

export default ExpensesFilter;