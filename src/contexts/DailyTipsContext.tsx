import * as React from "react";
import { dailyTipsReducer } from "@contexts/reducers/dailyTipsReducer";
import {
  DailyTipsContextType,
  DailyTipsProviderProps,
  IDailyTips,
  IDailyTipsResponse,
} from "@interfaces/tips";

const initialState: { dailyTips: IDailyTips | null } = {
  dailyTips: null,
};

const DailyTipsContext = React.createContext<DailyTipsContextType | null>(null);

export const DailyTipsProvider = ({ children }: DailyTipsProviderProps) => {
  const [state, dispatch] = React.useReducer(dailyTipsReducer, initialState);

  return (
    <DailyTipsContext.Provider value={{ state, dispatch }}>
      {children}
    </DailyTipsContext.Provider>
  );
};

export const useDailyTips = () => {
  const context = React.useContext(DailyTipsContext);
  if (!context) {
    throw new Error("useDailyTips must be used within an DailyTipsProvider");
  }
  return context;
};

export const getUserMilestone = (dailyTips: any) => dailyTips?.data;
