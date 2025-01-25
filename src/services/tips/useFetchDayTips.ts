import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import { IDailyTipsResponse } from "@interfaces/tips";
import { useDailyTips } from "@contexts/DailyTipsContext";

const fetchDailyTipsFn = async (category: string): Promise<IDailyTipsResponse> => {
  const response = await apiClient.get(`/tips/day-tip/${category}`);
  return response.data;
};

export function useFetchDailyTips(category: string) {
  const { dispatch } = useDailyTips();

  const queryResult = useQuery<IDailyTipsResponse>({
    queryKey: ["dailyTips", category],
    queryFn: () => fetchDailyTipsFn(category),
    retry: 3,
    enabled: !!category,
  });

  React.useEffect(() => {
    if (queryResult.data) {
      dispatch({
        type: "SET_DAILY_TIPS",
        payload: queryResult.data,
      });
    }
  }, [queryResult.data, dispatch]);

  return queryResult;
}
