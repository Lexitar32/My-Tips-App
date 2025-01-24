import { ITransactions } from "@interfaces/budget";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// function to check authentication
export const checkAuthentication = () => {
  const accessToken = localStorage.getItem("accessToken");

  // Check if the token exists and return true or false
  return Boolean(accessToken);
};

// function to combine classnames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}