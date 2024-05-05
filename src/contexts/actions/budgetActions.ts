import { BudgetAction } from "@interfaces/budget";

export const fundWallet = (
  amount: number,
  dispatch: React.Dispatch<BudgetAction>
) => {
  dispatch({
    type: "FUND_WALLET",
    payload: amount,
  });
};
