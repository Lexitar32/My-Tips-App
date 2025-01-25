import { DailyTipsAction, IDailyTips } from "@interfaces/tips";

const setDailyTips = (
  state: { dailyTips: IDailyTips | null },
  dailyTips: IDailyTips
) => {
  return {
    ...state,
    dailyTips,
  };
};

// Reducer function
export const dailyTipsReducer = (
  state: { dailyTips: IDailyTips | null },
  action: DailyTipsAction
): { dailyTips: IDailyTips | null } => {
  switch (action.type) {
    case "SET_DAILY_TIPS":
      return setDailyTips(state, action.payload);
    default:
      return state;
  }
};
