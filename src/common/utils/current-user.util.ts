import { Role } from "../../../prisma/generated";

export interface CurrentUserType {
  id: string;
  email: string;
  name: string;
  role: Role;
  isActive: boolean;
}
