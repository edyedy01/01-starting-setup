import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css'
import ExpensesFilter from '../newexpense/ExpensesFilter';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2020');
    const [dataList, setDataList] = useState(props.items);

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);

        /*console.log(dataList);

        const filteredDataList = props.items.filter(data => {
            const yearDisplay = data.date.getFullYear();

            console.log(selectedYear);
            console.log(yearDisplay);
            console.log(selectedYear === yearDisplay + '');

            return selectedYear === yearDisplay + '';
        });

        console.log(filteredDataList);

        setDataList(filteredDataList);

        console.log(dataList);*/
    }

    const filteredExpenses = props.items.filter((expenses) => {
        return expenses.date.getFullYear().toString() === selectedYear;
    });

    let expensesContent = <p>No expenses found</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.length > 0 && filteredExpenses.map((data) => {
            return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date}/>
        })
    }

    // bellow solution works but without conditional
    /*return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
                {dataList.map((data) => {
                    return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date}/>
                })}
            </Card>
        </div>
    );*/

    // bellow solution works with conditional
    /*return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
                {filteredExpenses.length === 0 ? <p>No expenses found</p> : filteredExpenses.map((data) => {
                    return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date}/>
                })}
            </Card>
        </div>
    );*/

    // bellow solution works with conditonal and is easier to read
    /*return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
                {filteredExpenses.length === 0 && <p>No expenses found</p>}
                {filteredExpenses.length > 0 && filteredExpenses.map((data) => {
                    return <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date}/>
                })}
            </Card>
        </div>
    );*/

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
                {expensesContent}
            </Card>
        </div>
    );

}

export default Expenses;