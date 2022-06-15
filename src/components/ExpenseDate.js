import './ExpenseDate.css'

function ExpenseDate(props) {
    const monthDisplay = props.date.toLocaleString('en-US', {month: 'long'});
    const dayDisplay = props.date.toLocaleString('en-US', {month: '2-digit'});
    const yearDisplay = props.date.getFullYear();

    return (
        <div>
            <div>{monthDisplay}</div>
            <div>{dayDisplay}</div>
            <div>{yearDisplay}</div>
        </div>
    );
}

export default ExpenseDate;