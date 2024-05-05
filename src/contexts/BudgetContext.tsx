import * as React from "react";
import { budgetReducer } from "src/contexts/reducers/budgetReducer";
import {
  BudgetAction,
  BudgetProviderProps,
  BudgetState,
} from "@interfaces/budget";

const initialState = {
  walletBalance: 0,
  incomeBalance: 0,
  expensesBalance: 0,
  transactions: [],
  incomes: [],
  expenses: [],
};

const BudgetContext = React.createContext<{
  state: BudgetState;
  dispatch: React.Dispatch<BudgetAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = React.useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = React.useContext(BudgetContext);
  if (!context)
    throw new Error("Budget context can only be used within budget provider");
  return context;
};
