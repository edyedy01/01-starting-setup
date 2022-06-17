import Expenses from "./components/expenses/Expenses";

import NewExpense from "./components/newexpense/NewExpense";

function App() {
  /*const expenses = [
    {id: 'e1', title: 'Udemy Course', amount: 200.00, date: new Date(), }, 
    {id: 'e2', title: 'Bazooka', amount: 300.00, date: new Date(), }, 
    {id: 'e3', title: 'Flick knife', amount: 400.00, date: new Date(), }, 
    {id: 'e4', title: 'Bible', amount: 500.00, date: new Date(), }
  ];*/

  //https://github.com/academind/react-complete-guide-code/blob/03-react-basics-working-with-components/extra-files/expenses.txt
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  /*return 
    React.createElement(
      'div', 
      {}, 
      React.createElement('h2', {}, "Let's get started!"), 
      React.createElement(Expenses, {items: expenses})
    ); */

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
