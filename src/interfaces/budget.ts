import { ReactNode } from "react";

export interface IExpenses {
  title: string;
  description: string;
  date: string;
  amount: number;
}

export interface Income {
  title: string;
  description: string;
  date: string;
  amount: number;
}

export interface ITransactions {
  title: string;
  description: string;
  date: string;
  amount: number;
  type: string;
}

export interface BudgetState {
  walletBalance: number;
  incomeBalance: number;
  expensesBalance: number;
  transactions: ITransactions[];
  incomes: Income[];
  expenses: IExpenses[];
}

export interface BudgetContextType {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetAction>;
}

export interface BudgetProviderProps {
  children: ReactNode;
}

export type BudgetAction =
  | { type: "FUND_WALLET"; payload: number }
  | { type: "EDIT_WALLET"; payload: string }
  | { type: "CLEAR_WALLET_BALANCE"; payload: Income };

export interface IWallet {
  walletBalance: number;
}
