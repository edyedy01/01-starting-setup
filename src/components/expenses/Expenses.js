import React, {useState} from 'react';
// import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css'
import ExpensesFilter from '../newexpense/ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2020');
    const [dataList, setDataList] = useState(props.items);

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expenses) => {
        return expenses.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );

}

export default Expenses;