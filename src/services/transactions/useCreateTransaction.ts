import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import { ITransactions } from "@interfaces/budget";
import toast from "react-hot-toast";

const createTransactionFn = async (newTransaction: ITransactions) => {
  const response = await apiClient.post("/transactions", newTransaction);
  return response.data;
};

export function useCreateTransaction() {
  const queryClient = useQueryClient();

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
      // Replace optimistic transaction in the transaction list with the result
      queryClient.setQueryData(["transactions"], (old: ITransactions[] = []) =>
        old.map((transaction) =>
          transaction.transactionId ===
          context.optimisticTransaction.transactionId
            ? result
            : transaction
        )
      );

      toast.success("Transaction created successfully", {
        duration: 4000,
        position: "top-center",
      });
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

      toast.error("Failed to create transaction", {
        duration: 4000,
        position: "top-center",
      });
    },
  });
}
