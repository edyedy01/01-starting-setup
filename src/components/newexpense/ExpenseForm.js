import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEntererdTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [eneteredDate, setEnteredDate] = useState('');
    const [displayAddButton, setDispalyAddButton] = useState('1');

    const titleChangeHandler = (event) => {
        setEntererdTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle, 
            amount: enteredAmount, 
            date: new Date(eneteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEntererdTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const onButtonClickHandler = (event) => {
        if ('1' === displayAddButton) {
            setDispalyAddButton('0');
        } else {
            setDispalyAddButton('1');
        }

        setEntererdTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        console.log(displayAddButton);
    }

    if ('1' === displayAddButton) {
        return (
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <div className="new-expense__actions">
                        <button onClick={onButtonClickHandler}>Add New Expense</button>
                    </div>
                </div>
            </div>
        );
        
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input value={enteredTitle} type='test' onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input value={enteredAmount} type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input value={eneteredDate} type='date' min="2020-01-01" max="2025-12-31"  onChange={dateChangeHandler}/>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                    </div>
                    <div className="new-expense__actions">
                        <button onClick={onButtonClickHandler}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ExpenseForm;