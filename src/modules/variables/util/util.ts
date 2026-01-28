export type ColumnResponse = { column_name: string }[];

const translations: Record<string, string> = {
  gender: "Gênero",
  tutor: "Tutor",
  patient: "Paciente",
  doctor: "Veterinário",
  hospitalVet: "Hospital Veterinário",
  age: "Idade",
  createdAt: "Data de criação da solicitação",
  updatedAt: "Data de atualização da solicitação",
  finishedAt: "Data de finalização da solicitação",
  canceledAt: "Data de cancelamento da solicitação",
  status: "Status",
  specie: "Espécie",
  samples: "Amostras",
  exams: "Exames",
  examResultType: "Tipo de Resultado do Exame",
  infectiousAgents: "Agentes Infecciosos",
  bloodCollectionTubeColor: "Cor do Tubo de Coleta de Sangue",
  solicitationClinicAvaliation: "Avaliação Clínica da Solicitação",
  solicitationColectTypeConclusion: "Tipo de Coleta da Solicitação (Conslusão)",
  solicitationConclusionText: "Texto de Conclusão da Solicitação",
  solicitationResult: "Resultado da Solicitação",
  solicitationSampleConclusion: "Conclusão da Amostra da Solicitação",
  solicitationSampleQuality: "Qualidade da Amostra da Solicitação",
};

function beautifyName(column: string): string {
  // Exemplo: "createdAt" → "Created At" / "solicitation_result" → "Solicitation Result"
  const spaced = column
    .replace(/([a-z])([A-Z])/g, "$1 $2") // separa camelCase
    .replace(/_/g, " "); // separa snake_case
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export async function mapColumns(
  response: ColumnResponse,
): Promise<Record<string, string>> {
  if (!response.length) {
    return {};
  }

  const mapped: Record<string, string> = {};

  for (const { column_name } of response) {
    // se houver tradução manual, usa ela
    if (translations[column_name]) {
      mapped[column_name] = translations[column_name];
    } else {
      // se não houver, gera automaticamente um nome "bonito"
      mapped[column_name] = beautifyName(column_name);
    }
  }

  return mapped;
}
