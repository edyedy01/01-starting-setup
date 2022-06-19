import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css'
import ExpensesFilter from '../newexpense/ExpensesFilter';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);

        // https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
        /*props = props.items.filter(data => {
            const yearDisplay = data.date.getFullYear();

            console.log(selectedYear);
            console.log(yearDisplay);

            return selectedYear === yearDisplay;
        });

        console.log(props);*/
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
                {props.items.map((data) => {
                    return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date}/>
                })}
            </Card>
        </div>
    );
}

export default Expenses;