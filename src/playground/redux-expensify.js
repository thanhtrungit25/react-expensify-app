import { createStore, combineReducers } from "redux";

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("ffee"));
// store.dispatch(setTextFilter(""));

// store.dispatch(sortByAmount()); // amount
// store.dispatch(sortByDate()); // date

// store.dispatch(setStartDate(2000)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(1250)); // endDate 1250

const demoState = {
  expenses: [
    {
      id: "adfadsff",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// const user = {
//   name: "Joe",
//   age: 24
// };

// console.log({
//   age: 27,
//   ...user,
//   location: "Ho chi minh"
// });
