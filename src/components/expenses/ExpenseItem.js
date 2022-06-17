import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import './ExpenseItem.css';
// import './Expenses.css'

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div key={props.id} className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>R{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;