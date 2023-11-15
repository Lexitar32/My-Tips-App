export interface EmailInterface {
  email: string;
}

export interface IMainAuthProps extends EmailInterface {
  password: string;
}

export interface IRegisterData extends IMainAuthProps {
  firstName: string;
  lastName: string;
}

export interface IResetPasswordData extends IMainAuthProps {
  confirmPassword: string;
  authCode: string;
}

export interface IChangePasswordProps {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  userId: string;
}

export interface IUpdateUserDetails extends EmailInterface {
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  timeZone: string;
  bio: string;
  profilePicture: string;
}
