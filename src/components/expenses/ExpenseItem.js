import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import './ExpenseItem.css';
import './Expenses.css'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!!!');
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div key={props.id}>
                <h2 className='expense-item__description'>{title}</h2>
                <div className='expense-item__price'>R{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;