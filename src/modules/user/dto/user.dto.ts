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
