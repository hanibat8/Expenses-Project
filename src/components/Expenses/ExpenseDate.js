import React from "react";
import './ExpenseDate.css';

const ExpenseDate=(props)=>{
    const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    //console.log(props.date.getMonth(),props.date.getFullYear(),props.date.getDate());
    return (
        <div className='expense-date'>
            <p className='expense-date-month'>{months[props.date.getMonth()]}</p>
            <p className='expense-date-year'>{props.date.getFullYear()}</p>
            <p className='expense-date-date'>{props.date.getDate()}</p>
        </div>
    )
}

export default ExpenseDate;