import { IUser, UserAction } from "@interfaces/auth";

const signUpUser = (state: { user: IUser | null }, user: IUser) => {
  return {
    ...state,
    user,
  };
};

const loginUser = (state: { user: IUser | null }, user: IUser) => {
  return {
    ...state,
    user,
  };
};

const logOutUser = () => {
  return {
    user: null,
  };
};

// Reducer function
export const authReducer = (
  state: { user: IUser | null },
  action: UserAction
): { user: IUser | null } => {
  switch (action.type) {
    case "SIGN_UP_USER":
      return signUpUser(state, action.payload);
    case "LOG_IN_USER":
      return loginUser(state, action.payload);
    case "LOG_OUT_USER":
      return logOutUser();
    default:
      return state;
  }
};
