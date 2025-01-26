import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@services/client";
import { ICheckedTipsResponse } from "@interfaces/tips";
import { useCheckedTips } from "@contexts/CheckedTipsContext";

const fetchCheckedTipsFn = async (): Promise<ICheckedTipsResponse> => {
  const response = await apiClient.get("/tips/checked-tips");
  return response.data;
};

export function useFetchCheckedTips() {
  const { dispatch } = useCheckedTips();

  const queryResult = useQuery<ICheckedTipsResponse>({
    queryKey: ["checkedTips"],
    queryFn: () => fetchCheckedTipsFn(),
    retry: 3,
  });

  React.useEffect(() => {
    if (queryResult.data) {
      dispatch({
        type: "SET_CHECKED_TIPS",
        payload: queryResult?.data?.data,
      });
    }
  }, [queryResult.data, dispatch]);

  return queryResult;
}
