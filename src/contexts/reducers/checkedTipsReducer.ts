import { CheckedTipsAction, ICheckedTips } from "@interfaces/tips";

const setCheckedTips = (
  state: { checkedTips: ICheckedTips | null },
  checkedTips: ICheckedTips
) => {
  return {
    ...state,
    checkedTips,
  };
};

// Reducer function
export const checkedTipsReducer = (
  state: { checkedTips: ICheckedTips | null },
  action: CheckedTipsAction
): { checkedTips: ICheckedTips | null } => {
  switch (action.type) {
    case "SET_CHECKED_TIPS":
      return setCheckedTips(state, action.payload);
    default:
      return state;
  }
};
