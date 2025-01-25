import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import toast from "react-hot-toast";

const checkTipFn = async (id: string) => {
  const response = await apiClient.post(`/tips/mark-checked/${id}`);
  return response.data;
};

export function useCheckTips() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: checkTipFn,
    onSuccess: (result, variables) => {
      toast.success("Tip marked as checked!", {
        duration: 4000,
        position: "top-center",
      });

      // Update cache for the "dailyTips" query
      queryClient.setQueryData(["dailyTips"], (oldData: any) => {
        if (!oldData) return oldData;

        // Update the specific tip as checked
        return {
          ...oldData,
          isChecked: true,
        };
      });
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to mark tip as checked.",
        {
          duration: 4000,
          position: "top-center",
        }
      );
    },
    onSettled: () => {
      // Optionally refetch the "dailyTips" query for fresh data
      queryClient.invalidateQueries({ queryKey: ["dailyTips"] });
    },
  });
}
