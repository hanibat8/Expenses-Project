import React,{useState} from "react";
import './NewExpenseForm.css';

const NewExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    const titleChangeHandler=(e)=>{
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandler=(e)=>{
        setEnteredAmount(e.target.value);
    }

    const dateChangeHandler=(e)=>{
        setEnteredDate(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (     
        <form onSubmit={submitHandler} className='new-expense-form'>
            <label>Title
                <input type='text' 
                       value={enteredTitle} 
                       onChange={titleChangeHandler}/>
            </label>
            <label>Amount
                <input type='number' 
                       value={enteredAmount} 
                       min='0.01' step='0.01' 
                       onChange={amountChangeHandler}/>
            </label>
            <label>Date
                <input type='date' 
                       value={enteredDate}  
                       min='2019-01-01' max='2022-12-31' 
                       onChange={dateChangeHandler}/>
            </label>
            <button type='submit'>Add Expense</button>
        </form>
    );
}

export default NewExpenseForm;