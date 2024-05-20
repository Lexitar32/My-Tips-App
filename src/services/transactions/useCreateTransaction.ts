import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import { ITransactions } from "@interfaces/budget";
import { useBudget } from "@contexts/BudgetContext";

const createTransactionFn = async (newTransaction: ITransactions) => {
  const response = await apiClient.post("/transactions", newTransaction);
  return response.data;
};

export function useCreateTransaction() {
  const queryClient = useQueryClient();
  const { dispatch } = useBudget();

  return useMutation({
    mutationFn: createTransactionFn,
    onMutate: async (newTransaction: ITransactions) => {
      // Cancel current queries for the transactions list
      await queryClient.cancelQueries({ queryKey: ["transactions"] });

      // Add optimistic transaction to transaction list
      queryClient.setQueryData(
        ["transactions"],
        (old: ITransactions[] = []) => [...old, newTransaction]
      );

      // Return context with the optimistic transaction
      return { optimisticTransaction: newTransaction };
    },
    onSuccess: (result, variables, context) => {
      dispatch({
        type: "ADD_TRANSACTION",
        payload: context.optimisticTransaction,
      });

      // Replace optimistic transaction in the transaction list with the result
      queryClient.setQueryData(["transactions"], (old: ITransactions[] = []) =>
        old.map((transaction) =>
          transaction.transactionId ===
          context.optimisticTransaction.transactionId
            ? result
            : transaction
        )
      );
    },
    onError: (error, variables, context) => {
      // Remove optimistic transaction from the transaction list
      queryClient.setQueryData(["transactions"], (old: ITransactions[] = []) =>
        old.filter(
          (transaction) =>
            transaction.transactionId !==
            context?.optimisticTransaction.transactionId
        )
      );
    },
  });
}
