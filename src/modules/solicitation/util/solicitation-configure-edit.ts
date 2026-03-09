import { Role, SolicitationStatus } from "../../../../generated/prisma";

interface SolicitationConfigureEdit {
  canEdit: boolean;
}

export function config({ canEdit }: SolicitationConfigureEdit) {
  return { canEdit };
}

export function validateEditSolicitation(
  userRole: Role,
  status: SolicitationStatus,
): SolicitationConfigureEdit {
  switch (status) {
    case SolicitationStatus.CRIADO:
    case SolicitationStatus.FILTRAGEM:
    case SolicitationStatus.EM_TRANSPORTE:
      return config({ canEdit: true });
    case SolicitationStatus.EM_ANALISE:
      if (userRole === Role.ADMINISTRADOR || userRole === Role.PATOLOGISTA) {
        return config({ canEdit: true });
      } else {
        return config({ canEdit: false });
      }
    case SolicitationStatus.CANCELADO:
    case SolicitationStatus.FINALIZADO:
      return config({ canEdit: false });
    case SolicitationStatus.BLOQUEADO:
      return config({ canEdit: true });
  }
}
