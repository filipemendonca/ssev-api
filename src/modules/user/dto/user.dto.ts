import { Role } from "@prisma/client";

export type UserDto = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: Role;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserViewDto = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
};

export type UpdateProfileDto = {
  name: string;
  email: string;
  enableChangePassword: boolean;
  newPassword?: string;
  repeatNewPassword?: string;
};
