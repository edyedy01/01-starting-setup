import './ExpenseDate.css'

function ExpenseDate(props) {
    const monthDisplay = props.date.toLocaleString('en-US', {month: 'long'});
    const dayDisplay = props.date.toLocaleString('en-US', {month: '2-digit'});
    const yearDisplay = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{monthDisplay}</div>
            <div className='expense-date__day'>{dayDisplay}</div>
            <div className='expense-date__year'>{yearDisplay}</div>
        </div>
    );
}

export default ExpenseDate;