// prisma/seed.ts
import { hash } from "bcrypt";
import { Role } from "@prisma/client";
import { PrismaService } from "./prisma.service";

import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const prisma = new PrismaService();

  const hashedPassword = await hash("123456", 10);

  // Criar os usuários "admin" e "laboratorio"
  // Se já existirem, eles serão ignorados devido ao skipDuplicates: true
  await prisma.user.createMany({
    data: [
      {
        name: "admin",
        email: "admin@example.com",
        isActive: true,
        role: Role.ADMINISTRADOR,
        password: hashedPassword,
      },
      {
        name: "laboratorio",
        email: "laboratorio@example.com",
        isActive: true,
        role: Role.VETERINARIO,
        password: hashedPassword,
      },
      {
        name: "patologista",
        email: "patologista@example.com",
        isActive: true,
        role: Role.PATOLOGISTA,
        password: hashedPassword,
      },
    ],
    skipDuplicates: true,
  });

  // Criar os tipos de amostras
  // Se já existirem, eles serão ignorados devido ao skipDuplicates: true
  await prisma.sample.createMany({
    data: [
      { name: "Sangue" },
      { name: "Sangue completo" },
      { name: "Urina" },
      { name: "Raspado de Pele" },
      { name: "Swab" },
      { name: "Amostra Citológica" },
      { name: "Biópsia" },
      { name: "Soro" },
      { name: "Medula Óssea" },
    ],
    skipDuplicates: true,
  });

  // Criar os tipos de exames
  // Se já existirem, eles serão ignorados devido ao skipDuplicates: true
  await prisma.exams.createMany({
    data: [
      { name: "Pesquisa de Hematozoários" },
      { name: "Mielograma" },
      { name: "Análise de Derrames Cavitários" },
      { name: "Citologia" },
      { name: "Histopatologia" },
      { name: "Sorologia Simples" },
      { name: "Sorologia com Diluição Total" },
      { name: "Biologia Molecular" },
    ],
    skipDuplicates: true,
  });

  await prisma.infectiousAgents.createMany({
    data: [
      { name: "Leishmania spp" },
      { name: "Leishmania infantum" },
      { name: "L braziliensis" },
      { name: "Ehrlichia spp" },
      { name: "Ehrlichia canis" },
      { name: "Babesia spp" },
      { name: "Babesia canis" },
      { name: "Babesia gibsoni" },
      { name: "Babesia caballi" },
      { name: "Babesia equi" },
      { name: "Anaplasma spp" },
      { name: "Anaplasma platys" },
      { name: "A phagocytophilum" },
      { name: "Cinomose canina" },
      { name: "Brucella spp" },
      { name: "Brucella abortus" },
      { name: "Parvovirose canina" },
      { name: "FIV" },
      { name: "FELV" },
      { name: "Coronavírus canino" },
      { name: "Coronavírus felino" },
      { name: "Calicivírus felino" },
      { name: "Borrelia burgdoferi" },
      { name: "Giardia spp" },
      { name: "Giardia lamblia" },
      { name: "Leptospira interrogans" },
      { name: "Neospora spp" },
      { name: "Neospora caninum" },
      { name: "Theileria spp" },
      { name: "Histoplasma spp" },
      { name: "H capsulatum" },
      { name: "Bartonella spp" },
      { name: "Haemobartonella felis" },
      { name: "Mycoplasma spp" },
      { name: "M haemofelis" },
      { name: "M haemocanis" },
      { name: "Toxoplasma gondii" },
      { name: "Trypanosoma spp" },
      { name: "Trypanosoma cruzi" },
      { name: "Trypanosoma vivax" },
      { name: "Trypanosoma evansi" },
      { name: "Dirofilaria immitis" },
      { name: "Cryptococcus spp" },
      { name: "C neoformans" },
      { name: "Hepatozoon spp" },
      { name: "Hepatozoon canis" },
      { name: "Toxocara spp" },
      { name: "Toxocara canis" },
      { name: "Herpesvirus canino" },
      { name: "Herpesvirus felino 1" },
      { name: "Herpesvirus equino 1" },
      { name: "Rhodococcus equi" },
      { name: "Rangelia vitalli" },
    ],
    skipDuplicates: true,
  });

  console.log("🌱 Seed concluído.");
}

main()
  .catch((e) => {
    console.error("Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    const prisma = new PrismaService();
    await prisma.$disconnect();
  });
