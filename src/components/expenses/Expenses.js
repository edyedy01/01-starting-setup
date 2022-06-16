import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css'

function Expenses(props) {
    return (
        <Card className='expenses'>
            {props.items.map((data) => {
                return <ExpenseItem id={data.id} title={data.title} amount={data.amount} date={data.date}/>
            })}
        </Card>
    );
}

export default Expenses;