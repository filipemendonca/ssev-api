import { Role } from "@prisma/client";

export interface CurrentUserType {
  id: string;
  email: string;
  name: string;
  role: Role;
  isActive: boolean;
}
