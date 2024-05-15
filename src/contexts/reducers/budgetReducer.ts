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

const editTransaction = (state: BudgetState, walletId: string) => {
  return {
    ...state,
  };
};

const deleteTransaction = (state: BudgetState) => {
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
    case "EDIT_TRANSACTION":
      return editTransaction(state, action.payload);
    case "DELETE_TRANSACTION":
      return deleteTransaction(state);
    default:
      return state;
  }
};
