import React, {useState} from "react";

import Expenses from "./components/expenses/Expenses";

import NewExpense from "./components/newexpense/NewExpense";

//https://github.com/academind/react-complete-guide-code/blob/03-react-basics-working-with-components/extra-files/expenses.txt
const DUMEE_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMEE_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => 
      [expense, ...prevExpenses]
    );
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
