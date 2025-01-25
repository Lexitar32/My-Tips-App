import { ReactNode } from "react";

export interface IDailyTips {
  id?: string;
  picture?: string;
  tip?: string;
  day?: string;
  category?: string;
  isChecked?: boolean;
  milestone?: string;
}

export interface DailyTipsContextType {
  state: { dailyTips: IDailyTips | null };
  dispatch: React.Dispatch<any>;
}

export interface DailyTipsProviderProps {
  children: ReactNode;
}

export type DailyTipsAction = { type: "SET_DAILY_TIPS"; payload: IDailyTips };
