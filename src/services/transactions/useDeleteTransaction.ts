import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import { ITransactions } from "@interfaces/budget";
import toast from "react-hot-toast";

const deleteTransactionFn = async (transactionId: string) => {
  const response = await apiClient.delete(`/transactions/${transactionId}`);
  return response.data;
};

export function useDeleteTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTransactionFn,
    onMutate: async (id: string) => {
      // Cancel current queries for the transactions list
      await queryClient.cancelQueries({ queryKey: ["transactions"] });

      // Optimistically remove the transaction from the transactions list
      const previousTransactions = queryClient.getQueryData<ITransactions[]>([
        "transactions",
      ]);

      queryClient.setQueryData(["transactions"], (old: ITransactions[] = []) =>
        old.filter((transaction) => Number(transaction.id) !== Number(id))
      );

      return { previousTransactions };
    },
    onSuccess: (result, variables, context) => {
      toast.success("Transaction deleted successfully", {
        duration: 4000,
        position: "top-center",
      });
    },
    onError: (error, variables, context) => {
      if (context?.previousTransactions) {
        queryClient.setQueryData(
          ["transactions"],
          context.previousTransactions
        );
      }

      // Refetch the transactions to get the latest data
      queryClient.refetchQueries({ queryKey: ["transactions"] });

      toast.error("Failed to delete transaction", {
        duration: 4000,
        position: "top-center",
      });
    },
  });
}
