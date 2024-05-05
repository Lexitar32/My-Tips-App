import { BudgetAction, BudgetState } from "@interfaces/budget";

const addWalletBalance = (state: BudgetState, amount: number) => {
  return {
    ...state,
    walletBalance: amount,
  };
};

const editWalletBalance = (state: BudgetState, walletId: string) => {
  return {
    ...state,
  };
};

const clearWalletBalance = (state: BudgetState) => {
  return {
    ...state,
  };
};

export const budgetReducer = (
  state: BudgetState,
  action: BudgetAction
): BudgetState => {
  switch (action.type) {
    case "FUND_WALLET":
      return addWalletBalance(state, action.payload);
    case "EDIT_WALLET":
      return editWalletBalance(state, action.payload);
    case "CLEAR_WALLET_BALANCE":
      return clearWalletBalance(state);
    default:
      return state;
  }
};
