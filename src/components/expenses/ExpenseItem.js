import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import './ExpenseItem.css';
import './Expenses.css'

function ExpenseItem(props) {
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div id={props.id}>
                <h2 className='expense-item__description'>{props.title}</h2>
                <div className='expense-item__price'>R{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;