import { ReactNode } from "react";

export interface ITransactions {
  id?: string;
  transactionId: string;
  description: string;
  transactionDate: string;
  amount: number;
  type: string;
}

export interface BudgetState {
  walletBalance: number;
  incomeBalance: number;
  expensesBalance: number;
  transactions: ITransactions[];
}

export interface BudgetContextType {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetAction>;
}

export interface BudgetProviderProps {
  children: ReactNode;
}

export type BudgetAction =
  | { type: "ADD_TRANSACTION"; payload: ITransactions }
  | { type: "SET_TRANSACTIONS"; payload: ITransactions[] }
  | { type: "EDIT_TRANSACTION"; payload: string }
  | { type: "DELETE_TRANSACTION"; payload: string };
