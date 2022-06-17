import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css'
import ExpensesFilter from '../newexpense/ExpensesFilter';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('');

    const menuSelectionHander = (selectedYear) => {
        setSelectedYear(selectedYear);

        console.log(selectedYear);
    };

    return (
        <div>
            <ExpensesFilter onYearFilterSelection={menuSelectionHander}/>
            <Card className='expenses'>
                {props.items.map((data) => {
                    return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date}/>
                })}
            </Card>
        </div>
    );
}

export default Expenses;