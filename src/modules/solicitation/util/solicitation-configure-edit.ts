import { Role, SolicitationStatus } from "@prisma/client";

interface SolicitationConfigureEdit {
  canEdit: boolean;
}

export function Config({ canEdit }: SolicitationConfigureEdit) {
  return { canEdit };
}

export function ValidateEditSolicitation(
  userRole: Role,
  status: SolicitationStatus
): SolicitationConfigureEdit {
  switch (status) {
    case SolicitationStatus.CRIADO:
    case SolicitationStatus.FILTRAGEM:
    case SolicitationStatus.EM_TRANSPORTE:
      return Config({ canEdit: true });
    case SolicitationStatus.EM_ANALISE:
      if (userRole === Role.ADMINISTRADOR || userRole === Role.PATOLOGISTA) {
        return Config({ canEdit: true });
      } else {
        return Config({ canEdit: false });
      }
    case SolicitationStatus.CANCELADO:
    case SolicitationStatus.FINALIZADO:
      return Config({ canEdit: false });
    case SolicitationStatus.BLOQUEADO:
      return Config({ canEdit: true });
  }
}
