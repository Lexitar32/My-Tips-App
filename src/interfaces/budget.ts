import { ReactNode } from "react";
import { IExpenses } from "./expenses";
import { Income } from "./income";
import { ITransactions } from "./transactions";

export interface BudgetState {
  walletBalance: number;
  incomeBalance: number;
  expensesBalance: number;
  transactions: ITransactions[];
  incomes: Income[];
  expenses: IExpenses[];
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
