//https://github.com/academind/react-complete-guide-code/blob/04-react-state-events/extra-files/ExpensesFilter.js
import React, {useState} from 'react';
import Card from '../ui/Card';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('');

    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

  return (
    <Card>
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
    </Card>
  );
};

export default ExpensesFilter;