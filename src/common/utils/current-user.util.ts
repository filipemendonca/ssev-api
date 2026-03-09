import { Role } from "../../../generated/prisma";

export interface CurrentUserType {
  id: string;
  email: string;
  name: string;
  role: Role;
  isActive: boolean;
}
