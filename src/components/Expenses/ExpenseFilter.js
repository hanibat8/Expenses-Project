import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter=(props)=>{
    
    const filterExpense=(e)=>{
        props.onFilterYear(e.target.value);
    }

    return(
        <div className='expense-filter'>
            <h3> Filter by year</h3>
            <select onChange={filterExpense} className='expense-filter-select'>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;