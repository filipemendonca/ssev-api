# # Dockerfile

# FROM node:18-alpine

# # Define diretório de trabalho
# WORKDIR /app

# # Copia arquivos necessários
# COPY package*.json ./
# RUN npm install

# # Copia o restante do código
# COPY . .

# # Gera os arquivos Prisma
# RUN npx prisma generate

# # Compila o projeto
# RUN npm run build

# # Comando de inicialização
# CMD npx prisma migrate deploy && \
#     node dist/prisma/seed.js && \
#     npm run start:prod

# Base Debian (muito mais compatível com LibreOffice)
FROM node:20-slim

# Instala LibreOffice + fontes
RUN apt-get update && apt-get install -y \
    libreoffice \
    libreoffice-writer \
    fonts-dejavu \
    fonts-liberation \
    fonts-freefont-ttf \
    && rm -rf /var/lib/apt/lists/*

# Define diretório de trabalho
WORKDIR /app

# Copia dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Prisma
RUN npx prisma generate

# Build do Nest
RUN npm run build

# Expõe porta (boa prática no Render)
EXPOSE 3000

# Start
CMD npx prisma migrate deploy && \
    node dist/prisma/seed.js && \
    npm run start:prod
