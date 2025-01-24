import * as React from "react";
import { authReducer } from "@contexts/reducers/authReducer";
import { AuthContextType, UserProviderProps, IUser } from "@interfaces/auth";

const initialState: { user: IUser | null } = {
  user: null,
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
