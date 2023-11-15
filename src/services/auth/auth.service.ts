import {
  EmailInterface,
  IChangePasswordProps,
  IMainAuthProps,
  IRegisterData,
  IResetPasswordData,
  IUpdateUserDetails,
} from "@interfaces/auth.interface";
import axiosInstance from "@services/api";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REFRESH_TOKEN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  UPDATE_USER_PROFILE,
  GET_USER_PROFILE,
} from "./auth.endpoint";

const registerUserService = async (registerUserPayload: IRegisterData) => {
  return await axiosInstance.post(REGISTER_USER, registerUserPayload);
};

const loginUserService = async (loginUserPayload: IMainAuthProps) => {
  return await axiosInstance.post(LOGIN_USER, loginUserPayload);
};

const logoutUserService = async () => {
  return await axiosInstance.delete(LOGOUT_USER);
};

const forgotPasswordService = async (email: EmailInterface) => {
  return await axiosInstance.post(FORGOT_PASSWORD, email);
};

const resetPasswordService = async (
  resetUserPasswordPayload: IResetPasswordData
) => {
  return await axiosInstance.post(RESET_PASSWORD, resetUserPasswordPayload);
};

const refreshTokenService = async () => {
  return await axiosInstance.get(REFRESH_TOKEN);
};

const changePasswordUserService = async (
  changePasswordPayload: IChangePasswordProps
) => {
  return await axiosInstance.post(CHANGE_PASSWORD, changePasswordPayload);
};

const updateUserDetails = async (updateProfileDetails: IUpdateUserDetails) => {
  return await axiosInstance.put(UPDATE_USER_PROFILE, updateProfileDetails);
};

const getUserDetailsService = async () => {
  return await axiosInstance.get(GET_USER_PROFILE);
};

export {
  changePasswordUserService,
  forgotPasswordService,
  loginUserService,
  logoutUserService,
  refreshTokenService,
  registerUserService,
  updateUserDetails,
  getUserDetailsService,
  resetPasswordService,
};
