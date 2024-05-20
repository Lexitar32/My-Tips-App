import { BudgetAction, BudgetState, ITransactions } from "@interfaces/budget";
import { updateBalances } from "@utils/helpers";

const addNewTransaction = (state: BudgetState, data: ITransactions) => {
  const newTransactions = [...state.transactions, data];
  const balances = updateBalances(newTransactions);

  return {
    ...state,
    transactions: newTransactions,
    ...balances,
  };
};

const setTransactions = (state: BudgetState, transactions: ITransactions[]) => {
  const balances = updateBalances(transactions);
  return {
    ...state,
    transactions,
    ...balances,
  };
};

const editTransaction = (state: BudgetState, transactionId: string) => {
  return {
    ...state,
  };
};

const deleteTransaction = (state: BudgetState, transactionId: string) => {
  return {
    ...state,
  };
};

export const budgetReducer = (
  state: BudgetState,
  action: BudgetAction
): BudgetState => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return addNewTransaction(state, action.payload);
    case "SET_TRANSACTIONS":
      return setTransactions(state, action.payload);
    case "EDIT_TRANSACTION":
      return editTransaction(state, action.payload);
    case "DELETE_TRANSACTION":
      return deleteTransaction(state, action.payload);
    default:
      return state;
  }
};
