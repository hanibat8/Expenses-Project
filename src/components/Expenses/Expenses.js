import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from './ExpenseItem';
import '../Chart/Chart';
import Chart from '../Chart/Chart';
import './Expenses.css';

const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2021');
    
    const filteredYearHandler=(filteredYear)=>{
        setFilteredYear(filteredYear);
    }

    const filteredExpenses=props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString()===filteredYear;
    });

    let expenseContent;

    if(filteredExpenses.length===0){
        expenseContent=<p className='expenses__fallback'>No expense found</p>;
    }

    if(filteredExpenses.length>0){
        expenseContent=filteredExpenses.map((expense)=>{
            return <ExpenseItem 
                ID={expense.id}
                title={expense.title} 
                amount={expense.amount}
                date={expense.date}/>
        })
    }

    return (
        <div className='expenses'>
            {/* <ExpenseItem
             item={props.expenses[0]}/>
              <ExpenseItem
             item={props.expenses[1]}/>
              <ExpenseItem
             item={props.expenses[2]}/>
              <ExpenseItem
             item={props.expenses[3]}/> */}
            <ExpenseFilter onFilterYear={filteredYearHandler} 
                           items={props.expenses}
                            />
            <Chart />
            {expenseContent}
        </div>
    );
}

export default Expenses;