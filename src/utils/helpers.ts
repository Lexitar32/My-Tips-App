import { ITransactions } from "@interfaces/budget";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// function to check authentication
export const checkAuthentication = () => {
  const accessToken = localStorage.getItem("accessToken");

  // Check if the token exists and return true or false
  return { token: Boolean(accessToken) };
};

// function to format amount
export const formatAmount = (amount: number) => {
  return amount.toLocaleString();
};

// function to combine classnames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper functions to update balances
export const updateBalances = (transactions: ITransactions[]) => {
  let walletBalance = 0;
  let incomeBalance = 0;
  let expensesBalance = 0;

  transactions.forEach(transaction => {
    if (transaction.type === "Income") {
      walletBalance += transaction.amount;
      incomeBalance += transaction.amount;
    } else if (transaction.type === "Expenses") {
      walletBalance -= transaction.amount;
      expensesBalance += transaction.amount;
    }
  });

  return { walletBalance, incomeBalance, expensesBalance };
};