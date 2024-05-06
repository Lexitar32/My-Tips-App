import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const formatAmount = (amount: number) => {
  return amount.toLocaleString();
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}