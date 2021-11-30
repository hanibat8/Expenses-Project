import React from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem=(props)=>{
    
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <h2 className='expense-item-heading'>{props.title}</h2>
            <div className='expense-item-amount'>
                ${props.amount}
            </div>
        </div>
    );
    
};

export default ExpenseItem; 