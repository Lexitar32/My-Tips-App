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

export interface IDailyTipsResponse {
  data: IDailyTips;
}

export interface ICheckedTipsProps {
  id: string;
  picture: string;
  tip: string;
  category: string;
}

export interface ICheckedTips {
  checkedTips: ICheckedTipsProps[];
  milestone?: string;
  shareId?: string;
  username?: string;
}

export interface ICheckedTipsResponse {
  data: ICheckedTips;
}

export interface DailyTipsContextType {
  state: { dailyTips: IDailyTips | null };
  dispatch: React.Dispatch<any>;
}

export interface CheckedTipsContextType {
  state: { checkedTips: ICheckedTips | null };
  dispatch: React.Dispatch<any>;
}

export interface DailyTipsProviderProps {
  children: ReactNode;
}

export interface CheckedTipsProviderProps {
  children: ReactNode;
}

export type DailyTipsAction = { type: "SET_DAILY_TIPS"; payload: IDailyTips };

export type CheckedTipsAction = {
  type: "SET_CHECKED_TIPS";
  payload: ICheckedTips;
};
