export type ProfileDto = {
  id: string;
  name: string;
  email: string;
  enableChangePassword: boolean;
  newPassword: string;
  repeatNewPassword: string;
};
