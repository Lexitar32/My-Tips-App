import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import { ICheckedTipsResponse } from "@interfaces/tips";

const fetchSharedTipsFn = async (shareId: string): Promise<ICheckedTipsResponse> => {
  const response = await apiClient.get(`/tips/share-checked-tips/${shareId}`);
  return response.data;
};

export function useSharedTips(shareId: string) {
  const queryResult = useQuery<ICheckedTipsResponse>({
    queryKey: ["sharedTips", shareId],
    queryFn: () => fetchSharedTipsFn(shareId),
    retry: 3,
    enabled: !!shareId,
  });

  return queryResult;
}
