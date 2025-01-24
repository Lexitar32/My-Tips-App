import { ReactNode } from "react";

export interface NewUser {
  fullName: string;
  email: string;
  password: string;
}

export interface IUser {
  id?: string;
  fullName: string;
  email: string;
  milestone: string;
  shareId: string;
  tip_index: number;
}

export interface UserState {
  user: IUser | null;
}

export interface AuthContextType {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}

export interface UserProviderProps {
  children: ReactNode;
}

export type UserAction =
  | { type: "SIGN_UP_USER"; payload: IUser }
  | { type: "LOG_OUT_USER"; payload: IUser };
