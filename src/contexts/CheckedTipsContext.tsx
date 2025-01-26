import * as React from "react";
import {
  CheckedTipsContextType,
  CheckedTipsProviderProps,
  ICheckedTips,
} from "@interfaces/tips";
import { checkedTipsReducer } from "./reducers/checkedTipsReducer";

const initialState: { checkedTips: ICheckedTips | null } = {
  checkedTips: null,
};

const CheckedTipsContext = React.createContext<CheckedTipsContextType | null>(
  null
);

export const CheckedTipsProvider = ({ children }: CheckedTipsProviderProps) => {
  const [state, dispatch] = React.useReducer(checkedTipsReducer, initialState);

  return (
    <CheckedTipsContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckedTipsContext.Provider>
  );
};

export const useCheckedTips = () => {
  const context = React.useContext(CheckedTipsContext);
  if (!context) {
    throw new Error(
      "useCheckedTips must be used within an CheckedTipsProvider"
    );
  }
  return context;
};
